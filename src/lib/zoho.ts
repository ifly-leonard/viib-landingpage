/**
 * Server-only Zoho CRM helpers.
 *
 * Credentials come from environment variables and are never exposed to the
 * browser. The browser only ever talks to `/api/lead`.
 *
 * ─── Zoho → VIIV lead field mapping ─────────────────────────────────────────
 * Add/override custom Zoho CRM field API names here (single source of truth).
 * ────────────────────────────────────────────────────────────────────────────
 */
export const ZOHO_FIELD_MAP = {
  firstName: "First_Name",
  lastName: "Last_Name", // Zoho CRM requires Last_Name — we always send it
  phone: "Phone",
  email: "Email",
  source: "Lead_Source",
  description: "Description",
} as const;

/** Split a full name into first + last (last is required by Zoho CRM). */
function splitName(name: string): { first: string; last: string } {
  const parts = name.trim().split(/\s+/);
  return {
    first: parts[0] ?? "",
    last: parts.slice(1).join(" ") || parts[0] || "Lead",
  };
}

const {
  ZOHO_CLIENT_ID = "",
  ZOHO_CLIENT_SECRET = "",
  ZOHO_REFRESH_TOKEN = "",
  ZOHO_ACCOUNTS_URL = "https://accounts.zoho.in",
  ZOHO_API_DOMAIN = "https://www.zohoapis.in",
} = process.env;

/** Zoho CRM only lets us send custom fields we own, so start from the core set. */
export const CUSTOM_ZOHO_FIELDS: Record<string, string> = {};

function isConfigured(): boolean {
  return Boolean(ZOHO_CLIENT_ID && ZOHO_CLIENT_SECRET && ZOHO_REFRESH_TOKEN);
}

async function getAccessToken(): Promise<string> {
  if (!isConfigured()) {
    throw new Error("Zoho CRM is not configured on the server.");
  }

  const body = new URLSearchParams({
    refresh_token: ZOHO_REFRESH_TOKEN,
    client_id: ZOHO_CLIENT_ID,
    client_secret: ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const res = await fetch(`${ZOHO_ACCOUNTS_URL}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  const data = (await res.json().catch(() => null)) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  } | null;

  if (!res.ok || !data?.access_token) {
    // Log details server-side only; the caller decides what reaches the browser.
    console.error("[zoho] token exchange failed:", {
      status: res.status,
      error: data?.error,
      error_description: data?.error_description,
    });
    throw new Error("Failed to obtain a Zoho access token.");
  }

  return data.access_token;
}

export type ZohoLeadInput = {
  name: string;
  phone: string;
  email: string;
  source?: string;
  description?: string;
};

/** Create a lead in Zoho CRM. Returns the created record id. */
export async function createZohoLead(input: ZohoLeadInput): Promise<{
  id: string;
}> {
  const accessToken = await getAccessToken();
  const { first, last } = splitName(input.name);

  const lead: Record<string, unknown> = {
    [ZOHO_FIELD_MAP.firstName]: first,
    [ZOHO_FIELD_MAP.lastName]: last,
    [ZOHO_FIELD_MAP.phone]: input.phone,
    [ZOHO_FIELD_MAP.email]: input.email,
  };
  if (input.source) lead[ZOHO_FIELD_MAP.source] = input.source;
  if (input.description) lead[ZOHO_FIELD_MAP.description] = input.description;
  Object.assign(lead, CUSTOM_ZOHO_FIELDS);

  const res = await fetch(`${ZOHO_API_DOMAIN}/crm/v8/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [lead] }),
    cache: "no-store",
  });

  const data = (await res.json().catch(() => null)) as {
    data?: Array<{ code?: string; message?: string; details?: { id?: string } }>;
  } | null;

  // Zoho returns HTTP 201 with per-record status in the body — check both.
  const record = data?.data?.[0];
  const recordStatus = record?.code ?? "";
  const isSuccess = res.ok && recordStatus === "SUCCESS" && Boolean(record?.details?.id);

  if (!isSuccess) {
    console.error("[zoho] lead creation failed:", {
      status: res.status,
      record,
    });
    throw new Error("Failed to create lead in Zoho CRM.");
  }

  return { id: String(record?.details?.id) };
}
