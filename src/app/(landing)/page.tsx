import type { Metadata } from "next";

import { Footer } from "@/components/viiv/Footer";
import { Navbar } from "@/components/landing/layout/Navbar";
import { StickyMobileCTA } from "@/components/landing/layout/StickyMobileCTA";
import { BusinessSideOfTech } from "@/components/landing/sections/BusinessSideOfTech";
import { CareerReadiness } from "@/components/landing/sections/CareerReadiness";
import { CareerTransformation } from "@/components/landing/sections/CareerTransformation";
import { FAQ } from "@/components/landing/sections/FAQ";
import { FinalCTA } from "@/components/landing/sections/FinalCTA";
import { FounderSection } from "@/components/landing/sections/FounderSection";
import { FullStackSales } from "@/components/landing/sections/FullStackSales";
import { GraduateReality } from "@/components/landing/sections/GraduateReality";
import { Hero } from "@/components/landing/sections/Hero";
import { HiddenJobMarket } from "@/components/landing/sections/HiddenJobMarket";
import { LearnByDoing } from "@/components/landing/sections/LearnByDoing";
import { ProofOfWork } from "@/components/landing/sections/ProofOfWork";
import { SalesStack } from "@/components/landing/sections/SalesStack";
import { SkillGap } from "@/components/landing/sections/SkillGap";
import { VIIVMethod } from "@/components/landing/sections/VIIVMethod";
import { WebinarSection } from "@/components/landing/sections/WebinarSection";
import { WhySales } from "@/components/landing/sections/WhySales";
import { StructuredData } from "@/components/landing/StructuredData";
import { site } from "@/content/landing/site";
import { latestOgImagePath, ogConfig } from "@/lib/og.config";

const ogImagePath = latestOgImagePath();

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.fullBrand,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: ogImagePath, width: ogConfig.width, height: ogConfig.height, alt: ogConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [ogImagePath],
  },
};

/**
 * Homepage narrative: I need a job → my options are bigger →
 * business careers beyond coding → sales is a business career → skill gap →
 * Full-Stack Sales teaches it → practice + proof → real experience → free webinar.
 */
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <GraduateReality />
        <HiddenJobMarket />
        <BusinessSideOfTech />
        <WhySales />
        <SkillGap />
        <FullStackSales />
        <SalesStack />
        <LearnByDoing />
        <VIIVMethod />
        <ProofOfWork />
        <CareerReadiness />
        <CareerTransformation />
        <FounderSection />
        <WebinarSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <StructuredData />
    </>
  );
}
