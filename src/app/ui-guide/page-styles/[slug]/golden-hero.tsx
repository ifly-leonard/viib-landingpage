import Link from "next/link";
import { ArrowDown, Home } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { campusVisitHero } from "@/content/campusVisit";

export function GoldenHeroVariant() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-navy)] text-center text-[color:var(--vil-ivory)]">
      {/* Golden radial tint */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(247,189,68,0.5),transparent_48%),radial-gradient(circle_at_85%_15%,rgba(247,189,68,0.18),transparent_32%),linear-gradient(145deg,#17263a_0%,#1f3149_60%,#2a415e_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full border border-[color:var(--vil-gold)]/25 md:h-[28rem] md:w-[28rem]" />

      <div className="viiv-container relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="justify-center">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm text-[color:var(--vil-ivory)]/70 transition-colors hover:text-[color:var(--vil-ivory)]"
                >
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[color:var(--vil-ivory)]/40" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/campus"
                  className="text-sm text-[color:var(--vil-ivory)]/70 transition-colors hover:text-[color:var(--vil-ivory)]"
                >
                  Campus Life
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[color:var(--vil-ivory)]/40" />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-[color:var(--vil-gold)]">
                {campusVisitHero.breadcrumbLabel}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="viiv-kicker text-[color:var(--vil-gold)]">{campusVisitHero.eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
          {campusVisitHero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/85 md:text-lg">
          {campusVisitHero.description}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a href={campusVisitHero.ctaHref} className="btn-primary">
            {campusVisitHero.ctaLabel}
            <ArrowDown className="h-4 w-4" />
          </a>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--vil-ivory)]/60">
            {campusVisitHero.supportLine}
          </p>
        </div>
      </div>
    </section>
  );
}
