import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GridBackground } from "@/components/viiv/GridBackground";
import { heroContent, outcomeStats } from "@/content/homepage";

export function HeroBento() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
      <GridBackground tone="dark" />
      <div className="viiv-container relative z-10 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-gold)]/30 bg-[color:var(--vil-gold)]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--vil-gold)]">
            {heroContent.eyebrow}
          </span>

          <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.04] tracking-tight">
            Earn a recognized BBA while building{" "}
            <span className="text-[color:var(--vil-gold)]">real ventures</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--vil-ivory)]/75">
            {heroContent.subcopy}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/admissions#apply"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-7 py-3.5 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
            >
              Apply Now
            </Link>
            <Link
              href="/program"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/25 px-6 py-3.5 text-sm font-semibold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-ivory)]/10"
            >
              Explore Program
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-5 text-sm text-[color:var(--vil-ivory)]/55">{heroContent.supportLine}</p>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[color:var(--vil-ivory)]/10 bg-[color:var(--vil-ivory)]/10 md:mt-20 md:grid-cols-4">
          {outcomeStats.map((stat) => (
            <div key={stat.label} className="bg-[color:var(--vil-navy)] p-6 md:p-7">
              <dt className="text-3xl font-bold tracking-tight text-[color:var(--vil-ivory)] md:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--vil-gold)]">
                {stat.label}
              </dd>
              <dd className="mt-1.5 text-xs leading-relaxed text-[color:var(--vil-ivory)]/60">
                {stat.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
