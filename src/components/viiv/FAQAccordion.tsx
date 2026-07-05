"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/viiv/motion";
import { SectionHeading } from "@/components/viiv/SectionHeading";
import { faqItems } from "@/content/homepage";

export function FAQAccordion() {
  return (
    <section id="faq" className="viiv-section bg-[color:var(--vil-surface-muted)]">
      <div className="viiv-container max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" headline="Questions families ask before applying." align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--vil-ivory)] px-6">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="font-serif text-lg font-medium text-[color:var(--vil-navy)] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
