import { BentoSection } from "@/components/viiv/BentoSection";
import { CredentialsSection } from "@/components/viiv/CredentialsSection";
import { EnvisionedBySection } from "@/components/viiv/EnvisionedBySection";
import { FAQSection } from "@/components/viiv/FAQSection";
// ForStudentsSection temporarily hidden — restore below when ready.
import { HeroCover } from "@/components/viiv/HeroCover";
import { ImmersiveTransition } from "@/components/viiv/ImmersiveTransition";
import { MentorsSectionVelocityScroll } from "@/components/viiv/MentorsSectionVelocityScroll";
import { StatusQuoSection } from "@/components/viiv/StatusQuoSection";

export default function HomePage() {
  return (
    <>
      <HeroCover />
      <StatusQuoSection />
      <ImmersiveTransition>
        <BentoSection />
      </ImmersiveTransition>
      <EnvisionedBySection />
      <MentorsSectionVelocityScroll />
      <CredentialsSection />
      {/* <ForStudentsSection /> */}
      <FAQSection />
    </>
  );
}
