"use client";

import { ArrowUpRight, Download, Phone } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";
import { heroContent, siteMeta } from "@/content/homepage";

const ctaIcons = {
  "Apply Now": ArrowUpRight,
  "Download Program Note": Download,
  "Talk to Admissions": Phone,
} as const;

export function Hero() {
  return (
    <section className="viiv-section pt-28 md:pt-36">
      <div className="viiv-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="viiv-eyebrow">{heroContent.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="viiv-display mt-5 text-balance">{heroContent.headline}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--text-muted)]">
                {heroContent.subcopy}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 text-sm font-semibold text-[color:var(--vil-navy)]">
                {heroContent.supportLine}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-wrap gap-3">
                {heroContent.ctas.map((cta) => {
                  const Icon = ctaIcons[cta.label as keyof typeof ctaIcons];
                  return (
                    <a
                      key={cta.label}
                      href={cta.href}
                      className={cta.variant === "primary" ? "btn-primary" : "btn-secondary"}
                    >
                      {cta.label}
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                    </a>
                  );
                })}
              </div>
            </Reveal>
            <Reveal delay={0.34}>
              <p className="mt-8 font-serif text-xl italic text-[color:var(--vil-gold-dim)]">
                {siteMeta.tagline}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative">
            <div className="viiv-hero-panel overflow-hidden rounded-[1.75rem] border border-[color:var(--border)]">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--vil-navy)_92%,black)_0%,var(--vil-navy)_55%,color-mix(in_srgb,var(--vil-gold)_25%,var(--vil-navy))_100%)]" />
              <div className="relative flex min-h-[22rem] flex-col justify-between p-8 text-[color:var(--vil-ivory)] md:min-h-[26rem] md:p-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-gold)]">
                    Chennai campus
                  </p>
                  <p className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                    Degree plus doing, in one full-time builder environment.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Real ventures", "Mentor reviews", "Portfolio proof", "BBA included"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/8 px-4 py-3 text-sm font-medium backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
