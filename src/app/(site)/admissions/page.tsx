import { ArrowUpRight, Phone } from "lucide-react";

import { FAQAccordion } from "@/components/viiv/FAQAccordion";
import { ScrollHeadline } from "@/components/viiv/ScrollHeadline";
import { ImagePlaceholder } from "@/components/viiv/ImagePlaceholder";
import { PageHero } from "@/components/viiv/SiteShell";
import { SectionShell } from "@/components/viiv/SectionShell";
import { admissionsContent, proofStrip } from "@/content/homepage";
import { admissionsConfig } from "@/lib/admissions.config";

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title={<ScrollHeadline lines={["no exam.", "all ambition.", "real fit."]} size="section" />}
        description={admissionsContent.body}
      >
        <div className="flex flex-wrap gap-3">
          <a id="apply" href={admissionsConfig.applyUrl} className="btn-primary">
            Apply Now
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={admissionsConfig.admissionsPhoneHref} className="btn-secondary !border-[color:var(--vil-ivory)]/25 !text-[color:var(--vil-ivory)]">
            <Phone className="h-4 w-4" />
            Talk to Admissions
          </a>
        </div>
      </PageHero>

      <SectionShell tone="light">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proofStrip.map((item) => (
            <article key={item.label} className="viiv-big-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">{item.label}</p>
              <p className="mt-3 font-display text-2xl font-extrabold leading-tight text-[color:var(--vil-navy)]">{item.value}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="gold">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="viiv-kicker">{admissionsContent.eyebrow}</p>
            <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">{admissionsContent.headline}</h2>
            <ul className="mt-8 space-y-3">
              {admissionsContent.criteria.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[color:var(--vil-navy)]/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--vil-navy)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <article className="viiv-big-card bg-[color:var(--vil-ivory)] p-8">
            <ImagePlaceholder title="Admissions interview" size="md" variant="light" className="mb-6 rounded-2xl" />
            <p className="font-display text-3xl font-extrabold text-[color:var(--vil-navy)]">{admissionsConfig.feeTotal}</p>
            <p className="mt-2 text-sm text-[color:var(--text-muted)]">{admissionsConfig.feeNote}</p>
            <p className="mt-4 text-sm font-semibold text-[color:var(--vil-navy)]">
              Scholarships up to {admissionsConfig.scholarshipMax} may be available.
            </p>
            <blockquote className="mt-6 border-l-4 border-[color:var(--vil-gold)] pl-4 font-display text-xl italic text-[color:var(--vil-navy)]">
              {admissionsContent.quote}
            </blockquote>
          </article>
        </div>
      </SectionShell>

      <SectionShell tone="light" id="faq">
        <FAQAccordion />
      </SectionShell>
    </>
  );
}
