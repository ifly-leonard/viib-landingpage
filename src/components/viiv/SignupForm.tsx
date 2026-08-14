"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createLead } from "@/lib/leadApi";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

/**
 * Generic signup form for event pages (webinar, bootcamp, etc.).
 * Collects name, email, and phone — no OTP, no recaptcha.
 */
export function SignupForm({
  title,
  description,
  ctaLabel = "Register Now",
  successTitle = "You're registered!",
  successBody,
  askPhone = true,
}: {
  title: string;
  description?: string;
  ctaLabel?: string;
  successTitle?: string;
  successBody?: string;
  askPhone?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return setError("Please tell us your name.");
    if (!EMAIL_RE.test(email.trim())) return setError("Enter a valid email address.");
    if (askPhone) {
      const digits = phone.replace(/\D/g, "");
      if (!PHONE_RE.test(digits)) return setError("Enter a valid 10-digit Indian mobile number.");
    }
    if (sending) return; // Prevent duplicate submissions.

    setSending(true);
    try {
      const res = await createLead({
        name: name.trim(),
        phone: askPhone ? `+91 ${phone.replace(/\D/g, "")}` : undefined,
        email: email.trim(),
        source: "VIIV event signup",
      });
      if (res.ok) {
        setDone(true);
      } else {
        setError(res.error ?? "We couldn't submit your registration. Please try again.");
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center px-6 py-12 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h4 className="mt-6 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
            {successTitle}
          </h4>
          {successBody ? (
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[color:var(--text-muted)]">
              {successBody}
            </p>
          ) : null}
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
          noValidate
        >
          <div>
            <h4 className="font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">{title}</h4>
            {description ? (
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{description}</p>
            ) : null}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="signup-name" className="text-sm font-semibold text-[color:var(--vil-navy)]">
              Full name
            </Label>
            <Input
              id="signup-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aditi Sharma"
              autoComplete="name"
              className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="signup-email" className="text-sm font-semibold text-[color:var(--vil-navy)]">
              Email address
            </Label>
            <Input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
            />
          </div>

          {askPhone ? (
            <div className="space-y-1.5">
              <Label htmlFor="signup-phone" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                Phone number
              </Label>
              <div className="flex items-center gap-2">
                <span className="flex h-11 items-center rounded-xl border border-[color:var(--vil-navy)]/15 bg-white px-3 text-sm font-semibold text-[color:var(--vil-navy)]">
                  +91
                </span>
                <Input
                  id="signup-phone"
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
            </div>
          ) : null}

          {error ? (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--vil-navy)] px-6 py-3 text-sm font-bold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-navy)]/90 disabled:opacity-60"
          >
            {sending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-center text-[11px] leading-relaxed text-[color:var(--text-soft)]">
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
            of VIIV India. We&apos;ll reach out with the details — no spam.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
