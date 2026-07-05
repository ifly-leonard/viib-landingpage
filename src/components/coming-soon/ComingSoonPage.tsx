"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { CountdownTimer } from "@/components/coming-soon/CountdownTimer";
import { MARQUEE_ITEMS, VARMAN } from "@/lib/site.constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ComingSoonPage() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay: 0.08 + i * 0.1, ease: EASE },
    }),
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--vil-blue)_35%,transparent)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="paper-grain" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col">
        <header className="vc-container flex items-center justify-between py-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-display text-lg font-extrabold tracking-tight text-[color:var(--vil-navy)]"
          >
            VIIB
          </motion.div>
          <motion.a
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            href={VARMAN.website}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm font-medium text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text-main)]"
          >
            {VARMAN.name}
          </motion.a>
        </header>

        <main className="vc-container flex flex-1 flex-col items-center justify-center py-12 text-center md:py-20">
          <motion.div custom={0} initial={reduce ? false : "hidden"} animate="visible" variants={fadeUp}>
            <span className="badge-accent">Coming Soon</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-3xl font-display text-[clamp(40px,8vw,80px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[color:var(--text-main)]"
          >
            Something new is{" "}
            <span className="accent-text">
              <span className="ink-strike is-visible">building</span>
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--text-muted)] md:text-xl"
          >
            {VARMAN.description} We work where product, engineering, growth, and execution meet.
          </motion.p>

          <motion.div
            custom={3}
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-10 w-full max-w-2xl"
          >
            <p className="editorial-label mb-5">Launching August 15, 2026</p>
            <CountdownTimer />
          </motion.div>

          <motion.div
            custom={4}
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={VARMAN.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit {VARMAN.name}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={VARMAN.phoneHref} className="btn-secondary">
              <Phone className="h-4 w-4" />
              {VARMAN.phone}
            </a>
          </motion.div>
        </main>

        <div className="relative overflow-hidden border-y border-[color:var(--border)] py-5">
          <div className="marquee-track">
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="flex items-center gap-10 pr-10" aria-hidden={copy > 0}>
                {MARQUEE_ITEMS.map((item, i) => (
                  <span
                    key={`${copy}-${i}`}
                    className={`whitespace-nowrap font-display text-xl font-bold uppercase tracking-tight md:text-2xl ${
                      i % 3 === 0
                        ? "text-[color:var(--vil-navy)]"
                        : i % 3 === 1
                          ? "accent-text"
                          : "text-[color:var(--vil-blue)]"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <footer className="vc-container border-t border-[color:var(--border)] py-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <div>
              <p className="font-display text-base font-bold tracking-tight text-[color:var(--text-main)]">
                {VARMAN.legalName}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[color:var(--text-muted)]">
                {VARMAN.tagline}
              </p>
              <p className="mt-1 text-xs font-bold tracking-[0.14em] uppercase text-[color:var(--text-soft)]">
                {VARMAN.motto}
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)]">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <MapPin className="h-4 w-4 shrink-0 accent-text" />
                <span>{VARMAN.address}</span>
              </div>
              <a
                href={VARMAN.phoneHref}
                className="flex items-center justify-center gap-2 transition-colors hover:text-[color:var(--text-main)] md:justify-start"
              >
                <Phone className="h-4 w-4 shrink-0 accent-text" />
                {VARMAN.phone}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
