/**
 * Google reCAPTCHA v2 configuration.
 *
 * Set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` in `.env.local` to enable the
 * checkbox widget. When unset, the lead form skips the recaptcha check
 * so local development stays frictionless.
 */
export const recaptchaConfig = {
  siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "",
  enabled: Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY),
} as const;
