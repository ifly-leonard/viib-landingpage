"use client";

import { useMemo, useState } from "react";

import { ScrollHeadline } from "@/components/viiv/ScrollHeadline";
import { GalleryGrid } from "@/components/viiv/GalleryGrid";
import { ImagePlaceholder } from "@/components/viiv/ImagePlaceholder";
import { PageHero } from "@/components/viiv/SiteShell";
import { SectionShell } from "@/components/viiv/SectionShell";
import { campusCategories, campusGallery } from "@/content/campus";

export default function CampusPage() {
  const [active, setActive] = useState<(typeof campusCategories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? campusGallery : campusGallery.filter((item) => item.category === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        title={<ScrollHeadline lines={["life.", "build.", "repeat."]} size="section" />}
        description="Pitch reviews, mentor sessions, venture sprints, field visits, and the everyday rhythm of a full-time venture college."
      />

      <SectionShell tone="light">
        <div className="flex flex-wrap gap-2">
          {campusCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                active === category
                  ? "bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]"
                  : "border border-[color:var(--border)] bg-white text-[color:var(--text-muted)] hover:border-[color:var(--vil-gold)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <GalleryGrid items={filtered} />
        </div>
      </SectionShell>

      <SectionShell tone="dark" compact>
        <div className="grid gap-5 lg:grid-cols-3">
          {["Mentor review night", "Demo day stage", "Creator lab session"].map((title) => (
            <ImagePlaceholder key={title} title={title} size="lg" className="rounded-[1.5rem]" />
          ))}
        </div>
      </SectionShell>
    </>
  );
}
