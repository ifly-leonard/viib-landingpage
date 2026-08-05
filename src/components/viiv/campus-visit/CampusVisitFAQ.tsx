import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { campusVisitFaq } from "@/content/campusVisit";

export function CampusVisitFAQ() {
  return (
    <SectionShell tone="light" id="faq">
      <div className="mx-auto max-w-4xl">
        <p className="viiv-kicker">{campusVisitFaq.eyebrow}</p>
        <h2 className="viiv-section-title mt-4">{campusVisitFaq.headline}</h2>
        <Accordion
          type="single"
          collapsible
          className="mt-8 rounded-[1.5rem] border border-[color:var(--border)] bg-white px-6"
        >
          {campusVisitFaq.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="font-display text-lg font-bold text-[color:var(--vil-navy)] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
