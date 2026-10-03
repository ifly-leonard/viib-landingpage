"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RecaptchaWidget } from "@/components/viiv/RecaptchaWidget";
import { degreeOptions, graduationYearOptions, statusOptions } from "@/content/landing/webinar";
import { createLead } from "@/lib/leadApi";
import { recaptchaConfig } from "@/lib/recaptcha.config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

const formItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

/**
 * Animated webinar lead-capture form. Submits through the same `createLead`
 * flow as the /degree popup (browser → /api/lead → Zoho).
 */
export function LandingLeadForm({
  source,
  onSuccess,
}: {
  source: string;
  onSuccess: (lead: { name: string; phone: string }) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) return setError("Please tell us your name.");
    if (!PHONE_RE.test(digits)) return setError("Enter a valid 10-digit Indian mobile number.");
    if (!EMAIL_RE.test(email)) return setError("Enter a valid email address.");
    if (!degree) return setError("Select your degree.");
    if (!graduationYear) return setError("Select your graduation year.");
    if (!status) return setError("Select your current status.");
    if (recaptchaConfig.enabled && !recaptchaToken) {
      return setError("Please complete the security check.");
    }
    setSending(true);
    try {
      const leadRes = await createLead({
        name: name.trim(),
        phone: `+91 ${digits}`,
        email: email.trim(),
        degree,
        graduationYear,
        status,
        source: `VIIV Full-Stack Sales — ${source}`,
        tags: ["full_stack_sales_webinar"],
      });
      if (leadRes.ok) {
        onSuccess({ name: name.trim(), phone: `+91 ${digits}` });
      } else {
        setError(leadRes.error ?? "We couldn't reserve your seat. Please try again.");
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <m.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        <div className="flex flex-col">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold-dim)]">
            Free career webinar
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--vil-gold)] px-3 py-1.5 text-[11px] font-bold text-[color:var(--vil-navy)]">
              Live online session
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--vil-gold)] px-3 py-1.5 text-[11px] font-bold text-[color:var(--vil-navy)]">
              Free to attend
            </span>
          </div>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
            Reserve your free seat
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
            Leave your details and we&apos;ll send your webinar joining link and reminders.
          </p>

          <m.form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
            noValidate
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
            initial="hidden"
            animate="show"
          >
            <m.div variants={formItem} className="space-y-1.5">
              <Label htmlFor="lead-name" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                Full name
              </Label>
              <Input
                id="lead-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aditi Sharma"
                autoComplete="name"
                className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
              />
            </m.div>

            <m.div variants={formItem} className="space-y-1.5">
              <Label htmlFor="lead-phone" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                Phone number
              </Label>
              <div className="flex items-center gap-2">
                <span className="flex h-11 items-center rounded-xl border border-[color:var(--vil-navy)]/15 bg-white px-3 text-sm font-semibold text-[color:var(--vil-navy)]">
                  +91
                </span>
                <Input
                  id="lead-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={10}
                  className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
                />
              </div>
            </m.div>

            <m.div variants={formItem} className="space-y-1.5">
              <Label htmlFor="lead-email" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                Email address
              </Label>
              <Input
                id="lead-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
              />
            </m.div>

            <m.div variants={formItem} className="space-y-1.5">
              <Label htmlFor="lead-degree" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                Degree
              </Label>
              <select
                id="lead-degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="h-11 w-full rounded-xl border border-[color:var(--vil-navy)]/15 bg-white px-4 text-sm text-[color:var(--vil-navy)]"
              >
                <option value="">Select your degree</option>
                {degreeOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </m.div>

            <m.div variants={formItem} className="space-y-1.5">
              <Label htmlFor="lead-graduation-year" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                Graduation year
              </Label>
              <select
                id="lead-graduation-year"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
                className="h-11 w-full rounded-xl border border-[color:var(--vil-navy)]/15 bg-white px-4 text-sm text-[color:var(--vil-navy)]"
              >
                <option value="">Select your graduation year</option>
                {graduationYearOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </m.div>

            <m.div variants={formItem} className="space-y-1.5">
              <Label htmlFor="lead-status" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                Current status
              </Label>
              <select
                id="lead-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-11 w-full rounded-xl border border-[color:var(--vil-navy)]/15 bg-white px-4 text-sm text-[color:var(--vil-navy)]"
              >
                <option value="">Select your current status</option>
                {statusOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </m.div>

            {error ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">{error}</p>
            ) : null}

            <m.div variants={formItem}>
              <RecaptchaWidget onChange={setRecaptchaToken} />
            </m.div>

            <m.div variants={formItem}>
              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--vil-navy)] px-6 py-3 text-sm font-bold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-navy)]/90 disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Reserving…
                  </>
                ) : (
                  <>
                    Reserve my free seat
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </m.div>

            <m.p variants={formItem} className="text-center text-[11px] leading-relaxed text-[color:var(--text-soft)]">
              By filling out this form, I agree to the{" "}
              <Link
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:text-[color:var(--vil-navy)]"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:text-[color:var(--vil-navy)]"
              >
                Privacy Policy
              </Link>{" "}
              and to be contacted about the webinar and related programs.
            </m.p>
          </m.form>
        </div>
      </m.div>
    </AnimatePresence>
  );
}
