import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScrollHeadline } from "@/components/viiv/ScrollHeadline";
import { ImagePlaceholder } from "@/components/viiv/ImagePlaceholder";
import { PageHero, ApplyButton } from "@/components/viiv/SiteShell";
import { SectionShell } from "@/components/viiv/SectionShell";
import { StatCard } from "@/components/viiv/StatCard";
import { outcomesContent, siteMeta, theGapContent } from "@/content/homepage";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About VIIV"
        title={<ScrollHeadline lines={["degree.", "venture.", "proof."]} size="section" />}
        description={siteMeta.oneLiner}
      >
        <ApplyButton />
      </PageHero>

      <SectionShell tone="light">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="viiv-kicker">Core positioning</p>
            <h2 className="viiv-section-title mt-4">{siteMeta.tagline}</h2>
            <p className="mt-5 text-[color:var(--text-muted)]">{theGapContent.body}</p>
            <a
              href={siteMeta.parentOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[color:var(--vil-navy)]"
            >
              {siteMeta.parentOrg}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <ImagePlaceholder title="VIIV institution story" size="xl" className="rounded-[2rem]" />
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <p className="viiv-kicker text-[color:var(--vil-gold)]">{outcomesContent.eyebrow}</p>
        <h2 className="viiv-section-title mt-4 text-[color:var(--vil-ivory)]">{outcomesContent.headline}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {outcomesContent.items.map((item, index) => (
            <article key={item} className="viiv-big-card border-[color:var(--vil-gold)]/20 bg-[color:var(--vil-ivory)] p-6 text-[color:var(--vil-navy)]">
              <p className="font-display text-3xl font-extrabold text-[color:var(--vil-gold-dim)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-medium">{item}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="gold" compact>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard value="3" label="Years" detail="Full-time venture college" />
          <StatCard value="BBA" label="Included" detail="Kalasalingam University degree pathway" />
          <StatCard value="Chennai" label="Campus" detail="Offline builder environment" dark />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/program" className="btn-secondary !border-[color:var(--vil-navy)]/20 !text-[color:var(--vil-navy)]">
            Explore program
          </Link>
          <Link href="/campus" className="btn-primary">
            Campus life
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionShell>
    </>
  );
}
