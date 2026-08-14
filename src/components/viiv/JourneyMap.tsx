"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { journeyYears } from "@/content/journey";

/** The 3-year journey — a scroll-driven timeline that draws a path as you travel. */
export function JourneyMap() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  // Progress of the whole journey map through the viewport (0 → 1).
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.45"],
  });

  // The gold "path" that draws itself as the user scrolls.
  const pathScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={trackRef} className="relative">
      {/* The path rail */}
      <div
        aria-hidden
        className="absolute left-6 top-0 h-full w-0.5 bg-[color:var(--vil-navy)]/12 sm:left-1/2 sm:-translate-x-1/2"
      />
      {/* The animated progress line */}
      <motion.div
        aria-hidden
        style={{ scaleY: pathScale }}
        className="absolute left-6 top-0 h-full w-0.5 origin-top bg-gradient-to-b from-[color:var(--vil-gold)] via-[color:var(--vil-gold)] to-[color:var(--vil-gold-dim)] sm:left-1/2 sm:-translate-x-1/2"
      />

      <div className="space-y-16 sm:space-y-24">
        {journeyYears.map((item, index) => {
          const Icon = item.icon;
          const fromLeft = index % 2 === 0;
          return (
            <div
              key={item.year}
              className="relative grid gap-6 pl-14 sm:grid-cols-2 sm:gap-12 sm:pl-0"
            >
              {/* Node on the rail */}
              <motion.div
                aria-hidden
                initial={reduce ? false : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="absolute left-6 top-10 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[color:var(--vil-gold)] bg-[color:var(--vil-ivory)] text-[color:var(--vil-gold-dim)] sm:left-1/2"
              >
                <Icon className="h-5 w-5" />
              </motion.div>

              {/* Card — alternating sides */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={fromLeft ? "sm:col-start-1 sm:pr-12" : "sm:col-start-2 sm:pl-12"}
              >
                <article className="group overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white p-7 shadow-[0_24px_70px_-45px_rgba(31,49,73,0.6)] transition hover:-translate-y-1 hover:border-[color:var(--vil-gold)]/60 md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-[color:var(--vil-navy)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--vil-gold)]">
                      {item.year}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--vil-gold-dim)]">
                    {item.theme}
                  </p>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-[color:var(--vil-navy)] md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--vil-gold-dim)]">
                    {item.tagline}
                  </p>

                  <p className="mt-5 text-base leading-relaxed text-[color:var(--text-muted)]">
                    {item.body}
                  </p>

                  <div className="mt-6 border-t border-[color:var(--border)] pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">
                      By the end
                    </p>
                    <ul className="mt-3 space-y-2">
                      {item.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2.5 text-sm font-medium text-[color:var(--vil-navy)]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--vil-gold)]" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
