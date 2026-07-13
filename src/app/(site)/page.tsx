import { BentoSection } from "@/components/viiv/BentoSection";
import { CredentialsSection } from "@/components/viiv/CredentialsSection";
import { FAQSection } from "@/components/viiv/FAQSection";
import { ForStudentsSection } from "@/components/viiv/ForStudentsSection";
import { HeroCover } from "@/components/viiv/HeroCover";
import { ImmersiveTransition } from "@/components/viiv/ImmersiveTransition";
import { MentorsSection } from "@/components/viiv/MentorsSection";
import { StatusQuoSection } from "@/components/viiv/StatusQuoSection";

export default function HomePage() {
  return (
    <>
      <HeroCover />
      <StatusQuoSection />
      <ImmersiveTransition>
        <BentoSection />
      </ImmersiveTransition>
      <MentorsSection />
      <CredentialsSection />
      <ForStudentsSection />
      <FAQSection />
    </>
  );
}
