import { ArrowUpRight, Phone } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";
import { SectionHeading } from "@/components/viiv/SectionHeading";
import { admissionsConfig } from "@/lib/admissions.config";
import { admissionsContent } from "@/content/homepage";

export function AdmissionsCallout() {
  return (
    <section id="admissions" className="viiv-section">
      <div className="viiv-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={admissionsContent.eyebrow}
              headline={admissionsContent.headline}
              description={admissionsContent.body}
            />
            <ul className="mt-8 space-y-3">
              {admissionsContent.criteria.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--vil-gold)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="viiv-card border-[color:var(--vil-gold)]/30 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--vil-gold)_8%,white)_0%,white_100%)] p-8">
              <p className="viiv-eyebrow">{admissionsConfig.batchLabel}</p>
              <p className="mt-4 font-serif text-3xl font-semibold leading-tight text-[color:var(--vil-navy)]">
                {admissionsConfig.feeTotal}
              </p>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">{admissionsConfig.feeNote}</p>
              <p className="mt-4 text-sm font-medium text-[color:var(--vil-navy)]">
                Scholarships up to {admissionsConfig.scholarshipMax} may be available.
              </p>
              <blockquote className="mt-8 border-l-2 border-[color:var(--vil-gold)] pl-4 font-serif text-xl italic leading-snug text-[color:var(--vil-navy)]">
                {admissionsContent.quote}
              </blockquote>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={admissionsConfig.applyUrl} className="btn-primary">
                  Apply Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={admissionsConfig.admissionsPhoneHref} className="btn-secondary">
                  <Phone className="h-4 w-4" />
                  Talk to Admissions
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
