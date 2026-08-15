import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Home,
  MonitorPlay,
  Sparkles,
  Users,
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
import { webinarContent } from "@/content/webinar";

export default function LiveWebinarPage() {
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
                  Live Webinar
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="viiv-kicker text-[color:var(--vil-gold)]">{webinarContent.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
            {webinarContent.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
            {webinarContent.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2.5 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[color:var(--vil-gold)]" />
              {webinarContent.supportLine}
            </span>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: CalendarDays, label: webinarContent.dateLabel, value: webinarContent.date },
              { icon: Clock, label: webinarContent.durationLabel, value: webinarContent.duration },
              { icon: MonitorPlay, label: webinarContent.formatLabel, value: webinarContent.format },
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

      {/* What we'll cover + signup */}
      <SectionShell tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="viiv-kicker">{webinarContent.about.eyebrow}</p>
            <h2 className="viiv-section-title mt-4">{webinarContent.about.title}</h2>
            <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
              {webinarContent.about.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {webinarContent.about.points.map((point) => (
                <article key={point.title} className="viiv-big-card p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                    <CheckCircle2 className="h-5 w-5" />
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
          </div>

          <div>
            <div className="sticky top-24 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)] sm:p-8">
              <SignupForm
                title={webinarContent.form.title}
                description={webinarContent.form.description}
                ctaLabel={webinarContent.form.ctaLabel}
                successTitle={webinarContent.form.successTitle}
                successBody={webinarContent.form.successBody}
              />
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Who should attend */}
      <SectionShell tone="gold">
        <div className="mx-auto max-w-4xl">
          <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">{webinarContent.who.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">
            {webinarContent.who.title}
          </h2>
          <ul className="mt-10 space-y-4">
            {webinarContent.who.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
                  <Users className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-[color:var(--vil-navy)]">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* Why attend */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">{webinarContent.why.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{webinarContent.why.title}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {webinarContent.why.points.map((point, i) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--vil-gold)] font-display text-sm font-bold text-[color:var(--vil-navy)]">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
