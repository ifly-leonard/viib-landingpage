"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Building2,
  ClipboardCheck,
  GraduationCap,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { TextAnimate } from "@/components/ui/text-animate";
import { CtaButton } from "@/components/viiv/CtaButton";
import { HERO_SLIDE_DURATION, heroSlides, type HeroIcon } from "@/content/hero";
import { cn } from "@/lib/utils";

const ICONS: Record<HeroIcon, LucideIcon> = {
  degree: GraduationCap,
  campus: Building2,
  admissions: ClipboardCheck,
  outcomes: Trophy,
};

const RING_RADIUS = 20;
const RING_CIRC = 2 * Math.PI * RING_RADIUS;

export function HeroCover() {
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
    <section className="relative min-h-screen overflow-hidden bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
      {/* Background image layers */}
      <AnimatePresence>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      </AnimatePresence>

      {/* Readability scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--vil-navy)]/92 via-[color:var(--vil-navy)]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)]/85 via-transparent to-[color:var(--vil-navy)]/20" />

      {/* Content */}
      <div className="viiv-container relative z-10 flex min-h-screen flex-col pb-16 pt-32 md:pt-36">
        <div className="flex flex-1 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="flex min-h-[26rem] max-w-2xl flex-col justify-center md:min-h-[24rem]"
            >
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--vil-gold)]/30 bg-[color:var(--vil-gold)]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--vil-gold)]"
              >
                {slide.eyebrow}
              </motion.span>

              <TextAnimate
                key={`${slide.id}-title`}
                as="h1"
                by="word"
                duration={0.9}
                delay={0.3}
                startOnView={false}
                className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-tight"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                }}
              >
                {slide.title}
              </TextAnimate>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--vil-ivory)]/80"
              >
                {slide.subcopy}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <CtaButton href={slide.primary.href} variant="gold" className="px-7 py-3">
                  {slide.primary.label}
                </CtaButton>
                <CtaButton href={slide.secondary.href} variant="outlineLight" className="px-6 py-3">
                  {slide.secondary.label}
                </CtaButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gallery nav with circular timers */}
        <div className="order-first flex flex-wrap items-center gap-x-4 gap-y-3 pb-8">
          {heroSlides.map((item, i) => {
            const Icon = ICONS[item.icon];
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
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
                  <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r={RING_RADIUS}
                      fill="none"
                      stroke="rgba(245,243,238,0.2)"
                      strokeWidth="2.5"
                    />
                    {active ? (
                      <circle
                        cx="24"
                        cy="24"
                        r={RING_RADIUS}
                        fill="none"
                        stroke="var(--vil-gold)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={RING_CIRC}
                        strokeDashoffset={RING_CIRC * (1 - progress)}
                      />
                    ) : null}
                  </svg>
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      active
                        ? "text-[color:var(--vil-gold)]"
                        : "text-[color:var(--vil-ivory)]/55 group-hover:text-[color:var(--vil-ivory)]",
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "hidden text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors sm:inline",
                    active
                      ? "text-[color:var(--vil-ivory)]"
                      : "text-[color:var(--vil-ivory)]/50 group-hover:text-[color:var(--vil-ivory)]/80",
                  )}
                >
                  {item.navLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
