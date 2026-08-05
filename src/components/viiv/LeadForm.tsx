"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, PhoneCall, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Stage = "details" | "otp" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

function fireConfetti() {
  const duration = 1800;
  const end = Date.now() + duration;
  confetti({
    particleCount: 140,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#f7bd44", "#1f3149", "#ffffff"],
  });
  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ["#f7bd44", "#1f3149", "#ffffff"],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ["#f7bd44", "#1f3149", "#ffffff"],
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}

const OTP_LENGTH = 4;
const OTP_VALUE = "1234"; // demo verification code

export function LeadForm({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState<Stage>("details");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fire confetti when the success stage mounts.
  useEffect(() => {
    if (stage === "success") fireConfetti();
  }, [stage]);

  const phoneValid = PHONE_RE.test(phone.replace(/\D/g, ""));

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) return setError("Please tell us your name.");
    if (!PHONE_RE.test(digits)) return setError("Enter a valid 10-digit Indian mobile number.");
    if (!EMAIL_RE.test(email)) return setError("Enter a valid email address.");
    setSending(true);
    // Simulate sending OTP over the network.
    setTimeout(() => {
      setSending(false);
      setStage("otp");
    }, 900);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (otp.length !== OTP_LENGTH) return setError("Enter the complete OTP.");
    setVerifying(true);
    // Simulate verifying the OTP.
    setTimeout(() => {
      setVerifying(false);
      if (otp === OTP_VALUE) {
        setStage("success");
      } else {
        setError("That OTP didn't match. Try again.");
      }
    }, 900);
  };

  const resend = () => {
    setError(null);
    setOtp("");
  };

  // ---- Stage transitions ----
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={stage}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        {stage === "success" ? (
          <div className="flex flex-col items-center py-4 text-center">
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]"
            >
              <CheckCircle2 className="h-8 w-8" />
            </motion.span>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold-dim)]">
              You&apos;re all set
            </p>
            <h3 className="mt-3 font-serif text-3xl font-semibold text-[color:var(--vil-navy)]">
              Welcome aboard, {name.split(" ")[0]}!
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--text-muted)]">
              Your number has been verified. Here&apos;s what happens next.
            </p>

            <div className="mt-6 w-full max-w-sm space-y-3 text-left">
              {[
                {
                  icon: PhoneCall,
                  title: "Call within 48 hours",
                  body: "Our career counselling team will reach out to you shortly.",
                },
                {
                  icon: CheckCircle2,
                  title: "Personal guidance",
                  body: "They'll answer your questions and help you find the right path.",
                },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3 rounded-xl border border-[color:var(--vil-navy)]/10 bg-white p-4"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--vil-navy)]">{step.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[color:var(--text-muted)]">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onDone}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-8 py-3 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
            >
              Done
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold-dim)]">
              Start the conversation
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
              {stage === "details" ? "Talk to our team" : "Verify your number"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
              {stage === "details"
                ? "Leave your details and our career counselling team will get in touch."
                : `We've sent a ${OTP_LENGTH}-digit OTP to ${phone}.`}
            </p>

            {stage === "details" ? (
              <form onSubmit={handleSubmitDetails} className="mt-6 space-y-4" noValidate>
                <div className="space-y-1.5">
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
                </div>

                <div className="space-y-1.5">
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
                </div>

                <div className="space-y-1.5">
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
                </div>

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
                      Sending OTP…
                    </>
                  ) : (
                    <>
                      Send OTP
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] leading-relaxed text-[color:var(--text-soft)]">
                  By continuing, you agree to be contacted by VIIV about admissions.
                </p>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="mt-6 space-y-4" noValidate>
                <div className="flex justify-center">
                  <InputOTP
                    value={otp}
                    onChange={setOtp}
                    maxLength={OTP_LENGTH}
                    containerClassName="gap-2"
                  >
                    <InputOTPGroup>
                      {Array.from({ length: OTP_LENGTH }).map((_, i) => (
                        <InputOTPSlot
                          key={i}
                          index={i}
                          className="h-13 w-11 rounded-xl border-[color:var(--vil-navy)]/20 bg-white text-lg font-bold text-[color:var(--vil-navy)] first:rounded-l-xl last:rounded-r-xl"
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

                <p className="text-center text-[11px] text-[color:var(--text-soft)]">
                  Demo: the verification code is <span className="font-bold">1234</span>
                </p>
              </form>
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
