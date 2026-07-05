import { Reveal } from "@/components/viiv/motion";
import { SectionHeading } from "@/components/viiv/SectionHeading";
import { methodContent } from "@/content/homepage";

export function MethodSection() {
  return (
    <section id="method" className="viiv-section">
      <div className="viiv-container">
        <Reveal>
          <SectionHeading eyebrow={methodContent.eyebrow} headline={methodContent.headline} />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {methodContent.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="viiv-card group h-full p-7">
                <p className="font-serif text-sm font-semibold text-[color:var(--vil-gold-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {step.description}
                </p>
                <div className="mt-6 h-0.5 w-0 bg-[color:var(--vil-gold)] transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
