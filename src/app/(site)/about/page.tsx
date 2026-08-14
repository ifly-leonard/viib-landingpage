import { ArrowUpRight, Flame, Rocket, Send } from "lucide-react";

import { ApplyButton } from "@/components/viiv/SiteShell";
import { SectionShell } from "@/components/viiv/SectionShell";
import { Reveal } from "@/components/viiv/motion";

const MISSION_POINTS = [
  "Builders",
  "Innovators",
  "Entrepreneurs",
  "Wealth creators",
] as const;

const PHASES = [
  { icon: Flame, label: "Ignite", copy: "Start early. Experiment. Learn by doing." },
  { icon: Rocket, label: "Build", copy: "Create companies, products, and real ventures." },
  { icon: Send, label: "Launch", copy: "Scale, generate employment, accelerate innovation." },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--vil-navy)] pb-24 pt-36 text-[color:var(--vil-ivory)] md:pb-32 md:pt-44">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:30px_30px]" />
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-[color:var(--vil-gold)]/20 blur-[100px]" />
        <div className="viiv-container relative z-10">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold)]">
              About VIIV
            </p>
            <h1 className="mt-8 max-w-4xl text-balance text-[clamp(3.4rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.055em]">
              India needs
              <br />
              more builders.
              <br />
              <span className="text-[color:var(--vil-gold)]">We&apos;re building them.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              After years of building businesses and working inside high-growth companies, we recognised something important: young people shouldn&apos;t have to wait until their late 20s or 30s to start building.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ApplyButton className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]" />
              <a href="#story" className="btn-secondary !border-white/25 !text-white">
                Our story <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <SectionShell tone="light" id="story">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white shadow-[0_30px_80px_-40px_rgba(31,49,73,0.55)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founder/arunmozhivarman.jpeg"
                alt="Arunmozhivarman Ramachandran, Founder of VIIV"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="max-w-2xl">
              <p className="viiv-kicker">Why we exist</p>
              <h2 className="viiv-section-title mt-4">Start early. Build real things. Don&apos;t wait.</h2>
              <div className="mt-8 space-y-5 text-base leading-[1.8] text-[color:var(--text-muted)] md:text-lg">
                <p>
                  This belief is shared by VIIV&apos;s growing mentor network of founders, entrepreneurs, senior leaders and professionals from leading startups, MNCs and institutions.
                </p>
                <p>
                  Together, we believe students should start early — solving real problems, experimenting with ideas, using AI, understanding customers, building products, learning to sell, and experiencing entrepreneurship firsthand.
                </p>
                <p>
                  That is why we created{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    VIIV — Varman Institute of Innovation and Venture Building.
                  </strong>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* Mission */}
      <SectionShell tone="dark">
        <Reveal>
          <p className="viiv-kicker text-[color:var(--vil-gold)]">Our mission</p>
          <h2 className="viiv-section-title mt-4 text-white">
            Develop a generation of builders, innovators, entrepreneurs and wealth creators.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            People who can create companies, generate employment and accelerate innovation across sectors — contributing to India&apos;s journey towards becoming a global innovation and economic powerhouse.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {MISSION_POINTS.map((point, index) => (
            <Reveal key={point} delay={index * 0.06}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-white/7 p-6">
                <p className="font-display text-3xl font-extrabold text-[color:var(--vil-gold-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-xl font-bold text-white">{point}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* IGNITE. BUILD. LAUNCH. */}
      <SectionShell tone="gold" compact>
        <div className="grid gap-6 md:grid-cols-3">
          {PHASES.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Reveal key={phase.label} delay={index * 0.07}>
                <article className="flex h-full flex-col items-center rounded-[2rem] bg-[color:var(--vil-ivory)] p-8 text-center shadow-sm">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--vil-navy)] text-[color:var(--vil-gold)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-[color:var(--vil-navy)]">
                    {phase.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    {phase.copy}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <p className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase tracking-[-0.02em] text-[color:var(--vil-navy)]">
              Ignite. Build. Launch.
            </p>
            <div className="mt-8">
              <ApplyButton className="!bg-[color:var(--vil-navy)] !text-[color:var(--vil-ivory)]" />
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
