import Link from "next/link";
import {
  Banknote,
  Building2,
  CheckCircle2,
  FileText,
  Home,
  Info,
  Smartphone,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { payNowContent } from "@/content/payNow";

const methodIcons = {
  smartphone: Smartphone,
  bank: Building2,
  file: FileText,
  check: Banknote,
} as const;

export default function PayNowPage() {
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
                  Pay Now
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="viiv-kicker text-[color:var(--vil-gold)]">{payNowContent.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,5.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--vil-ivory)]">
            {payNowContent.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
            {payNowContent.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/15 bg-[color:var(--vil-ivory)]/5 px-4 py-2.5 text-xs text-[color:var(--vil-ivory)]/80 backdrop-blur-sm">
              <Info className="h-4 w-4 text-[color:var(--vil-gold)]" />
              {payNowContent.supportLine}
            </span>
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-3xl">
          <p className="viiv-kicker">Payment options</p>
          <h2 className="viiv-section-title mt-4">Choose How You Want to Pay</h2>
          <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
            Tap any option below for the full payment details and steps.
          </p>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-white px-6 shadow-[0_16px_40px_-24px_rgba(31,49,73,0.2)]">
            <Accordion type="single" collapsible className="w-full">
              {payNowContent.methods.map((method) => {
                const Icon = methodIcons[method.icon as keyof typeof methodIcons] ?? Smartphone;
                return (
                  <AccordionItem key={method.title} value={method.title}>
                    <AccordionTrigger className="gap-4 font-display text-base font-bold text-[color:var(--vil-navy)] hover:no-underline">
                      <span className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block">{method.title}</span>
                          <span className="mt-0.5 block text-xs font-normal text-[color:var(--text-muted)]">
                            {method.description}
                          </span>
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">
                            Details
                          </p>
                          <dl className="mt-3 space-y-3">
                            {method.fields.map((field) => (
                              <div key={field.label}>
                                <dt className="text-xs font-semibold text-[color:var(--text-soft)]">
                                  {field.label}
                                </dt>
                                <dd className="mt-0.5 break-all font-mono text-sm font-semibold text-[color:var(--vil-navy)]">
                                  {field.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">
                            How to pay
                          </p>
                          <ol className="mt-3 space-y-2.5">
                            {method.steps.map((step, stepIndex) => (
                              <li key={step} className="flex gap-2.5">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--vil-navy)] text-[10px] font-bold text-[color:var(--vil-ivory)]">
                                  {stepIndex + 1}
                                </span>
                                <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                                  {step}
                                </p>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[color:var(--vil-gold)]/30 bg-[color:var(--vil-gold)]/10 p-5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--vil-gold-dim)]" />
            <p className="text-sm leading-relaxed text-[color:var(--vil-navy)]/85">{payNowContent.note}</p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
