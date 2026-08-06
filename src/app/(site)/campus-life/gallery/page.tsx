import { Camera } from "lucide-react";

import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { CampusMasonryGallery } from "@/components/viiv/campus-life/CampusMasonryGallery";
import { SectionShell } from "@/components/viiv/SectionShell";

export default function GalleryPage() {
  return (
    <>
      <CampusEditorialHero eyebrow="Campus gallery" title="Builder moments, documented." description="Workshops, conversations, milestones, experiments, and the people who bring the campus to life." image="/photos/059A3257.jpg" />
      <SectionShell tone="light"><div className="mb-10 flex items-end justify-between gap-5"><div><p className="viiv-kicker">Photo album</p><h2 className="viiv-section-title mt-4">Inside the VIIV community.</h2></div><Camera className="hidden h-10 w-10 text-[color:var(--vil-gold-dim)] sm:block" /></div><CampusMasonryGallery /></SectionShell>
    </>
  );
}
