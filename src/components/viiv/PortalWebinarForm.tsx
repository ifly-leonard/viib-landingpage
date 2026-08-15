"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RecaptchaWidget } from "@/components/viiv/RecaptchaWidget";
import { createLead } from "@/lib/leadApi";
import { recaptchaConfig } from "@/lib/recaptcha.config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

const formItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

/**
 * Webinar gate form for the /portal page. Structurally identical to the
 * site lead form (name/phone/email + recaptcha) but framed as a webinar
 * registration — on success it redirects to the webinar page.
 */
export function PortalWebinarForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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
    if (recaptchaConfig.enabled && !recaptchaToken) {
      return setError("Please complete the security check.");
    }
    setSending(true);
    try {
      const leadRes = await createLead({
        name: name.trim(),
        phone: `+91 ${digits}`,
        email: email.trim(),
        source: "VIIV portal webinar gate",
      });
      if (leadRes.ok) {
        const params = new URLSearchParams({ name: name.trim() });
        window.location.href = `/portal/success?${params.toString()}`;
      } else {
        setError(leadRes.error ?? "We couldn't register you. Please try again.");
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold-dim)]">
          Live webinar · Register to join
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
          The State of College Education in India
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
          Leave your details and we&apos;ll send you the webinar link and reminders.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
          noValidate
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={formItem} className="space-y-1.5">
            <Label htmlFor="portal-webinar-name" className="text-sm font-semibold text-[color:var(--vil-navy)]">
              Full name
            </Label>
            <Input
              id="portal-webinar-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aditi Sharma"
              autoComplete="name"
              className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
            />
          </motion.div>

          <motion.div variants={formItem} className="space-y-1.5">
            <Label htmlFor="portal-webinar-phone" className="text-sm font-semibold text-[color:var(--vil-navy)]">
              Phone number
            </Label>
            <div className="flex items-center gap-2">
              <span className="flex h-11 items-center rounded-xl border border-[color:var(--vil-navy)]/15 bg-white px-3 text-sm font-semibold text-[color:var(--vil-navy)]">
                +91
              </span>
              <Input
                id="portal-webinar-phone"
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
          </motion.div>

          <motion.div variants={formItem} className="space-y-1.5">
            <Label htmlFor="portal-webinar-email" className="text-sm font-semibold text-[color:var(--vil-navy)]">
              Email address
            </Label>
            <Input
              id="portal-webinar-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
            />
          </motion.div>

          {error ? (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">{error}</p>
          ) : null}

          <motion.div variants={formItem}>
            <RecaptchaWidget onChange={setRecaptchaToken} />
          </motion.div>

          <motion.div variants={formItem}>
            <button
              type="submit"
              disabled={sending}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--vil-navy)] px-6 py-3 text-sm font-bold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-navy)]/90 disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Registering…
                </>
              ) : (
                <>
                  Save My Seat
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.div>

          <motion.p variants={formItem} className="text-center text-[11px] leading-relaxed text-[color:var(--text-soft)]">
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
            of VIIV India and agree to be contacted about the webinar.
          </motion.p>
        </motion.form>
      </motion.div>
    </AnimatePresence>
  );
}
