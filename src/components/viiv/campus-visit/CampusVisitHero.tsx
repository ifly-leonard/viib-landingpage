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

export function CampusVisitHero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/photos/early-campus/lecture_lab.png)" }}
      />

      {/* Readability scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--vil-navy)]/95 via-[color:var(--vil-navy)]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)]/85 via-transparent to-[color:var(--vil-navy)]/30" />

      <div className="viiv-container relative z-10 pb-16 pt-28 md:pb-24 md:pt-36">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
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
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
          {campusVisitHero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
          {campusVisitHero.description}
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <a
            href={campusVisitHero.ctaHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-8 py-4 text-base font-bold text-[color:var(--vil-navy)] shadow-[0_8px_24px_color-mix(in_srgb,var(--vil-navy)_25%,transparent)] transition-transform duration-200 hover:-translate-y-0.5"
          >
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
