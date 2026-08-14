"use client";

import { useState } from "react";
import { ArrowLeft, Loader2, Phone, PhoneCall, Clock } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallbackDialog } from "@/components/viiv/CallbackContext";
import { createLead } from "@/lib/leadApi";
import { admissionsConfig } from "@/lib/admissions.config";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

function isWithinCallHours(date: Date): boolean {
  const h = date.getHours() + date.getMinutes() / 60;
  return h >= 9 && h < 21; // 9 AM – 9 PM
}

export function CallbackDialog() {
  const { open, closeCallbackDialog } = useCallbackDialog();
  const [view, setView] = useState<"choice" | "form">("choice");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // Re-evaluated on each render, so it stays fresh when the dialog opens.
  const callHours = isWithinCallHours(new Date());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) return setError("Please tell us your name.");
    if (!PHONE_RE.test(digits)) return setError("Enter a valid 10-digit Indian mobile number.");
    if (!EMAIL_RE.test(email)) return setError("Enter a valid email address.");

    setSubmitting(true);
    try {
      const res = await createLead({
        name: name.trim(),
        phone: `+91 ${digits}`,
        email: email.trim(),
        source: "VIIV request callback",
        description: "Requested a callback from the website.",
        tags: ["callback_form_landingpage"],
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(res.error ?? "We couldn't submit your request. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setView("choice");
    setName("");
    setPhone("");
    setEmail("");
    setError(null);
    setSubmitted(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) {
          closeCallbackDialog();
          reset();
        }
      }}
    >
      <DialogContent
        className="max-w-md rounded-2xl border-[color:var(--border)] bg-[color:var(--vil-ivory)] p-0 text-[color:var(--text-main)]"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        {submitted ? (
          <div className="flex flex-col items-center px-8 py-14 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/20 text-[color:var(--vil-gold-dim)]">
              <PhoneCall className="h-8 w-8" />
            </span>
            <h3 className="mt-6 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
              Request received
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[color:var(--text-muted)]">
              Our admissions team will call you back within business hours. In the meantime, feel free to call us directly.
            </p>
            <a
              href={admissionsConfig.admissionsPhoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-navy)] px-6 py-3 text-sm font-bold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-navy)]/90"
            >
              <Phone className="h-4 w-4" />
              Call {admissionsConfig.admissionsPhone}
            </a>
          </div>
        ) : view === "choice" ? (
          <>
            <div className="border-b border-[color:var(--border)] px-6 pb-4 pt-6 sm:px-8">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
                  Talk to VIIV Admissions
                </DialogTitle>
                <DialogDescription className="text-sm text-[color:var(--text-muted)]">
                  Our team is available between 9 AM and 9 PM. Pick how you&apos;d like to connect.
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="flex flex-col gap-3 px-6 pb-6 pt-5 sm:px-8">
              <div className="flex items-start gap-2 rounded-xl bg-[color:var(--vil-gold)]/10 px-3 py-2.5 text-xs leading-relaxed text-[color:var(--vil-navy)]/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vil-gold-dim)]" />
                {callHours
                  ? "We're available right now — call us and talk to the team directly."
                  : "We're currently outside call hours. Request a callback and we'll reach you."}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={admissionsConfig.admissionsPhoneHref}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition",
                    callHours
                      ? "bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)] ring-2 ring-[color:var(--vil-gold)]/40 hover:brightness-105"
                      : "border border-[color:var(--vil-navy)]/20 bg-white text-[color:var(--vil-navy)] hover:bg-[color:var(--vil-navy)]/5",
                  )}
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <button
                  type="button"
                  onClick={() => setView("form")}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition",
                    !callHours
                      ? "bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)] ring-2 ring-[color:var(--vil-gold)]/40 hover:brightness-105"
                      : "bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)] hover:bg-[color:var(--vil-navy)]/90",
                  )}
                >
                  <PhoneCall className="h-4 w-4" />
                  Request Callback
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3 border-b border-[color:var(--border)] px-6 pb-4 pt-6 sm:px-8">
              <button
                type="button"
                onClick={() => setView("choice")}
                aria-label="Back"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--vil-navy)] transition hover:border-[color:var(--vil-gold)]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <DialogHeader>
                <DialogTitle className="font-serif text-xl font-semibold text-[color:var(--vil-navy)]">
                  Request a Callback
                </DialogTitle>
                <DialogDescription className="text-sm text-[color:var(--text-muted)]">
                  Leave your details and our admissions team will reach you.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-6 pt-4 sm:px-8" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="cb-name" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                  Full name
                </Label>
                <Input
                  id="cb-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aditi Sharma"
                  autoComplete="name"
                  className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cb-phone" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                  Phone number
                </Label>
                <div className="flex items-center gap-2">
                  <span className="flex h-11 items-center rounded-xl border border-[color:var(--vil-navy)]/15 bg-white px-3 text-sm font-semibold text-[color:var(--vil-navy)]">
                    +91
                  </span>
                  <Input
                    id="cb-phone"
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
                <Label htmlFor="cb-email" className="text-sm font-semibold text-[color:var(--vil-navy)]">
                  Email address
                </Label>
                <Input
                  id="cb-email"
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
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--vil-navy)] px-5 py-3 text-sm font-bold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-navy)]/90 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    <PhoneCall className="h-4 w-4" />
                    Request Callback
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
