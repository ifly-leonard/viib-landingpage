import { SectionShell } from "@/components/viiv/SectionShell";
import { visitExperience } from "@/content/campusVisit";

import { VISIT_ICON, type VisitIcon } from "./visitIcons";

function VisitExperienceCard({ icon, title, description }: {
  icon: VisitIcon;
  title: string;
  description: string;
}) {
  const Icon = VISIT_ICON[icon];

  return (
    <article className="viiv-big-card p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold leading-tight text-[color:var(--vil-navy)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{description}</p>
    </article>
  );
}

export function VisitExperienceSection() {
  return (
    <SectionShell tone="light">
      <p className="viiv-kicker">{visitExperience.eyebrow}</p>
      <h2 className="viiv-section-title mt-4">{visitExperience.headline}</h2>
      <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
        {visitExperience.description}
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visitExperience.cards.map((card) => (
          <VisitExperienceCard key={card.title} {...card} />
        ))}
      </div>
    </SectionShell>
  );
}
