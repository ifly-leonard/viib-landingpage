"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/content/homepage";

export function FAQAccordion() {
  return (
    <div>
      <p className="viiv-kicker">FAQ</p>
      <h2 className="viiv-section-title mt-4">Questions families ask before applying.</h2>
      <Accordion type="single" collapsible className="mt-8 rounded-[1.5rem] border border-[color:var(--border)] bg-white px-6">
        {faqItems.map((item) => (
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
  );
}
