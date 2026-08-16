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
import {
  howToApplyCta,
  howToApplyDegree,
  howToApplyFaq,
  howToApplyFees,
  howToApplyHero,
  howToApplyInterview,
  howToApplyJourney,
  howToApplyLookBeyond,
  howToApplyOutcomes,
  howToApplyParents,
  howToApplySteps,
  howToApplyTrust,
  howToApplyWho,
} from "@/content/howToApply";

import { HowToApplyFooterCta } from "./HowToApplyFooterCta";

const stepIcons = [Send, Phone, FileText, MessagesSquare, CheckCircle2, CalendarCheck] as const;

export default function HowToApplyPage() {
  return (
    <>
      <HowToApplyFooterCta />

      {/* 1. Hero */}
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

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {howToApplyHero.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center rounded-full border border-[color:var(--vil-gold)]/30 bg-[color:var(--vil-gold)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[color:var(--vil-gold)]"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <HowToApplyButton label={howToApplyHero.ctaLabel} />
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2.5 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[color:var(--vil-gold)]" />
              {howToApplyHero.supportLine}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Degree + VIIV */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplyDegree.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplyDegree.headline}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
            {howToApplyDegree.description}
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {howToApplyDegree.pillars.map((pillar) => (
              <article key={pillar.title} className="viiv-big-card p-6">
                <GraduationCap className="h-8 w-8 text-[color:var(--vil-gold-dim)]" />
                <h3 className="mt-5 font-display text-lg font-bold text-[color:var(--vil-navy)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-[color:var(--vil-gold)]/10 px-6 py-4 text-center font-display text-lg font-semibold text-[color:var(--vil-navy)]">
            {howToApplyDegree.sharedMessage}
          </p>
        </div>
      </SectionShell>

      {/* 3. 3-Year journey */}
      <SectionShell tone="dark">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker text-[color:var(--vil-gold)]">{howToApplyJourney.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-white">{howToApplyJourney.headline}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {howToApplyJourney.years.map((year) => (
              <article key={year.title} className="rounded-[2rem] border border-white/10 bg-white/7 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold)]">
                  {year.label}
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">{year.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{year.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {howToApplyJourney.paths.map((path) => (
              <span key={path.title} title={path.body} className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white/85">
                {path.title}
              </span>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 4. Who should apply */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplyWho.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplyWho.headline}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">{howToApplyWho.description}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {howToApplyWho.points.map((point) => (
              <article key={point.title} className="viiv-big-card p-5">
                <h3 className="font-display text-base font-bold text-[color:var(--vil-navy)]">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{point.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center font-semibold text-[color:var(--vil-gold-dim)]">{howToApplyWho.note}</p>
        </div>
      </SectionShell>

      {/* 5. We look beyond marks */}
      <SectionShell tone="gold">
        <div className="mx-auto max-w-5xl text-center">
          <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">{howToApplyLookBeyond.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">{howToApplyLookBeyond.headline}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--vil-navy)]/70">{howToApplyLookBeyond.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {howToApplyLookBeyond.criteria.map((c) => (
              <span key={c} className="rounded-full bg-[color:var(--vil-ivory)] px-5 py-2.5 text-sm font-bold text-[color:var(--vil-navy)] shadow-sm">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-6 font-semibold text-[color:var(--vil-navy)]">{howToApplyLookBeyond.note}</p>
        </div>
      </SectionShell>

      {/* 6. 6-step process */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplySteps.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplySteps.headline}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">{howToApplySteps.description}</p>
          <ol className="mt-12 space-y-4">
            {howToApplySteps.steps.map((step, i) => {
              const Icon = stepIcons[i] ?? CheckCircle2;
              return (
                <li key={step.title} className="relative grid gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)] md:grid-cols-[3.5rem_1fr_auto] md:items-start md:p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--vil-gold-dim)]">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-bold text-[color:var(--vil-navy)]">{step.title}</h3>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--text-muted)]">{step.body}</p>
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

      {/* 7. Student + parent interview */}
      <SectionShell tone="light" className="!bg-[color:var(--vil-surface-muted)]">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplyInterview.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplyInterview.headline}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">{howToApplyInterview.description}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {howToApplyInterview.points.map((point) => (
              <article key={point.title} className="viiv-big-card p-6">
                <h3 className="font-display text-base font-bold text-[color:var(--vil-navy)]">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 8. For parents */}
      <SectionShell tone="dark">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker text-[color:var(--vil-gold)]">{howToApplyParents.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-white">{howToApplyParents.headline}</h2>
          <p className="mt-4 max-w-2xl text-white/65">{howToApplyParents.description}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {howToApplyParents.points.map((point) => (
              <article key={point.title} className="rounded-[1.5rem] border border-white/10 bg-white/7 p-5">
                <CheckCircle2 className="h-5 w-5 text-[color:var(--vil-gold)]" />
                <h3 className="mt-3 font-display text-base font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{point.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center font-display text-xl font-semibold text-[color:var(--vil-gold)]">
            {howToApplyParents.message}
          </p>
        </div>
      </SectionShell>

      {/* 9. Outcomes */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplyOutcomes.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplyOutcomes.headline}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">{howToApplyOutcomes.description}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {howToApplyOutcomes.paths.map((path) => (
              <article key={path.title} className="viiv-big-card p-6">
                <h3 className="font-display text-lg font-bold text-[color:var(--vil-navy)]">{path.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{path.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--text-soft)]">Transferable skills:</span>
            {howToApplyOutcomes.skills.map((skill) => (
              <span key={skill} className="rounded-full bg-[color:var(--vil-surface-muted)] px-3 py-1.5 text-xs font-semibold text-[color:var(--vil-navy)]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 10. Fees + scholarships */}
      <SectionShell tone="gold">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">{howToApplyFees.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">{howToApplyFees.headline}</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--vil-navy)]/70">{howToApplyFees.description}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {howToApplyFees.items.map((item) => (
              <article key={item.label} className="rounded-2xl border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-5">
                <h3 className="font-display text-base font-bold text-[color:var(--vil-navy)]">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--vil-navy)]/70">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-[color:var(--vil-ivory)] px-5 py-4 text-sm leading-relaxed text-[color:var(--vil-navy)]/80">
            {howToApplyFees.scholarshipNote}
          </p>
        </div>
      </SectionShell>

      {/* 11. Meet VIIV (trust cards) */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplyTrust.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplyTrust.headline}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {howToApplyTrust.items.map((item) => (
              <Link key={item.title} href={item.href} className="group flex flex-col justify-between rounded-2xl border border-[color:var(--border)] bg-white p-6 transition hover:-translate-y-1 hover:border-[color:var(--vil-gold)]">
                <div>
                  <h3 className="font-display text-lg font-bold text-[color:var(--vil-navy)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{item.body}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--vil-gold-dim)]">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 12. FAQ */}
      <SectionShell tone="light" className="!bg-[color:var(--vil-surface-muted)]">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{howToApplyFaq.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{howToApplyFaq.headline}</h2>
          <div className="mt-8 rounded-[1.5rem] border border-[color:var(--border)] bg-white px-6">
            {howToApplyFaq.items.map((item) => (
              <details key={item.question} className="group border-b border-[color:var(--border)] last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-base font-bold text-[color:var(--vil-navy)] transition hover:text-[color:var(--vil-gold-dim)] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="shrink-0 text-[color:var(--vil-gold-dim)] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-[color:var(--text-muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* 13. Final CTA */}
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
            <Link href="/campus-life/book-a-tour" className="btn-secondary !border-white/25 !text-white">
              Book a Campus Visit <ArrowUpRight className="h-4 w-4" />
            </Link>
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
