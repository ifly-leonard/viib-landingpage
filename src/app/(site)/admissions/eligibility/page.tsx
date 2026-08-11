import Link from "next/link";
import { CheckCircle2, GraduationCap, Home, Phone, Sparkles } from "lucide-react";

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
import { SectionShell } from "@/components/viiv/SectionShell";
import { admissionsConfig } from "@/lib/admissions.config";

const ELIGIBILITY_POINTS = [
  {
    title: "12th pass or appearing",
    body: "You must have completed Class 12 (or an equivalent board exam), or be appearing for it this year. Any stream — Science, Commerce, or Arts — qualifies.",
  },
  {
    title: "Passed out this year or last",
    body: "The programme is designed for recent school leavers — those who passed out this year or last year. If you're a fresh 12th pass-out, you're exactly who this is for.",
  },
  {
    title: "Equivalent qualifications",
    body: "Recognised equivalent qualifications — such as IB, IGCSE, CBSE, State Boards, or NIOS — are all accepted. If you're unsure about yours, ask us on the call.",
  },
  {
    title: "Full-time commitment",
    body: "VIIV is a full-time, offline builder programme in Chennai. You'll need the willingness to commit fully to building ventures, not just attending classes.",
  },
] as const;

export default function EligibilityPage() {
  return (
    <>
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
                  Eligibility
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="viiv-kicker text-[color:var(--vil-gold)]">Eligibility</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
            Just passed 12th? You qualify.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
            VIIV is built for the freshest builders — students who have just
            finished Class 12 and are ready to start building real ventures
            instead of waiting for a degree to finish first. No entrance exam.
            No cut-offs. No rank pressure.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <HowToApplyButton label="Check My Eligibility" />
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2.5 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[color:var(--vil-gold)]" />
              Free application · No application fee · Parents welcome
            </span>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">Who can apply</p>
          <h2 className="viiv-section-title mt-4">The Requirements Are Simple</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
            We keep eligibility deliberately simple — if you&apos;ve finished
            school recently, you&apos;re in. Here&apos;s exactly what we ask for.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {ELIGIBILITY_POINTS.map((point) => (
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
        </div>
      </SectionShell>

      {/* Why fresh pass-outs */}
      <SectionShell tone="gold">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">
            Why early
          </p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">
            Why Start Building Right After 12th?
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Build while your peers wait",
                body: "Most students spend the next 3–4 years in classrooms. You'll spend them launching ventures, talking to customers, and building a portfolio of real work.",
              },
              {
                title: "Learn by doing, not by rote",
                body: "You learn marketing by selling, product by shipping, and leadership by leading. By the time your batch graduates, you've done it — not just studied it.",
              },
              {
                title: "Earn a recognised BBA too",
                body: "You'll complete a recognised online BBA alongside the venture-building programme — so you graduate with both a degree and a demonstrated builder's track record.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-6">
                <h3 className="font-display text-base font-bold text-[color:var(--vil-navy)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--vil-navy)]/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* What you need to bring */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">Documents</p>
          <h2 className="viiv-section-title mt-4">What You&apos;ll Need to Share</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
            Nothing heavy — just the basics to confirm eligibility. Our team
            guides you through every step.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Class 12 marksheet (or a copy of your hall ticket if still appearing)",
              "A government ID (Aadhaar, passport, or school ID)",
              "Passport-size photograph",
              "Parent/guardian contact details for the interview",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[color:var(--border)] bg-white p-4 text-sm leading-relaxed text-[color:var(--text-muted)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vil-gold-dim)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* Final CTA */}
      <SectionShell tone="dark" showGrid className="!py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="viiv-kicker text-[color:var(--vil-gold)]">Not sure?</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--vil-ivory)]">
            Your Eligibility Is One Call Away
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--vil-ivory)]/75">
            Fill the form and our career guidance team will confirm your
            eligibility and answer every question — within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <HowToApplyButton
              label="Start Your Application"
              className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)] hover:!brightness-105"
            />
            <a
              href={admissionsConfig.admissionsPhoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/25 px-6 py-3 text-sm font-semibold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-ivory)]/10"
            >
              <Phone className="h-4 w-4" />
              Prefer to talk? {admissionsConfig.admissionsPhone}
            </a>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
