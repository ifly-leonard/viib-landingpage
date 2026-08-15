import Link from "next/link";
import {
  CalendarDays,
  Home,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";

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
import { SignupForm } from "@/components/viiv/SignupForm";
import { bootcampContent } from "@/content/bootcamp";

export default function RegisterForBootcampPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
        <GridBackground tone="dark" className="opacity-100" />
        <div className="viiv-container relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
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
                <BreadcrumbPage className="font-medium text-[color:var(--vil-gold)]">
                  Bootcamp
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="viiv-kicker text-[color:var(--vil-gold)]">{bootcampContent.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
            {bootcampContent.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
            {bootcampContent.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2.5 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[color:var(--vil-gold)]" />
              {bootcampContent.supportLine}
            </span>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: CalendarDays, label: bootcampContent.format.items[0].label, value: bootcampContent.format.items[0].value },
              { icon: MapPin, label: bootcampContent.format.items[1].label, value: bootcampContent.format.items[1].value },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 p-4 backdrop-blur-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[color:var(--vil-ivory)]/50">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[color:var(--vil-ivory)]">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Format + signup */}
      <SectionShell tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="viiv-kicker">{bootcampContent.format.eyebrow}</p>
            <h2 className="viiv-section-title mt-4">{bootcampContent.format.title}</h2>

            <dl className="mt-10 space-y-4">
              {bootcampContent.format.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-6 rounded-2xl border border-[color:var(--border)] bg-white p-5 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)]"
                >
                  <dt className="text-sm font-bold text-[color:var(--vil-navy)]">{item.label}</dt>
                  <dd className="max-w-xs text-right text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="sticky top-24 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)] sm:p-8">
              <SignupForm
                title={bootcampContent.form.title}
                description={bootcampContent.form.description}
                ctaLabel={bootcampContent.form.ctaLabel}
                successTitle={bootcampContent.form.successTitle}
                successBody={bootcampContent.form.successBody}
              />
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Curriculum */}
      <SectionShell tone="gold">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">{bootcampContent.curriculum.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">
            {bootcampContent.curriculum.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--vil-navy)]/70">
            {bootcampContent.curriculum.description}
          </p>

          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {bootcampContent.curriculum.modules.map((module, i) => (
              <li
                key={module.title}
                className="rounded-2xl border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--vil-navy)] font-display text-sm font-bold text-[color:var(--vil-ivory)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-bold text-[color:var(--vil-navy)]">
                    {module.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--vil-navy)]/70">
                  {module.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </SectionShell>

      {/* Why join */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{bootcampContent.why.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{bootcampContent.why.title}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {bootcampContent.why.points.map((point) => (
              <article key={point} className="viiv-big-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                  <Rocket className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-muted)]">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
