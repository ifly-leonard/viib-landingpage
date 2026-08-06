/**
 * Client-side helpers for the OTP flow.
 *
 * Requests go to the local Next.js proxy (`/api/lead-otp`), which forwards
 * to the n8n webhook server-side. This avoids browser CORS preflight issues
 * against the n8n origin.
 *
 * n8n production webhooks are fire-and-forget: every POST returns HTTP 200
 * with `{ message: "Workflow was started" }` immediately, while the workflow
 * runs in the background. For the verify step to return a result, the n8n
 * webhook node must be set to "Respond to Webhook" so the workflow returns
 * `{ verified: true | false }` (or `{ route: "verified" | "rejected" }`)
 * synchronously.
 *
 * We therefore treat:
 *  - request: any successful HTTP 200 as "OTP sent" (WhatsApp delivers it).
 *  - verify:  success only when the payload says `verified`.
 */

type OtpResponse = {
  route?: string;
  verified?: boolean;
  ok?: boolean;
  error?: string;
};

async function post(payload: Record<string, unknown>): Promise<{
  ok: boolean;
  status: number;
  data: OtpResponse;
}> {
  try {
    const res = await fetch("/api/lead-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => null)) as OtpResponse | null;
    return { ok: res.ok, status: res.status, data: data ?? {} };
  } catch {
    return { ok: false, status: 0, data: { ok: false, error: "Network error — couldn't reach the OTP service." } };
  }
}

export async function requestOtp(payload: {
  action: "request";
  name: string;
  phone: string;
  email: string;
  salt: string;
  recaptchaToken?: string | null;
}): Promise<{ ok: boolean; error?: string }> {
  const { ok, data } = await post(payload);
  // Production webhooks return 200 + "Workflow was started" — that's success.
  if (ok || data.route === "send_otp") return { ok: true };
  return { ok: false, error: data.error ?? "Couldn't send the OTP. Please try again." };
}

export async function verifyOtp(payload: {
  action: "verify";
  phone: string;
  salt: string;
  otp: string;
}): Promise<{ ok: boolean; error?: string }> {
  const { ok, data } = await post(payload);
  // Success only when n8n explicitly confirms the OTP matched.
  if (data.verified === true || data.route === "verified") return { ok: true };
  return { ok: false, error: data.error ?? "That OTP didn't match. Try again." };
}

/** Generate a random alphanumeric salt code (e.g. "K7F2Q9"). */
export function generateSalt(length = 6): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const arr = new Uint32Array(length);
  crypto.getRandomValues(arr);
  let out = "";
  for (let i = 0; i < length; i += 1) out += chars[arr[i] % chars.length];
  return out;
}
