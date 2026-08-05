"use client";

import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";

import { tourConfig } from "@/lib/tour.config";

function fireConfetti() {
  const duration = 2200;
  const end = Date.now() + duration;

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

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.55 },
    colors: ["#f7bd44", "#1f3149", "#ffffff"],
  });
  frame();
}

export const dynamic = "force-dynamic";

export default function TourThankYouPage() {
  useEffect(() => {
    fireConfetti();
  }, []);

  return (
    <div className="bg-[color:var(--vil-ivory)] pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="viiv-container">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-gold)]/60 bg-[color:var(--vil-gold)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {tourConfig.thankYou.eyebrow}
          </span>

          <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,4.75rem)] font-semibold leading-none tracking-[-0.04em] text-[color:var(--vil-navy)]">
            {tourConfig.thankYou.title}
          </h1>

          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[color:var(--vil-navy)]/10 bg-white p-8 shadow-[0_24px_60px_-36px_rgba(31,49,73,0.35)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
              <Mail className="h-5 w-5" />
            </div>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--text-muted)] md:text-lg">
              {tourConfig.thankYou.body}
            </p>
          </div>

          <Link href="/" className="btn-primary mt-10 inline-flex !px-6 !py-3 !text-sm">
            Back to homepage <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
