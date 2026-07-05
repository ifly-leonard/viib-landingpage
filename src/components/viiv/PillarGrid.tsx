import { Reveal } from "@/components/viiv/motion";
import { SectionHeading } from "@/components/viiv/SectionHeading";
import { programPillars } from "@/content/homepage";

export function PillarGrid() {
  return (
    <section className="viiv-section">
      <div className="viiv-container">
        <Reveal>
          <SectionHeading
            eyebrow={programPillars.eyebrow}
            headline={programPillars.headline}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programPillars.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06}>
              <article className="viiv-card h-full p-7">
                <h3 className="font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
