"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Simplified lead-capture form for gated downloads (e.g. the student handbook).
 * Just name + email — no OTP, no phone, no recaptcha.
 */
export function SimpleLeadForm({
  onSuccess,
  ctaLabel = "Download",
}: {
  onSuccess: (lead: { name: string; email: string }) => void;
  ctaLabel?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return setError("Please tell us your name.");
    if (!EMAIL_RE.test(email.trim())) return setError("Enter a valid email address.");

    setSending(true);
    try {
      // TODO: hook up to a lead endpoint / CRM when available.
      await new Promise((r) => setTimeout(r, 600));
      onSuccess({ name: name.trim(), email: email.trim() });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor="simple-lead-name" className="text-sm font-semibold text-[color:var(--vil-navy)]">
          Full name
        </Label>
        <Input
          id="simple-lead-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Aditi Sharma"
          autoComplete="name"
          className="h-11 rounded-xl border-[color:var(--vil-navy)]/15 bg-white px-4 text-[color:var(--vil-navy)] placeholder:text-[color:var(--text-soft)]"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="simple-lead-email" className="text-sm font-semibold text-[color:var(--vil-navy)]">
          Email address
        </Label>
        <Input
          id="simple-lead-email"
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
            Sending…
          </>
        ) : (
          <>
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] leading-relaxed text-[color:var(--text-soft)]">
        We&apos;ll email you the download link — no spam.
      </p>
    </form>
  );
}
