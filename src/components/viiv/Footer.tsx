import Link from "next/link";

import { GlyphMatrix } from "@/components/ui/glyph-matrix";
import { CtaButton } from "@/components/viiv/CtaButton";
import { footerContent, siteMeta } from "@/content/homepage";
import { admissionsConfig } from "@/lib/admissions.config";

const exploreLinks = [
  { href: "/program", label: "The Program" },
  { href: "/campus", label: "Campus Life" },
  { href: "/about", label: "About VIIV" },
] as const;

const admissionsLinks = [
  { href: "/admissions", label: "How to apply" },
  { href: "/admissions", label: "Eligibility" },
  { href: "/admissions", label: "Fees & scholarships" },
] as const;

export function Footer() {
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
                {admissionsConfig.batchLabel} · admissions open
              </p>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.08] tracking-tight text-[color:var(--vil-navy)]">
                Earn the degree.
                <br />
                Build the venture.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--text-muted)]">
                {siteMeta.oneLiner}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <CtaButton href={admissionsConfig.applyUrl} variant="gold">
                Apply Now
              </CtaButton>
              <a
                href={footerContent.phoneHref}
                className="text-sm font-semibold text-[color:var(--vil-navy)] transition-colors hover:text-[color:var(--vil-gold-dim)]"
              >
                {footerContent.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo_full.png"
              alt={siteMeta.name}
              className="h-44 w-auto"
            />
            <p className="mt-0 max-w-xs text-sm leading-relaxed text-[color:var(--text-muted)]">
              {siteMeta.fullName}. {siteMeta.tagline}
            </p>
            <a
              href={footerContent.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--vil-gold-dim)] transition-colors hover:text-[color:var(--vil-navy)]"
            >
              A {footerContent.parent} company
            </a>
          </div>

          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Admissions" links={admissionsLinks} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--text-soft)]">
              Visit
            </p>
            <p className="mt-5 text-sm text-[color:var(--text-muted)]">{footerContent.address}</p>
            <a
              href={footerContent.phoneHref}
              className="mt-2 inline-block text-sm font-semibold text-[color:var(--vil-gold-dim)] transition-colors hover:text-[color:var(--vil-navy)]"
            >
              {footerContent.phone}
            </a>
            <p className="mt-5 max-w-[16rem] text-xs leading-relaxed text-[color:var(--text-soft)]">
              Online BBA awarded by Kalasalingam University.
            </p>
          </div>
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
