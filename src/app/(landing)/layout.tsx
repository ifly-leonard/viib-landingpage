import { CallbackDialog } from "@/components/viiv/CallbackDialog";
import { CallbackProvider } from "@/components/viiv/CallbackContext";
import { FooterCtaProvider, type FooterCta } from "@/components/viiv/FooterCtaContext";
import { Providers } from "@/components/landing/Providers";
import { anchors } from "@/content/landing/site";

/**
 * Full-Stack Sales footer CTA for the landing page. The degree-focused copy
 * ("Earn the degree. Build the venture.") stays on /degree only.
 */
const landingFooterCta: FooterCta = {
  eyebrow: "Free career webinar · Full-Stack Sales",
  headline: "Build skills. Prove skills. Launch your career.",
  description:
    "Join the free career webinar to see the business careers growing fastest in tech — then build the practical, job-ready skills companies look for with VIIV Full-Stack Sales.",
  buttonLabel: "Join Free Webinar",
  buttonHref: `#${anchors.webinar}`,
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <FooterCtaProvider initial={landingFooterCta}>
        <CallbackProvider>
          <div className="landing-root min-h-svh bg-paper font-sans text-ink antialiased">{children}</div>
          <CallbackDialog />
        </CallbackProvider>
      </FooterCtaProvider>
    </Providers>
  );
}
