import Link from "next/link";
import { BadgeCheck, Home, Phone, Sparkles } from "lucide-react";

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
import { admissionsConfig } from "@/lib/admissions.config";

const FEE_BREAKDOWN = [
  {
    label: "Admission fee",
    amount: "₹50,000",
    note: "One-time, payable at the time of seat confirmation.",
  },
  {
    label: "Tuition fee per year",
    amount: "₹2,50,000",
    note: "Payable annually — 3 instalments over the programme.",
  },
  {
    label: "3 years of tuition",
    amount: "₹7,50,000",
    note: "2.5L × 3 years, covers the full venture-building programme.",
  },
  {
    label: "Total programme fee",
    amount: "₹8,00,000",
    note: "All-in for 3 years — degree fee included. No hidden charges.",
  },
] as const;

export default function FeesScholarshipsPage() {
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
                  Fees & Scholarships
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="viiv-kicker text-[color:var(--vil-gold)]">
            Fees & Scholarships
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
            ₹8L all-in. No hidden costs.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
            A transparent, all-in fee for three years of full-time venture
            building — including the recognised BBA degree. One admission fee,
            three annual instalments, and nothing hidden.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <HowToApplyButton label="Start Your Application" />
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2.5 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[color:var(--vil-gold)]" />
              Scholarships discussed case-by-case at the interview
            </span>
          </div>
        </div>
      </section>

      {/* Fee breakdown */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker">The breakdown</p>
          <h2 className="viiv-section-title mt-4">How the Fee Works</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
            Simple and upfront — here&apos;s exactly where every rupee goes.
          </p>

          <div className="mt-12 space-y-3">
            {FEE_BREAKDOWN.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col gap-2 rounded-2xl border p-6 md:flex-row md:items-center md:justify-between md:p-7 ${
                  i === FEE_BREAKDOWN.length - 1
                    ? "border-[color:var(--vil-gold)] bg-[color:var(--vil-gold)]/10 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.25)]"
                    : "border-[color:var(--border)] bg-white"
                }`}
              >
                <div>
                  <p className="font-display text-base font-bold text-[color:var(--vil-navy)]">
                    {row.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {row.note}
                  </p>
                </div>
                <p
                  className={`shrink-0 font-display text-2xl font-bold tracking-tight ${
                    i === FEE_BREAKDOWN.length - 1
                      ? "text-[color:var(--vil-navy)]"
                      : "text-[color:var(--vil-navy)]"
                  }`}
                >
                  {row.amount}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-2 rounded-xl bg-[color:var(--vil-gold)]/10 px-4 py-3 text-sm leading-relaxed text-[color:var(--vil-navy)]/85">
            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vil-gold-dim)]" />
            {admissionsConfig.feeNote}
          </p>

          {/* Scholarship card */}
          <div className="mt-6 overflow-hidden rounded-[2rem] border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)] shadow-[0_24px_60px_-30px_rgba(31,49,73,0.5)]">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--vil-gold)]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Scholarship
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  Up to 50% scholarship available
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--vil-ivory)]/75">
                  We don&apos;t use a fixed formula or a complicated &ldquo;merit&rdquo;
                  score — every scholarship is decided case by case. If you have
                  the drive, we&apos;ll find a way to make VIIV work for you and
                  your family.
                </p>
              </div>
              <div className="shrink-0 rounded-2xl border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-7 py-6 text-center">
                <p className="text-5xl font-bold tracking-tight text-[color:var(--vil-gold)]">
                  Up to 50%
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--vil-ivory)]/60">
                  Case-by-case scholarship
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Scholarships */}
      <SectionShell tone="gold">
        <div className="mx-auto max-w-5xl">
          <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">
            Scholarships
          </p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">
            Scholarships, decided case by case
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--vil-navy)]/70">
            We believe money should never stop a genuinely deserving builder
            from joining VIIV.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-7">
              <h3 className="font-display text-lg font-bold text-[color:var(--vil-navy)]">
                Case-by-case basis
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--vil-navy)]/70">
                There is no fixed scholarship slab. Every application is
                evaluated individually — your profile, your circumstances, and
                your potential all matter.
              </p>
            </article>
            <article className="rounded-2xl border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-7">
              <h3 className="font-display text-lg font-bold text-[color:var(--vil-navy)]">
                Discussed at the interview
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--vil-navy)]/70">
                Scholarships are discussed during the admissions interview, for
                really deserving candidates. Just ask — we&apos;ll talk it
                through openly with you and your family.
              </p>
            </article>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[color:var(--vil-navy)]/70">
            If cost is a concern, don&apos;t let it stop you from applying. Fill
            the form, come for the interview, and we&apos;ll figure out the best
            path together.
          </p>
        </div>
      </SectionShell>

      {/* Final CTA */}
      <SectionShell tone="dark" showGrid className="!py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="viiv-kicker text-[color:var(--vil-gold)]">
            Ready to begin?
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--vil-ivory)]">
            Start Your Application Today
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--vil-ivory)]/75">
            No fee, no exam — just a conversation to see if VIIV is the right
            fit for you, and to talk through fees and scholarships.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <HowToApplyButton
              label="Start Your Application"
              className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)] hover:!brightness-105"
            />
            <PhoneLink className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/25 px-6 py-3 text-sm font-semibold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-ivory)]/10">
              <Phone className="h-4 w-4" />
              Prefer to talk? {admissionsConfig.admissionsPhone}
            </PhoneLink>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
