import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  FileText,
  GraduationCap,
  Home,
  MessagesSquare,
  Phone,
  Send,
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
import { HowToApplyButton } from "@/components/viiv/HowToApplyButton";
import { PhoneLink } from "@/components/viiv/PhoneLink";
import { SectionShell } from "@/components/viiv/SectionShell";
import { howToApplyCta, howToApplyEligibility, howToApplyFaq, howToApplyHero, howToApplySteps, howToApplyTimeline } from "@/content/howToApply";

import { HowToApplyFooterCta } from "./HowToApplyFooterCta";

const stepIcons = [Send, Phone, FileText, MessagesSquare, CheckCircle2] as const;

export default function HowToApplyPage() {
  return (
    <>
      <HowToApplyFooterCta />

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
                    href="/admissions/how-to-apply"
                    className="text-sm text-[color:var(--vil-ivory)]/70 transition-colors hover:text-[color:var(--vil-ivory)]"
                  >
                    Admissions
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[color:var(--vil-ivory)]/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-[color:var(--vil-gold)]">
                  {howToApplyHero.breadcrumbLabel}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="viiv-kicker text-[color:var(--vil-gold)]">{howToApplyHero.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
            {howToApplyHero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
            {howToApplyHero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <HowToApplyButton label={howToApplyHero.ctaLabel} />
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2.5 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[color:var(--vil-gold)]" />
              {howToApplyHero.supportLine}
            </span>
          </div>
        </div>
      </section>

      {/* The process */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplySteps.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplySteps.headline}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
            {howToApplySteps.description}
          </p>

          <ol className="mt-12 space-y-4">
            {howToApplySteps.steps.map((step, i) => {
              const Icon = stepIcons[i] ?? CheckCircle2;
              return (
                <li
                  key={step.title}
                  className="relative grid gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)] md:grid-cols-[3.5rem_1fr_auto] md:items-start md:p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--vil-gold-dim)]">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-bold text-[color:var(--vil-navy)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--text-muted)]">
                      {step.body}
                    </p>
                    <p className="mt-3 flex items-start gap-2 rounded-xl bg-[color:var(--vil-gold)]/10 px-4 py-3 text-sm leading-relaxed text-[color:var(--vil-navy)]/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vil-gold-dim)]" />
                      {step.detail}
                    </p>
                  </div>
                  <span className="inline-flex h-fit shrink-0 items-center gap-1.5 rounded-full bg-[color:var(--vil-navy)] px-3.5 py-1.5 text-xs font-bold text-[color:var(--vil-ivory)] md:mt-1">
                    <CalendarCheck className="h-3.5 w-3.5" />
                    {step.duration}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </SectionShell>

      {/* Timeline — from application to first day */}
      <SectionShell tone="gold">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">{howToApplyTimeline.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">
            {howToApplyTimeline.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--vil-navy)]/70">
            {howToApplyTimeline.description}
          </p>

          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {howToApplyTimeline.timeline.map((item, i) => (
              <li
                key={item.title}
                className="relative rounded-2xl border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--vil-navy)] font-display text-xs font-bold text-[color:var(--vil-ivory)]">
                  {i + 1}
                </span>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">
                  {item.label}
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-[color:var(--vil-navy)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--vil-navy)]/70">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </SectionShell>

      {/* Eligibility */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplyEligibility.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplyEligibility.headline}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
            {howToApplyEligibility.description}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howToApplyEligibility.points.map((point) => (
              <article key={point.title} className="viiv-big-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-[color:var(--vil-navy)]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {point.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)]">
            <p className="max-w-xl text-sm leading-relaxed text-[color:var(--text-muted)]">
              {howToApplyEligibility.note}
            </p>
            <Link
              href="/admissions/eligibility"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-navy)]/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-[color:var(--vil-navy)] transition hover:border-[color:var(--vil-gold)] hover:bg-[color:var(--vil-gold)]"
            >
              See full eligibility
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionShell>

      {/* FAQ */}
      <SectionShell tone="light" compact>
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplyFaq.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplyFaq.headline}</h2>
          <div className="mt-8 rounded-[1.5rem] border border-[color:var(--border)] bg-white px-6">
            {howToApplyFaq.items.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[color:var(--border)] last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-bold text-[color:var(--vil-navy)] transition hover:text-[color:var(--vil-gold-dim)] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="shrink-0 text-[color:var(--vil-gold-dim)] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* Final CTA */}
      <SectionShell tone="dark" showGrid className="!py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="viiv-kicker text-[color:var(--vil-gold)]">{howToApplyCta.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--vil-ivory)]">
            {howToApplyCta.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--vil-ivory)]/75">
            {howToApplyCta.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <HowToApplyButton label={howToApplyCta.buttonLabel} className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)] hover:!brightness-105" />
            <PhoneLink className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/25 px-6 py-3 text-sm font-semibold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-ivory)]/10">
              <Phone className="h-4 w-4" />
              {howToApplyCta.supportLine}
            </PhoneLink>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
