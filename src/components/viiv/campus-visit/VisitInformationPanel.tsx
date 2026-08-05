import { SectionShell } from "@/components/viiv/SectionShell";
import { visitInformation } from "@/content/campusVisit";

import { VISIT_ICON, type VisitIcon } from "./visitIcons";

export function VisitInformationPanel() {
  return (
    <SectionShell tone="gold" compact>
      <div className="rounded-[1.75rem] border border-[color:var(--vil-navy)]/10 bg-[color:var(--vil-ivory)] p-8 md:p-12">
        <p className="viiv-kicker text-[color:var(--vil-gold-dim)]">{visitInformation.eyebrow}</p>
        <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">
          {visitInformation.headline}
        </h2>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visitInformation.items.map((item) => {
            const Icon = VISIT_ICON[item.icon as VisitIcon];
            return (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/20 text-[color:var(--vil-gold-dim)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--vil-gold-dim)]">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium leading-relaxed text-[color:var(--vil-navy)]">
                    {item.detail}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </SectionShell>
  );
}
