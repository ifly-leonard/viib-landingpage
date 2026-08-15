"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { CtaButton } from "@/components/viiv/CtaButton";
import { HERO_SLIDE_DURATION, heroSlides } from "@/content/hero";
import { cn } from "@/lib/utils";

/**
 * Card carousel for the /portal page. Shows the same content as the
 * home hero (heroSlides) as stacked cards with autoplay + manual nav.
 */
export function PortalCardCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const total = heroSlides.length;

  const go = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
      setProgress(0);
      progressRef.current = 0;
    },
    [total],
  );

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    if (paused) return;

    let raf = 0;
    let start: number | null = null;
    const startOffset = progressRef.current * HERO_SLIDE_DURATION;

    const tick = (time: number) => {
      if (start === null) start = time - startOffset;
      const elapsed = time - start;
      const p = Math.min(elapsed / HERO_SLIDE_DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        setProgress(0);
        progressRef.current = 0;
        setIndex((i) => (i + 1) % total);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, paused, total]);

  const slide = heroSlides[index];

  return (
    <div className="flex flex-col gap-8">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--vil-ivory)]/10 shadow-[0_30px_80px_-30px_rgba(31,49,73,0.7)]">
        <AnimatePresence>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </AnimatePresence>

        {/* Readability scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--vil-navy)]/95 via-[color:var(--vil-navy)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)]/90 via-transparent to-[color:var(--vil-navy)]/25" />

        {/* Card content */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-7 md:p-9"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="inline-flex items-center rounded-full border border-[color:var(--vil-gold)]/30 bg-[color:var(--vil-gold)]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--vil-gold)]">
                {slide.eyebrow}
              </p>
              <h3 className="mt-5 text-balance text-2xl font-bold leading-[1.12] tracking-tight text-[color:var(--vil-ivory)] md:text-3xl">
                {slide.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--vil-ivory)]/80">
                {slide.subcopy}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CtaButton href={slide.primary.href} variant="gold" className="px-5 py-2.5 text-sm">
                  {slide.primary.label}
                </CtaButton>
                <CtaButton href={slide.secondary.href} variant="outlineLight" className="px-5 py-2.5 text-sm">
                  {slide.secondary.label}
                </CtaButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide nav with circular timers */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        {heroSlides.map((item, i) => {
          const active = i === index;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => go(i)}
              aria-label={item.navLabel}
              aria-current={active ? "true" : undefined}
              className="group flex items-center gap-2 text-left"
            >
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="rgba(245,243,238,0.2)"
                    strokeWidth="2.5"
                  />
                  {active ? (
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="var(--vil-gold)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 20}
                      strokeDashoffset={2 * Math.PI * 20 * (1 - progress)}
                    />
                  ) : null}
                </svg>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.12em] transition-colors",
                    active
                      ? "text-[color:var(--vil-gold)]"
                      : "text-[color:var(--vil-ivory)]/50 group-hover:text-[color:var(--vil-ivory)]",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
