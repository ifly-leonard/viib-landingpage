/**
 * n8n OTP webhook configuration.
 *
 * `NEXT_PUBLIC_OTP_WEBHOOK_URL` points at an n8n webhook that:
 *  1. Receives the lead form data + a generated salt code,
 *  2. Converts the salt into an OTP, sends it via WhatsApp,
 *  3. Later receives the user-entered OTP + salt and verifies it.
 */
export const otpWebhookConfig = {
  url: process.env.NEXT_PUBLIC_OTP_WEBHOOK_URL ?? "",
  enabled: Boolean(process.env.NEXT_PUBLIC_OTP_WEBHOOK_URL),
} as const;
