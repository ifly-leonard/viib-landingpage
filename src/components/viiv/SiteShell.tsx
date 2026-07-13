import Link from "next/link";
import { Phone } from "lucide-react";

import { Footer } from "@/components/viiv/Footer";
import { Header } from "@/components/viiv/Header";
import { GridBackground } from "@/components/viiv/GridBackground";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[color:var(--vil-ivory)] text-[color:var(--text-main)]">
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
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
    <Link href="/admissions#apply" className={`btn-primary ${className}`}>
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
