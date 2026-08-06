import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap, Layers3, Rocket, Sparkles } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { ApplyButton } from "@/components/viiv/SiteShell";
import { graduationPortfolio, programYears, ventureStudios } from "@/content/program";

const journeyIcons = [Sparkles, Rocket, Layers3];

export default function ProgramPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--vil-navy)] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:30px_30px]" />
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-[color:var(--vil-gold)]/20 blur-[100px]" />
        <div className="viiv-container relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold)]">The VIIV Framework</p>
              <h1 className="mt-6 max-w-4xl text-balance text-[clamp(3.8rem,8vw,8rem)] font-bold leading-[0.86] tracking-[-0.065em]">
                Learn. Build. Launch. Scale.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
                A three-year venture-building journey completed alongside an online BBA—designed to move students from problem-solvers to business builders to founder-leaders.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ApplyButton className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]" />
                <a href="#journey" className="btn-secondary !border-white/25 !text-white">See the three years <ArrowRight className="h-4 w-4" /></a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid h-[29rem] grid-cols-7 grid-rows-6 gap-3 md:h-[36rem]">
                <div className="relative col-span-4 row-span-6 overflow-hidden rounded-[2rem]"><Image src="/photos/059A2764.jpg" alt="A live founder learning session at VIIV" fill priority className="object-cover" sizes="(max-width: 1024px) 58vw, 34vw" /></div>
                <div className="relative col-span-3 row-span-3 overflow-hidden rounded-[2rem]"><Image src="/photos/059A3202.jpg" alt="Builders collaborating on campus" fill className="object-cover" sizes="(max-width: 1024px) 42vw, 26vw" /></div>
                <div className="relative col-span-3 row-span-3 overflow-hidden rounded-[2rem]"><Image src="/photos/059A3259.jpg" alt="The VIIV builder community" fill className="object-cover" sizes="(max-width: 1024px) 42vw, 26vw" /></div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {[{ value: "3", label: "Years" }, { value: "13", label: "Curriculum quests" }, { value: "Real", label: "Customer evidence" }, { value: "1", label: "Demo Day venture" }].map((stat) => (
              <div key={stat.label} className="bg-[color:var(--vil-navy)] p-5 md:p-6"><p className="text-3xl font-bold text-[color:var(--vil-gold)]">{stat.value}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/50">{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <SectionShell id="journey" tone="light">
        <Reveal>
          <p className="viiv-kicker">The VIIV transformation</p>
          <h2 className="viiv-section-title mt-4 max-w-4xl">Three years. One connected journey.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--text-muted)]">Each year changes the scale of the challenge—from developing the individual, to launching a business, to building an enterprise.</p>
        </Reveal>

        <div className="mt-12 space-y-5">
          {programYears.map((year, index) => {
            const Icon = journeyIcons[index];
            return (
              <Reveal key={year.slug} delay={index * 0.06}>
                <Link href={`/program/${year.slug}`} className="group grid overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white shadow-[0_20px_60px_-45px_rgba(31,49,73,0.65)] transition hover:-translate-y-1 hover:border-[color:var(--vil-gold)] lg:grid-cols-[0.78fr_1.22fr]">
                  <div className="relative min-h-[18rem] overflow-hidden">
                    <Image src={year.images[0]} alt={`${year.title} at VIIV`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 40vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]"><Icon className="h-6 w-6" /></div>
                  </div>
                  <div className="flex flex-col justify-between p-7 md:p-10">
                    <div>
                      <div className="flex items-center justify-between gap-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--vil-gold-dim)]">Year {year.year}</p><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--vil-navy)] text-[color:var(--vil-gold)] transition-transform group-hover:translate-x-1"><ArrowRight className="h-4 w-4" /></span></div>
                      <h3 className="mt-5 text-4xl font-bold tracking-tight text-[color:var(--vil-navy)] md:text-5xl">{year.title}</h3>
                      <p className="mt-4 max-w-xl text-lg leading-relaxed text-[color:var(--text-muted)]">{year.headline}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">{year.quests.map((quest) => <span key={quest.number} className="rounded-full bg-[color:var(--vil-surface-muted)] px-3 py-2 text-xs font-semibold text-[color:var(--vil-navy)]">{quest.title}</span>)}</div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <p className="viiv-kicker text-[color:var(--vil-gold)]">Year 3 venture paths</p>
            <h2 className="viiv-section-title mt-4 max-w-2xl text-white">One founder. One vision. One company.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">Students choose an industry direction, then organise every assignment, mentor conversation, and assessment around building that venture.</p>
            <Link href="/program/build-an-enterprise" className="btn-primary mt-8 !bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]">Explore Year 3 <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {ventureStudios.map((studio, index) => (
              <Reveal key={studio} delay={index * 0.035}>
                <div className="flex min-h-28 items-end rounded-2xl border border-white/10 bg-white/7 p-4 font-semibold text-white/85 transition hover:border-[color:var(--vil-gold)] hover:bg-white/10">{studio}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="gold" showGrid>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <Reveal>
            <GraduationCap className="h-10 w-10 text-[color:var(--vil-navy)]" />
            <p className="viiv-kicker mt-8">Graduate with proof</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">A body of work the world can inspect.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--vil-navy)]/70">Students do not graduate on marks alone. They present the evidence behind a real venture and the founder they have become.</p>
            <Link href="/program/graduation-and-demo-day" className="btn-primary mt-8">See Graduation & Demo Day <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {graduationPortfolio.map((item, index) => (
              <Reveal key={item} delay={index * 0.035}>
                <div className="flex h-full items-center gap-3 rounded-2xl bg-[color:var(--vil-ivory)] p-4 font-semibold text-[color:var(--vil-navy)] shadow-sm"><Check className="h-4 w-4 shrink-0 text-[color:var(--vil-gold-dim)]" />{item}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="light" compact>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[color:var(--vil-navy)] px-7 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
            <div className="relative z-10"><p className="viiv-kicker text-[color:var(--vil-gold)]">Your builder journey starts here</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Ready to build more than a résumé?</h2><p className="mx-auto mt-5 max-w-xl text-white/65">Earn the degree. Build the venture. Graduate with proof.</p><div className="mt-8"><ApplyButton className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]" /></div></div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
