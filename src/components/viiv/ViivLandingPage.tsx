import { AdmissionsCallout } from "@/components/viiv/AdmissionsCallout";
import { ComparisonPanel } from "@/components/viiv/ComparisonPanel";
import { FAQAccordion } from "@/components/viiv/FAQAccordion";
import { FinalCTA } from "@/components/viiv/FinalCTA";
import { Footer } from "@/components/viiv/Footer";
import { Header } from "@/components/viiv/Header";
import { Hero } from "@/components/viiv/Hero";
import { MethodSection } from "@/components/viiv/MethodSection";
import { OutcomesSection } from "@/components/viiv/OutcomesSection";
import { PillarGrid } from "@/components/viiv/PillarGrid";
import { ProgramJourney } from "@/components/viiv/ProgramJourney";
import { ProofStrip } from "@/components/viiv/ProofStrip";

export function ViivLandingPage() {
  return (
    <div className="min-h-screen bg-[color:var(--vil-ivory)] text-[color:var(--text-main)]">
      <div className="paper-grain" aria-hidden />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProofStrip />
          <ComparisonPanel />
          <MethodSection />
          <ProgramJourney />
          <PillarGrid />
          <OutcomesSection />
          <AdmissionsCallout />
          <FAQAccordion />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
