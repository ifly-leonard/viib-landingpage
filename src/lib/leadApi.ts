/**
 * Client-side helper for the Zoho lead flow.
 *
 * The browser never calls Zoho CRM directly — it posts to the local Next.js
 * proxy (`/api/lead`), which exchanges the refresh token and creates the lead
 * server-side.
 */

type LeadResponse = {
  success?: boolean;
  message?: string;
  leadId?: string;
  error?: string;
};

type LeadResult = {
  ok: boolean;
  leadId?: string;
  error?: string;
};

export async function createLead(payload: {
  name: string;
  phone?: string;
  email: string;
  source?: string;
  description?: string;
}): Promise<LeadResult> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => null)) as LeadResponse | null;

    if (res.ok && data?.success) {
      return { ok: true, leadId: data.leadId };
    }

    return {
      ok: false,
      error:
        data?.message ??
        data?.error ??
        "We couldn't submit your application. Please try again.",
    };
  } catch {
    return {
      ok: false,
      error: "Network error — couldn't submit your application. Please try again.",
    };
  }
}
