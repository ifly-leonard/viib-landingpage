import { NextResponse } from "next/server";

import { computeOtp, verifyOtpLocally } from "@/lib/otp";

/**
 * Lead-OTP endpoint.
 *
 *  - action === "request": forwards the payload to the n8n webhook so the
 *    OTP (derived from the same salt) is sent over WhatsApp. Fire-and-forget:
 *    a successful HTTP 200 means the workflow started.
 *
 *  - action === "verify": NO n8n round-trip. The OTP is deterministic
 *    (HMAC-SHA256 of `phone|salt|time-bucket` under the server-side pepper),
 *    so we recompute it here and compare locally. The pepper never leaves
 *    this server.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const action = String(body.action ?? "").trim().toLowerCase();

    if (action === "verify") {
      const verified = verifyOtpLocally(body.phone, body.salt, body.otp);
      return NextResponse.json({
        route: verified ? "verified" : "rejected",
        verified,
        phone: body.phone,
        salt: body.salt,
      });
    }

    if (action === "request") {
      const webhookUrl = process.env.NEXT_PUBLIC_OTP_WEBHOOK_URL ?? "";
      if (!webhookUrl) {
        return NextResponse.json(
          { ok: false, error: "OTP webhook is not configured." },
          { status: 500 },
        );
      }

      // Return the deterministic OTP metadata alongside the forward result
      // so the n8n workflow can cross-check it if needed.
      let otpMeta: ReturnType<typeof computeOtp> | null = null;
      try {
        otpMeta = computeOtp(body.phone, body.salt);
      } catch {
        // Pepper may be unset in some environments — non-fatal for the send.
      }

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, otp: otpMeta?.current }),
      });

      const data = await res.json().catch(() => null);
      const payload = Array.isArray(data) ? data[0]?.json ?? data[0] ?? {} : data ?? {};

      if (!res.ok) {
        return NextResponse.json(
          {
            ok: false,
            error:
              payload.message ??
              payload.error ??
              `OTP service returned ${res.status}.`,
          },
          { status: res.status },
        );
      }

      return NextResponse.json({ ok: true, ...payload });
    }

    return NextResponse.json({ ok: false, error: 'action must be "request" or "verify".' }, { status: 400 });
  } catch (err) {
    console.error("[lead-otp] error:", err);
    return NextResponse.json(
      { ok: false, error: "Couldn't reach the OTP service." },
      { status: 502 },
    );
  }
}
