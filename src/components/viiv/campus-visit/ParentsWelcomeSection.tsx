import { SectionShell } from "@/components/viiv/SectionShell";
import { parentsWelcome } from "@/content/campusVisit";

export function ParentsWelcomeSection() {
  return (
    <SectionShell tone="dark">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="viiv-kicker text-[color:var(--vil-gold)]">{parentsWelcome.eyebrow}</p>
          <h2 className="viiv-section-title mt-4 text-[color:var(--vil-ivory)]">
            {parentsWelcome.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--vil-ivory)]/80 md:text-lg">
            {parentsWelcome.copy}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--vil-gold)]/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/059A2764.jpg"
            alt="Students and families on the VIIV campus"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)]/50 to-transparent" />
        </div>
      </div>
    </SectionShell>
  );
}
