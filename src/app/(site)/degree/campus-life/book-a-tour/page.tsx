import type { Metadata } from "next";

import { CampusVisitBookingSection } from "@/components/viiv/campus-visit/CampusVisitBookingSection";
import { CampusLocationCard } from "@/components/viiv/campus-visit/CampusLocationCard";
import { CampusVisitFAQ } from "@/components/viiv/campus-visit/CampusVisitFAQ";
import { CampusVisitHero } from "@/components/viiv/campus-visit/CampusVisitHero";
import { ParentsWelcomeSection } from "@/components/viiv/campus-visit/ParentsWelcomeSection";
import { VisitExperienceSection } from "@/components/viiv/campus-visit/VisitExperienceSection";
import { VisitInformationPanel } from "@/components/viiv/campus-visit/VisitInformationPanel";
import { campusVisitHero } from "@/content/campusVisit";

export const metadata: Metadata = {
  title: "Come Visit Our Campus | VIIV — Varman Institute of Innovation and Venture Building",
  description: campusVisitHero.description,
};

export const dynamic = "force-dynamic";

export default function BookATourPage() {
  return (
    <>
      <CampusVisitHero />
      <VisitExperienceSection />
      <VisitInformationPanel />
      <ParentsWelcomeSection />
      <CampusVisitBookingSection />
      <CampusLocationCard />
      <CampusVisitFAQ />
    </>
  );
}
