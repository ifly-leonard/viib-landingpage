"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Loader2, RefreshCw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { RecaptchaWidget } from "@/components/viiv/RecaptchaWidget";
import { generateSalt, requestOtp, verifyOtp } from "@/lib/otpWebhook";
import { cn } from "@/lib/utils";
import { recaptchaConfig } from "@/lib/recaptcha.config";

type Stage = "details" | "otp";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

const OTP_LENGTH = 6;

const formItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export function LeadForm({
  onSuccess,
}: {
  onSuccess: (lead: { name: string; phone: string }) => void;
}) {
  const [stage, setStage] = useState<"details" | "otp">("details");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [salt, setSalt] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmitDetails = async (e: React.FormEvent) => {
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
      const nextSalt = generateSalt();
      const res = await requestOtp({
        action: "request",
        name: name.trim(),
        phone: digits,
        email,
        salt: nextSalt,
        recaptchaToken,
      });
      if (!res.ok) {
        setError(res.error ?? "Couldn't send the OTP. Please try again.");
        return;
      }
      setSalt(nextSalt);
      setStage("otp");
    } finally {
      setSending(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (otp.length !== OTP_LENGTH) return setError("Enter the complete OTP.");
    setVerifying(true);
    try {
      const res = await verifyOtp({
        action: "verify",
        phone: phone.replace(/\D/g, ""),
        salt,
        otp,
      });
      if (res.ok) {
        onSuccess({ name: name.trim(), phone: `+91 ${phone.replace(/\D/g, "")}` });
      } else {
        setError(res.error ?? "That OTP didn't match. Try again.");
      }
    } finally {
      setVerifying(false);
    }
  };

  const resend = async () => {
    setError(null);
    setOtp("");
    setSending(true);
    try {
      const nextSalt = generateSalt();
      const res = await requestOtp({
        action: "request",
        name: name.trim(),
        phone: phone.replace(/\D/g, ""),
        email,
        salt: nextSalt,
        recaptchaToken,
      });
      if (!res.ok) setError(res.error ?? "Couldn't resend the OTP. Please try again.");
      else setSalt(nextSalt);
    } finally {
      setSending(false);
    }
  };

  // ---- Stage transitions ----
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage}
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
          <h3 className="mt-2 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
            {stage === "details" ? "Tell us about yourself" : "Verify your number"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
            {stage === "details"
              ? "Leave your details and our admissions team will guide you through the application."
              : `We've sent a ${OTP_LENGTH}-digit OTP to ${phone}.`}
          </p>

          {stage === "details" ? (
            <motion.form
              onSubmit={handleSubmitDetails}
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
                      Sending OTP…
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </motion.div>

              <motion.p variants={formItem} className="text-center text-[11px] leading-relaxed text-[color:var(--text-soft)]">
                By continuing, you agree to be contacted by VIIV about admissions.
              </motion.p>
            </motion.form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="mt-6 space-y-5" noValidate>
              <div className="flex justify-center">
                <InputOTP
                  value={otp}
                  onChange={setOtp}
                  maxLength={OTP_LENGTH}
                  containerClassName="gap-4"
                >
                  <InputOTPGroup>
                    {Array.from({ length: OTP_LENGTH }).map((_, i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        className="h-14 w-12 rounded-xl border-2 border-[color:var(--vil-navy)]/15 bg-white text-xl font-bold text-[color:var(--vil-navy)] first:rounded-l-xl last:rounded-r-xl"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {error ? (
                <p className="rounded-lg bg-red-50 px-3 py-2 text-center text-xs font-medium text-red-600">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={verifying || otp.length !== OTP_LENGTH}
                className={cn(
                  "flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition",
                  "bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)] hover:bg-[color:var(--vil-navy)]/90 disabled:opacity-60",
                )}
              >
                {verifying ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Verifying…
                  </>
                ) : (
                  <>
                    Verify & Continue
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setStage("details")}
                  className="inline-flex items-center gap-1 font-semibold text-[color:var(--vil-navy)] transition hover:text-[color:var(--vil-gold-dim)]"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Edit details
                </button>
                <button
                  type="button"
                  onClick={resend}
                  className="inline-flex items-center gap-1 font-semibold text-[color:var(--vil-gold-dim)] transition hover:text-[color:var(--vil-navy)]"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Resend OTP
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
