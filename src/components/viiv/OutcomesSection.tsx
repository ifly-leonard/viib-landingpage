import { Check } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";
import { SectionHeading } from "@/components/viiv/SectionHeading";
import { outcomesContent } from "@/content/homepage";

export function OutcomesSection() {
  return (
    <section id="outcomes" className="viiv-section bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
      <div className="viiv-container">
        <Reveal>
          <SectionHeading
            eyebrow={outcomesContent.eyebrow}
            headline={outcomesContent.headline}
            className="[&_.viiv-heading]:text-[color:var(--vil-ivory)]"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {outcomesContent.items.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="flex gap-4 rounded-2xl border border-[color:var(--vil-ivory)]/12 bg-[color:var(--vil-ivory)]/6 p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <p className="text-sm leading-relaxed md:text-base">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
