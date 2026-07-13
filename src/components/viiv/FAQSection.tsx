import { FAQAccordion } from "@/components/viiv/FAQAccordion";
import { Reveal } from "@/components/viiv/motion";

export function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-surface)]" id="faq">
      <div className="viiv-container py-20 md:py-28">
        <Reveal>
          <FAQAccordion />
        </Reveal>
      </div>
    </section>
  );
}
