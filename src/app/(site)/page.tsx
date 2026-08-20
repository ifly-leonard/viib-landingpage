import { BentoSection } from "@/components/viiv/BentoSection";
import { CompanyOrbit } from "@/components/viiv/CompanyOrbit";
import { CredentialsSection } from "@/components/viiv/CredentialsSection";
import { EnvisionedBySection } from "@/components/viiv/EnvisionedBySection";
import { FAQSection } from "@/components/viiv/FAQSection";
// ForStudentsSection temporarily hidden — restore below when ready.
import { HeroCover } from "@/components/viiv/HeroCover";
// ImmersiveTransition temporarily hidden — restore below when ready.
// import { ImmersiveTransition } from "@/components/viiv/ImmersiveTransition";
import { MentorsSectionVelocityScroll } from "@/components/viiv/MentorsSectionVelocityScroll";
import { StatusQuoSection } from "@/components/viiv/StatusQuoSection";
import { SectionShell } from "@/components/viiv/SectionShell";
import { Reveal } from "@/components/viiv/motion";

export default function HomePage() {
  return (
    <>
      <HeroCover />      
      {/* ImmersiveTransition temporarily hidden — restore below when ready. */}
      {/* <ImmersiveTransition> */}
      <EnvisionedBySection />
      <MentorsSectionVelocityScroll />
      <StatusQuoSection />
      <BentoSection />
      {/* </ImmersiveTransition> */}            
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center">
              <p className="viiv-kicker">Where VIIV builders go on to work</p>
              <h2 className="viiv-section-title mt-4">Backed by mentors from the companies shaping the future.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-12">
              <CompanyOrbit />
            </div>
          </Reveal>
        </div>
      </SectionShell>
      <CredentialsSection />
      {/* <ForStudentsSection /> */}
      <FAQSection />
    </>
  );
}
