import { notFound } from "next/navigation";

import { CampusVisitHero } from "@/components/viiv/campus-visit/CampusVisitHero";
import { CampusVisitBookingSection } from "@/components/viiv/campus-visit/CampusVisitBookingSection";
import { CampusLocationCard } from "@/components/viiv/campus-visit/CampusLocationCard";
import { CampusVisitFAQ } from "@/components/viiv/campus-visit/CampusVisitFAQ";
import { ParentsWelcomeSection } from "@/components/viiv/campus-visit/ParentsWelcomeSection";
import { VisitExperienceSection } from "@/components/viiv/campus-visit/VisitExperienceSection";
import { VisitInformationPanel } from "@/components/viiv/campus-visit/VisitInformationPanel";

import { GuideBlock, GuideShell } from "../../guide-shell";
import { GoldenHeroVariant } from "./golden-hero";

const pageStyles = {
  "1": {
    title: "Page Style 1 — Book a Visit Structure",
    description:
      "The literal section order of the campus-visit page: hero, experience, info panel, parents, booking, location, FAQ. Every block is the exact component used in production.",
    render: (
      <>
        <CampusVisitHero />
        <VisitExperienceSection />
        <VisitInformationPanel />
        <ParentsWelcomeSection />
        <CampusVisitBookingSection />
        <CampusLocationCard />
        <CampusVisitFAQ />
      </>
    ),
  },
  "2": {
    title: "Page Style 2 — Golden Hero Tint · Centered Text",
    description:
      "A hero variant with a warm golden radial tint behind the headline, and centered text and CTA. Use this for a softer, more welcoming open.",
    render: <GoldenHeroVariant />,
  },
} as const;

export function generateStaticParams() {
  return Object.keys(pageStyles).map((slug) => ({ slug }));
}

export default async function UiGuidePageStylePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = pageStyles[slug as keyof typeof pageStyles];

  if (!style) {
    notFound();
  }

  return (
    <GuideShell
      title={style.title}
      description={style.description}
      backHref="/ui-guide/page-styles/1"
      backLabel="All page styles"
    >
      <GuideBlock title="Live page style" description="Full-width, composed exactly as it would appear in production.">
        {style.render}
      </GuideBlock>
    </GuideShell>
  );
}
