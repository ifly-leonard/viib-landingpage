import { BedDouble, ExternalLink } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { CampusMasonryGallery } from "@/components/viiv/campus-life/CampusMasonryGallery";
import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import {
  accommodationPartners,
  accommodationPhotos,
  accommodationsFaq,
  accommodationsIntro,
} from "@/content/accommodations";

export default function AccommodationsPage() {
  return (
    <>
      <CampusEditorialHero eyebrow={accommodationsIntro.eyebrow} title={accommodationsIntro.title} description={accommodationsIntro.description} image="/accomodations/hercules-property-01.jpeg" cta={{ label: "Book a campus visit", href: "/campus-life/book-a-tour" }} />

      {/* Gallery */}
      <SectionShell tone="dark">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="viiv-kicker text-[color:var(--vil-gold)]">Photo album</p>
              <h2 className="viiv-section-title mt-4 text-white">A look inside the residences.</h2>
            </div>
            <BedDouble className="hidden h-10 w-10 text-[color:var(--vil-gold-dim)] sm:block" />
          </div>
        </Reveal>
        <CampusMasonryGallery photos={accommodationPhotos} />
      </SectionShell>

      {/* Partners */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="viiv-kicker">Official accommodation partners</p>
            <h2 className="viiv-section-title mt-4">Stay with our trusted partners.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--text-muted)]">
              VIIV is partnered with two leading coliving providers, so you can choose the residence that fits your budget and lifestyle best.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {accommodationPartners.map((partner, index) => (
              <Reveal key={partner.name} delay={0.05 * (index + 1)}>
                <div className="flex h-full flex-col rounded-[1.5rem] border border-[color:var(--border)] bg-white p-8 shadow-[0_24px_70px_-45px_rgba(31,49,73,0.5)]">
                  <div className="flex h-24 items-center justify-center rounded-2xl bg-[color:var(--vil-surface-muted)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">{partner.kicker}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[color:var(--vil-navy)]">{partner.headline}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-[color:var(--text-muted)]">{partner.body}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[color:var(--vil-navy)] px-6 py-3 text-sm font-bold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-navy)]/90"
                  >
                    {partner.cta}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-[1.5rem] border border-[color:var(--border)] bg-white p-6">
              <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
                Accommodation is optional and arranged at an extra cost — it is not included in the programme fee. Our admissions team can help you understand the options, compare pricing, and shortlist a residence that fits your budget before you join.
              </p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* FAQ */}
      <SectionShell tone="light" className="!bg-[color:var(--vil-surface)]">
        <div className="mx-auto max-w-4xl">
          <p className="viiv-kicker">{accommodationsFaq.eyebrow}</p>
          <h2 className="viiv-section-title mt-4">{accommodationsFaq.headline}</h2>
          <Accordion type="single" collapsible className="mt-8 rounded-[1.5rem] border border-[color:var(--border)] bg-white px-6">
            {accommodationsFaq.items.map((item) => (
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

      <SectionShell tone="gold" compact>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="viiv-kicker">See it for yourself</p>
            <h2 className="mt-3 text-3xl font-bold text-[color:var(--vil-navy)] md:text-4xl">Come see the campus and the residences.</h2>
          </div>
          <a href="/campus-life/book-a-tour" className="btn-primary">Book a visit</a>
        </div>
      </SectionShell>
    </>
  );
}
