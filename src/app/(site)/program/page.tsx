import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScrollHeadline } from "@/components/viiv/ScrollHeadline";
import { GalleryGrid } from "@/components/viiv/GalleryGrid";
import { ImagePlaceholder } from "@/components/viiv/ImagePlaceholder";
import { PageHero, ApplyButton } from "@/components/viiv/SiteShell";
import { SectionShell } from "@/components/viiv/SectionShell";
import { campusGallery } from "@/content/campus";
import {
  builderJourney,
  methodContent,
  programPillars,
  programPaths,
  theGapContent,
} from "@/content/homepage";

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Program"
        title={<ScrollHeadline lines={["learn.", "build.", "launch."]} size="section" />}
        description="Online BBA from Kalasalingam University plus a full-time offline venture-building college in Chennai."
      >
        <ApplyButton />
      </PageHero>

      <SectionShell tone="light">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="viiv-kicker">{theGapContent.eyebrow}</p>
            <h2 className="viiv-section-title mt-4">{theGapContent.headline}</h2>
            <p className="mt-5 text-[color:var(--text-muted)]">{theGapContent.body}</p>
            <p className="mt-6 font-display text-2xl font-bold italic text-[color:var(--vil-navy)]">
              {theGapContent.closingLine}
            </p>
          </div>
          <ImagePlaceholder title="Program overview visual" size="xl" className="rounded-[2rem]" />
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <p className="viiv-kicker text-[color:var(--vil-gold)]">Choose your path</p>
        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {programPaths.map((path) => (
            <article key={path.title} className="viiv-big-card overflow-hidden border-[color:var(--vil-gold)]/20 bg-[color:var(--vil-ivory)] text-[color:var(--vil-navy)]">
              <ImagePlaceholder title={path.title} size="md" variant="light" className="rounded-none border-0 border-b" />
              <div className="p-6">
                <h3 className="font-display text-3xl font-extrabold">{path.headline}</h3>
                <p className="mt-3 text-sm text-[color:var(--text-muted)]">{path.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="gold">
        <p className="viiv-kicker">{methodContent.eyebrow}</p>
        <h2 className="viiv-section-title mt-4 text-[color:var(--vil-navy)]">{methodContent.headline}</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {methodContent.steps.map((step, index) => (
            <article key={step.title} className="viiv-big-card grid overflow-hidden bg-[color:var(--vil-ivory)] lg:grid-cols-[220px_1fr]">
              <ImagePlaceholder title={step.title} size="md" variant="light" className="min-h-[220px] rounded-none border-0 border-r" />
              <div className="p-6">
                <p className="font-display text-3xl font-extrabold text-[color:var(--vil-gold-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-[color:var(--vil-navy)]">{step.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--text-muted)]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="light">
        <p className="viiv-kicker">{builderJourney.eyebrow}</p>
        <h2 className="viiv-section-title mt-4">{builderJourney.headline}</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {builderJourney.years.map((year) => (
            <article key={year.year} className="viiv-big-card overflow-hidden">
              <ImagePlaceholder title={year.title} size="lg" variant="light" className="rounded-none border-0 border-b" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">{year.year}</p>
                <h3 className="mt-2 font-display text-3xl font-extrabold">{year.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--text-muted)]">{year.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <p className="viiv-kicker text-[color:var(--vil-gold)]">{programPillars.eyebrow}</p>
        <h2 className="viiv-section-title mt-4 text-[color:var(--vil-ivory)]">{programPillars.headline}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {programPillars.pillars.map((pillar) => (
            <article key={pillar.title} className="viiv-big-card overflow-hidden border-[color:var(--vil-gold)]/20 bg-[color:var(--vil-ivory)] text-[color:var(--vil-navy)]">
              <ImagePlaceholder title={pillar.title} size="md" variant="light" className="rounded-none border-0 border-b" />
              <div className="p-5">
                <h3 className="font-display text-2xl font-extrabold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="light" compact>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-3xl font-extrabold">See the campus in action.</p>
          <Link href="/campus" className="btn-primary">
            Campus gallery
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8">
          <GalleryGrid items={campusGallery.slice(0, 8)} />
        </div>
      </SectionShell>
    </>
  );
}
