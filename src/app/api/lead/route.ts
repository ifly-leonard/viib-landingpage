import { NextResponse } from "next/server";

import { createZohoLead } from "@/lib/zoho";

const NAME_RE = /.+/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

function normalizePhone(value: unknown): string {
  const digits = String(value ?? "").replace(/\D/g, "");
  // Accept "+91 9876543210" / "919876543210" and strip the Indian country code.
  return digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
}

function sanitizeString(value: unknown, maxLength: number): string {
  return String(value ?? "").trim().slice(0, maxLength);
}

/**
 * POST /api/lead
 *
 * Browser → this route → Zoho CRM. Zoho credentials never leave the server.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const name = sanitizeString(body.name, 120);
  const phone = normalizePhone(body.phone);
  const email = sanitizeString(body.email, 120);
  const source = sanitizeString(body.source, 120);
  const description = sanitizeString(body.description, 2000);

  // Required-field validation mirrors the client-side checks.
  if (!NAME_RE.test(name)) {
    return NextResponse.json(
      { success: false, message: "Please tell us your name." },
      { status: 400 },
    );
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json(
      { success: false, message: "Enter a valid 10-digit Indian mobile number." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, message: "Enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const { id } = await createZohoLead({ name, phone, email, source, description });
    return NextResponse.json({
      success: true,
      message: "Lead created successfully",
      leadId: id,
    });
  } catch (err) {
    console.error("[api/lead] failed to create Zoho lead:", err);
    return NextResponse.json(
      { success: false, message: "Failed to create lead" },
      { status: 502 },
    );
  }
}
