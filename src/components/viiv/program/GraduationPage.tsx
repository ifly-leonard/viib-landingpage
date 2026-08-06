import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Mic2, Presentation, Trophy } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { ApplyButton } from "@/components/viiv/SiteShell";
import { graduationPortfolio } from "@/content/program";

const pitchStory = ["The problem", "The solution", "Market validation", "Business model", "Traction", "Financials", "Funding ask", "Long-term vision"];
const audience = ["Angel investors", "Venture capitalists", "Incubators", "Accelerators", "Business leaders", "Startup founders", "Alumni", "University partners"];

export function GraduationPage() {
  return (
    <>
      <section className="relative min-h-[48rem] overflow-hidden bg-[color:var(--vil-navy)] pt-28 text-white md:pt-36">
        <Image src="/cover/cover_3_hackathon.png" alt="A VIIV showcase and Demo Day experience" fill priority className="object-cover opacity-50" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--vil-navy)] via-[color:var(--vil-navy)]/88 to-[color:var(--vil-navy)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)] via-transparent to-transparent" />
        <div className="viiv-container relative z-10 flex min-h-[40rem] items-end pb-20 md:pb-28">
          <Reveal>
            <Link href="/program" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-[color:var(--vil-gold)]"><ArrowLeft className="h-4 w-4" /> Program overview</Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-gold)]">Graduation & Demo Day</p>
            <h1 className="mt-5 max-w-5xl text-balance text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.06em]">Graduate with proof.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/75">The final examination is not a written answer. It is a working venture, credible evidence, and a founder who can defend the journey.</p>
            <div className="mt-9"><ApplyButton className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]" /></div>
          </Reveal>
        </div>
      </section>

      <SectionShell tone="light">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="viiv-kicker">Graduation requirements</p>
            <h2 className="viiv-section-title mt-4">Evidence over examination.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-muted)]">Students complete the program by assembling a portfolio that shows what they discovered, built, validated, operated, and learned.</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {graduationPortfolio.map((item, index) => (
              <Reveal key={item} delay={index * 0.035}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-white p-5 shadow-[0_14px_35px_-28px_rgba(31,49,73,0.5)]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]"><Check className="h-4 w-4" /></span>
                  <span className="font-semibold text-[color:var(--vil-navy)]">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <Reveal>
          <p className="viiv-kicker text-[color:var(--vil-gold)]">The final stage</p>
          <h2 className="viiv-section-title mt-4 max-w-4xl text-white">A startup showcase, not a ceremonial project.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            { icon: Trophy, step: "01", title: "Bring the evidence", copy: "A live product, customer insight, traction, financials, and the documents behind the venture." },
            { icon: Presentation, step: "02", title: "Tell the venture story", copy: "Explain the problem, the decisions, what the market said, and why the company can matter." },
            { icon: Mic2, step: "03", title: "Face a real audience", copy: "Answer questions from people who build, fund, operate, and support growing companies." },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-white/7 p-7 backdrop-blur-sm md:p-8">
                <div className="flex items-center justify-between"><item.icon className="h-7 w-7 text-[color:var(--vil-gold)]" /><span className="text-xs font-bold tracking-[0.2em] text-white/35">{item.step}</span></div>
                <h3 className="mt-10 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-white/65">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="gold">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="viiv-kicker">Every student presents</p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {pitchStory.map((item, index) => <div key={item} className="rounded-2xl bg-[color:var(--vil-ivory)] p-4 font-semibold text-[color:var(--vil-navy)]"><span className="mr-2 text-xs text-[color:var(--vil-gold-dim)]">{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="viiv-kicker">In the room</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">A conversation with the startup ecosystem.</h2>
            <div className="mt-7 flex flex-wrap gap-2">{audience.map((item) => <span key={item} className="rounded-full border border-[color:var(--vil-navy)]/15 bg-[color:var(--vil-navy)] px-4 py-2 text-sm font-semibold text-white">{item}</span>)}</div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="light" compact>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div><p className="viiv-kicker">The complete journey</p><p className="mt-3 text-3xl font-bold text-[color:var(--vil-navy)]">See how students reach Demo Day.</p></div>
          <Link href="/program/build-an-enterprise" className="btn-primary">Explore Year 3 <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </SectionShell>
    </>
  );
}
