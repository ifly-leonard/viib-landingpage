"use client";

import Link from "next/link";

import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { CtaButton } from "@/components/viiv/CtaButton";
import { useFooterCta } from "@/components/viiv/FooterCtaContext";
import { PhoneLink } from "@/components/viiv/PhoneLink";
import { footerContent, siteMeta } from "@/content/homepage";
import { admissionsConfig } from "@/lib/admissions.config";

const campusLinks = [
  { href: "/campus-life/life-at-viiv", label: "Life at VIIV" },
  { href: "/campus-life/accommodations", label: "Accommodations" },
  { href: "/campus-life/community", label: "The VIIV Mentor Network" },
  { href: "/campus-life/gallery", label: "Gallery" },
  { href: "/campus-life/location", label: "Location" },
  { href: "/campus-life/book-a-tour", label: "Book a Tour" },
] as const;

const admissionsLinks = [
  { href: "/admissions/how-to-apply", label: "How to apply" },
  { href: "/admissions/eligibility", label: "Eligibility" },
  { href: "/admissions/fees-and-scholarships", label: "Fees & scholarships" },
] as const;

const legalLinks = [
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/llms.txt", label: "llms.txt" },
] as const;

export function Footer() {
  const { footerCta: cta } = useFooterCta();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--vil-surface)] text-[color:var(--text-main)]">
      <div className="viiv-container py-16 md:py-20">
        {/* CTA box — glyph matrix contained inside a bordered card */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--vil-surface)] shadow-[0_24px_60px_-32px_rgba(31,49,73,0.35)]">
          <GlyphMatrix
            color="#1f3149"
            cellSize={16}
            fadeBottom={0.35}
            className="absolute inset-0 h-full w-full opacity-70"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[color:var(--vil-surface)] via-[color:var(--vil-surface)]/85 to-[color:var(--vil-surface)]/40" />

          <div className="relative z-10 flex flex-col gap-8 px-8 py-12 md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
            <div className="max-w-xl">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--vil-gold-dim)]">
                <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
                {cta ? cta.eyebrow : "2026 intake · admissions open · limited seats"}
              </p>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--vil-navy)]">
                {cta ? cta.headline : (
                  <>
                    Earn the degree.
                    <br />
                    Build the venture.
                  </>
                )}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--text-muted)]">
                {cta ? cta.description : (
                  <>
                    Pursue a UGC-recognised Online BBA alongside VIIV&apos;s full-time, on-campus UG Certificate Program in Startup Mastery &amp; AI Venture Building in Chennai. Learn by building real products, brands and ventures through AI, mentorship and real-world challenges.
                  </>
                )}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <CtaButton href={cta ? cta.buttonHref : admissionsConfig.applyUrl} variant="gold">
                {cta ? cta.buttonLabel : "Apply Now"}
              </CtaButton>
              {!cta ? (
                <PhoneLink className="text-sm font-semibold text-[color:var(--vil-navy)] transition-colors hover:text-[color:var(--vil-gold-dim)]">
                  {footerContent.phone}
                </PhoneLink>
              ) : null}
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-3">
          <FooterColumn title="Campus Life" links={campusLinks} />
          <FooterColumn title="Admissions" links={admissionsLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>
      </div>

      <div className="border-t border-[color:var(--border)]">
        <div className="viiv-container flex flex-col gap-2 py-6 text-xs text-[color:var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteMeta.fullName}. All rights reserved.
          </p>
          <p>{siteMeta.location}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-soft)]">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--vil-gold-dim)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
