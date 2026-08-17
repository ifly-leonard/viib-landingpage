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

export function LeadForm({
  onSuccess,
}: {
  onSuccess: (lead: { name: string; phone: string }) => void;
}) {
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
        source: "VIIV website lead form",
      });
      if (leadRes.ok) {
        onSuccess({ name: name.trim(), phone: `+91 ${digits}` });
      } else {
        setError(leadRes.error ?? "We couldn't submit your application. Please try again.");
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
        <div className="flex flex-col">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold-dim)]">
            Start the application process
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--vil-gold)] px-3 py-1.5 text-[11px] font-bold text-[color:var(--vil-navy)]">
              Only 30 seats left
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--vil-gold)] px-3 py-1.5 text-[11px] font-bold text-[color:var(--vil-navy)]">
              Up to 50% scholarship for eligible students
            </span>
          </div>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
            Tell us about yourself
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
            Leave your details and our admissions team will guide you through the application.
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
            </motion.div>

            <motion.div variants={formItem} className="space-y-1.5">
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
            </motion.div>

            <motion.div variants={formItem} className="space-y-1.5">
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
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit application
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
              of VIIV India and agree to be contacted about admissions.
            </motion.p>
          </motion.form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
