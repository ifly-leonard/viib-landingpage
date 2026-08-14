import { BedDouble } from "lucide-react";

import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { CampusMasonryGallery } from "@/components/viiv/campus-life/CampusMasonryGallery";
import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { accommodationPhotos, accommodationsCopy, accommodationsIntro } from "@/content/accommodations";

export default function AccommodationsPage() {
  return (
    <>
      <CampusEditorialHero eyebrow={accommodationsIntro.eyebrow} title={accommodationsIntro.title} description={accommodationsIntro.description} image="/photos/059A3259.jpg" cta={{ label: "Book a campus visit", href: "/campus-life/book-a-tour" }} />

      <SectionShell tone="light">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="viiv-kicker">Where you&apos;ll live</p>
            <h2 className="viiv-section-title mt-4">Comfortable places to stay, close to campus.</h2>
          </Reveal>
          {accommodationsCopy.map((block, index) => (
            <Reveal key={block.heading} delay={0.05 * (index + 1)}>
              <div className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">{block.kicker}</p>
                <h3 className="mt-3 text-2xl font-bold text-[color:var(--vil-navy)]">{block.heading}</h3>
                <p className="mt-4 leading-relaxed text-[color:var(--text-muted)]">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

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
