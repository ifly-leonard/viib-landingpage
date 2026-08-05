import Link from "next/link";
import { ArrowUpRight, Home, MapPin } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GridBackground } from "@/components/viiv/GridBackground";
import { SectionShell } from "@/components/viiv/SectionShell";
import { campusLocation } from "@/content/campusVisit";

import { LocationFooterCta } from "./LocationFooterCta";

export default function LocationPage() {
  return (
    <>
      <LocationFooterCta />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
        <GridBackground tone="dark" className="opacity-100" />
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
                  Location
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="viiv-kicker text-[color:var(--vil-gold)]">{campusLocation.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
            {campusLocation.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
            {campusLocation.campusName} is in the heart of Chennai — well connected by metro,
            bus, and road. Here&apos;s how to find your way here.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2.5 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-[color:var(--vil-gold)]" />
              <span className="text-sm font-medium text-[color:var(--vil-ivory)]/90">
                {campusLocation.address}
              </span>
            </div>
            <a
              href={campusLocation.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-6 py-3 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
            >
              {campusLocation.directionsLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <SectionShell tone="light" compact>
        <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-white shadow-[0_24px_60px_-36px_rgba(31,49,73,0.25)]">
          <iframe
            src={campusLocation.mapsEmbedSrc}
            title={`${campusLocation.campusName} location map`}
            className="h-[22rem] w-full border-0 md:h-[28rem]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </SectionShell>

      {/* Journey routes */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">Point-to-point directions</p>
          <h2 className="viiv-section-title mt-4">Travel directions from major hubs</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
            Step-by-step instructions to reach the campus from Chennai&apos;s main railway
            station, airport, and bus termini.
          </p>

          <div className="mt-10 space-y-4">
            {campusLocation.routes.map((route) => (
              <div
                key={route.origin}
                className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)] md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold text-[color:var(--vil-navy)]">
                      {route.origin}
                    </h3>
                    <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                      {route.originAddress}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="rounded-full bg-[color:var(--vil-navy)] px-3 py-1 text-xs font-bold text-[color:var(--vil-ivory)]">
                      {route.travelTime}
                    </span>
                    <span className="rounded-full bg-[color:var(--vil-gold)]/15 px-3 py-1 text-xs font-bold text-[color:var(--vil-gold-dim)]">
                      {route.distance}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm font-medium text-[color:var(--vil-gold-dim)]">
                  Via {route.via}
                </p>

                <ol className="mt-5 space-y-3">
                  {route.steps.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--vil-navy)]/15 text-[10px] font-bold text-[color:var(--vil-navy)]">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* Navigation steps */}
      <SectionShell tone="gold" compact>
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">{campusLocation.navigation.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">
            {campusLocation.navigation.headline}
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {campusLocation.navigation.steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 rounded-2xl border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--vil-navy)] font-display text-sm font-bold text-[color:var(--vil-ivory)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-[color:var(--vil-navy)]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </SectionShell>
    </>
  );
}
