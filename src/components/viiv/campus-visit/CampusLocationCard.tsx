import { ArrowUpRight, MapPin } from "lucide-react";

import { SectionShell } from "@/components/viiv/SectionShell";
import { campusLocation } from "@/content/campusVisit";

export function CampusLocationCard() {
  return (
    <SectionShell tone="light" compact>
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-8 shadow-[0_24px_60px_-36px_rgba(31,49,73,0.25)] md:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="viiv-kicker">{campusLocation.eyebrow}</p>
              <h2 className="viiv-section-title mt-4">{campusLocation.headline}</h2>
              <div className="mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-[color:var(--vil-navy)]">
                    {campusLocation.campusName}
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                    {campusLocation.address}
                  </p>
                </div>
              </div>
            </div>
            <a
              href={campusLocation.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 self-start sm:self-auto"
            >
              {campusLocation.directionsLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
