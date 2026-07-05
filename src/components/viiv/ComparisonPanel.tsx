import { Reveal } from "@/components/viiv/motion";
import { SectionHeading } from "@/components/viiv/SectionHeading";
import { theGapContent } from "@/content/homepage";

export function ComparisonPanel() {
  return (
    <section id="program" className="viiv-section bg-[color:var(--vil-surface-muted)]">
      <div className="viiv-container">
        <Reveal>
          <SectionHeading
            eyebrow={theGapContent.eyebrow}
            headline={theGapContent.headline}
            description={theGapContent.body}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Most business degrees",
              points: ["Exams and lectures", "Theory-heavy", "Limited builder proof"],
              tone: "muted" as const,
            },
            {
              title: "Most startup programs",
              points: ["Short and unstructured", "No recognized degree", "Hard for parents to trust"],
              tone: "muted" as const,
            },
            {
              title: "VIIV",
              points: ["Online BBA included", "Full-time Chennai campus", "Portfolio-first outcomes"],
              tone: "accent" as const,
            },
          ].map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article
                className={`viiv-card h-full p-7 ${
                  card.tone === "accent"
                    ? "border-[color:var(--vil-gold)]/35 bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]"
                    : ""
                }`}
              >
                <h3 className="font-serif text-2xl font-semibold">{card.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className={`flex gap-2 ${card.tone === "accent" ? "text-[color:var(--vil-ivory)]/88" : ""}`}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--vil-gold)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-3xl font-serif text-2xl italic leading-snug text-[color:var(--vil-navy)]">
            {theGapContent.closingLine}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
