import { Reveal } from "@/components/viiv/motion";
import { SectionHeading } from "@/components/viiv/SectionHeading";
import { builderJourney } from "@/content/homepage";

export function ProgramJourney() {
  return (
    <section className="viiv-section bg-[color:var(--vil-surface-muted)]">
      <div className="viiv-container">
        <Reveal>
          <SectionHeading eyebrow={builderJourney.eyebrow} headline={builderJourney.headline} />
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-[color:var(--border)] md:block" aria-hidden />
          <div className="space-y-6">
            {builderJourney.years.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <article className="relative md:pl-16">
                  <div className="absolute left-0 top-6 hidden h-3 w-3 rounded-full border-2 border-[color:var(--vil-gold)] bg-[color:var(--vil-ivory)] md:block" />
                  <div className="viiv-card grid gap-4 p-7 md:grid-cols-[8rem_1fr]">
                    <div>
                      <p className="viiv-eyebrow !text-[color:var(--vil-gold-dim)]">{item.year}</p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[color:var(--text-muted)] md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
