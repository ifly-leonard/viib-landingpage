import { ArrowUpRight, Phone } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";
import { finalCtaContent } from "@/content/homepage";

export function FinalCTA() {
  return (
    <section id="apply" className="viiv-section">
      <div className="viiv-container">
        <Reveal>
          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--vil-navy)] px-8 py-12 text-center text-[color:var(--vil-ivory)] md:px-14 md:py-16">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight text-balance">
              {finalCtaContent.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--vil-ivory)]/82 md:text-lg">
              {finalCtaContent.subcopy}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {finalCtaContent.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-6 py-3.5 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
                      : "inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-ivory)]/25 px-6 py-3.5 text-sm font-semibold text-[color:var(--vil-ivory)] transition hover:bg-[color:var(--vil-ivory)]/8"
                  }
                >
                  {cta.label}
                  {cta.label === "Apply Now" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <Phone className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
