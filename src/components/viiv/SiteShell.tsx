import Link from "next/link";
import { Phone } from "lucide-react";

import WhatsappFAB from "lovely-whatsapp-fab";

import { Footer } from "@/components/viiv/Footer";
import { FooterCtaProvider } from "@/components/viiv/FooterCtaContext";
import { Header } from "@/components/viiv/Header";
import { LeadMagnetModal } from "@/components/viiv/LeadMagnetModal";
import { LeadMagnetProvider } from "@/components/viiv/LeadMagnetContext";
import { LeadModal } from "@/components/viiv/LeadModal";
import { LeadModalProvider } from "@/components/viiv/LeadModalContext";
import { GridBackground } from "@/components/viiv/GridBackground";
import { admissionsConfig } from "@/lib/admissions.config";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <FooterCtaProvider>
      <LeadModalProvider>
        <LeadMagnetProvider>
          <div className="relative min-h-screen overflow-x-clip bg-[color:var(--vil-ivory)] text-[color:var(--text-main)]">
            <div className="relative z-10">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
          <LeadModal />
          <LeadMagnetModal />
          <span className="whatsapp-fab-float fixed bottom-5 right-5 z-[60] sm:bottom-6 sm:right-6">
            <WhatsappFAB
              phoneNumber="+919629628389"
              message="Hi VIIV! I'd like to know more about the program."
            />
          </span>
        </LeadMagnetProvider>
      </LeadModalProvider>
    </FooterCtaProvider>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-navy)] pt-28 md:pt-36">
      <GridBackground tone="dark" className="opacity-100" />
      <div className="viiv-container relative z-10 pb-16 pt-8 md:pb-24">
        <p className="viiv-kicker text-[color:var(--vil-gold)]">{eyebrow}</p>
        <div className="mt-4 max-w-5xl">{title}</div>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--vil-ivory)]/80">{description}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function ApplyButton({ className = "" }: { className?: string }) {
  return (
    <Link href="/admissions/how-to-apply" className={`btn-primary ${className}`}>
      Apply Now
    </Link>
  );
}

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a href="tel:+919629628389" className={`btn-secondary ${className}`}>
      <Phone className="h-4 w-4" />
      Call Admissions
    </a>
  );
}
