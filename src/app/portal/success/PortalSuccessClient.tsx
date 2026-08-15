"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalendarClock, Clock } from "lucide-react";

import { useWebinarCountdown, type CountdownParts, pad } from "@/lib/webinarCountdown";

function formatTargetDate(target: Date | null): string {
  if (!target) return "";
  return target.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function CountdownCell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[color:var(--vil-gold)]/25 bg-[color:var(--vil-ivory)]/5 text-3xl font-bold tabular-nums text-[color:var(--vil-ivory)] backdrop-blur-sm md:h-24 md:w-24 md:text-4xl">
        {pad(value)}
      </div>
      <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--vil-ivory)]/60">
        {label}
      </span>
    </div>
  );
}

function CountdownRow({ parts }: { parts: CountdownParts }) {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      <CountdownCell value={parts.days} label={parts.days === 1 ? "Day" : "Days"} />
      <span className="pb-6 text-2xl font-bold text-[color:var(--vil-gold)]">:</span>
      <CountdownCell value={parts.hours} label="Hours" />
      <span className="pb-6 text-2xl font-bold text-[color:var(--vil-gold)]">:</span>
      <CountdownCell value={parts.minutes} label="Minutes" />
      <span className="pb-6 text-2xl font-bold text-[color:var(--vil-gold)]">:</span>
      <CountdownCell value={parts.seconds} label="Seconds" />
    </div>
  );
}

export function PortalSuccessClient() {
  const searchParams = useSearchParams();
  const name = (searchParams.get("name") ?? "").trim();
  const firstName = name.split(" ")[0] || "there";
  const { parts, target } = useWebinarCountdown();

  const formatted = useMemo(() => formatTargetDate(target), [target]);

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[color:var(--vil-navy)] px-6 py-16 text-center text-[color:var(--vil-ivory)]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(247,189,68,0.22)_1px,transparent_0)] [background-size:26px_26px]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--vil-gold)]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[color:var(--vil-gold)]/10 blur-[100px]" />

      <div className="relative flex w-full max-w-2xl flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo_main_white.png" alt="VIIV" className="h-14 w-auto" />

        <p className="mt-10 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--vil-gold)]">
          You&apos;re registered
        </p>
        <h1 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight">
          Hi {firstName}, your next webinar is in
        </h1>

        <div className="mt-10">
          {parts ? <CountdownRow parts={parts} /> : <p className="text-sm text-[color:var(--vil-ivory)]/60">Calculating…</p>}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
            <CalendarClock className="h-4 w-4 text-[color:var(--vil-gold)]" />
            {formatted || "Next webinar day"}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
            <Clock className="h-4 w-4 text-[color:var(--vil-gold)]" />
            5:00 PM – 6:00 PM IST
          </span>
        </div>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-[color:var(--vil-ivory)]/70">
          We&apos;ve emailed you the webinar link and reminders. See you there!
        </p>

        <Link
          href="/portal"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-7 py-3 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
        >
          Back to portal
        </Link>
      </div>
    </main>
  );
}
