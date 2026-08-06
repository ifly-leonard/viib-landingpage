import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";
import { QuestExplorer } from "@/components/viiv/program/QuestExplorer";
import { SectionShell } from "@/components/viiv/SectionShell";
import { ApplyButton } from "@/components/viiv/SiteShell";
import type { ProgramPageData } from "@/content/program";
import { programYears } from "@/content/program";

function PhotoMosaic({ images, title }: { images: readonly string[]; title: string }) {
  return (
    <div className="grid h-[28rem] grid-cols-5 grid-rows-5 gap-3 md:h-[34rem]">
      <div className="relative col-span-3 row-span-5 overflow-hidden rounded-[2rem]">
        <Image src={images[0]} alt={`${title} learning experience`} fill priority className="object-cover" sizes="(max-width: 1024px) 60vw, 36vw" />
      </div>
      <div className="relative col-span-2 row-span-3 overflow-hidden rounded-[2rem]">
        <Image src={images[1]} alt="Students collaborating at VIIV" fill className="object-cover" sizes="(max-width: 1024px) 40vw, 24vw" />
      </div>
      <div className="relative col-span-2 row-span-2 overflow-hidden rounded-[2rem]">
        <Image src={images[2]} alt="A live learning session at VIIV" fill className="object-cover" sizes="(max-width: 1024px) 40vw, 24vw" />
      </div>
    </div>
  );
}

export function ProgramDetailPage({ data }: { data: ProgramPageData }) {
  const current = programYears.findIndex((year) => year.slug === data.slug);
  const previous = current > 0 ? programYears[current - 1] : null;
  const next = current < programYears.length - 1 ? programYears[current + 1] : null;

  return (
    <>
      <section className="relative overflow-hidden bg-[color:var(--vil-navy)] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="absolute right-[-10%] top-[-20%] h-[34rem] w-[34rem] rounded-full bg-[color:var(--vil-gold)]/15 blur-[110px]" />
        <div className="viiv-container relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <Link href="/program" className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-[color:var(--vil-gold)]">
              <ArrowLeft className="h-4 w-4" />
              Program overview
            </Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-gold)]">{data.eyebrow}</p>
            <h1 className="mt-5 text-balance text-[clamp(3.2rem,7vw,6.7rem)] font-bold leading-[0.92] tracking-[-0.055em]">{data.title}</h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/72">{data.headline}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ApplyButton className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]" />
              <a href="#quests" className="btn-secondary !border-white/25 !text-white">Explore the quests <ArrowRight className="h-4 w-4" /></a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <PhotoMosaic images={data.images} title={data.title} />
          </Reveal>
        </div>
      </section>

      <SectionShell tone="light">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <Reveal>
            <p className="viiv-kicker">The transformation</p>
            <h2 className="viiv-section-title mt-4 max-w-3xl">{data.headline}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--text-muted)]">{data.intro}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] bg-[color:var(--vil-gold)] p-7 text-[color:var(--vil-navy)] md:p-9">
              <Sparkles className="h-7 w-7" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] opacity-55">Year goal</p>
              <p className="mt-3 text-2xl font-bold leading-tight md:text-3xl">{data.goal}</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {data.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-[color:var(--border)] bg-white p-5 md:p-7">
                <p className="text-3xl font-bold tracking-tight text-[color:var(--vil-navy)] md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.13em] text-[color:var(--text-soft)]">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="quests" tone="light" className="!bg-[color:var(--vil-surface-muted)]">
        <Reveal>
          <p className="viiv-kicker">Curriculum quests</p>
          <h2 className="viiv-section-title mt-4">Learn it. Use it. Prove it.</h2>
          <p className="mt-5 max-w-2xl text-[color:var(--text-muted)]">Select a quest to see the skills, real-world challenge, and portfolio evidence students produce.</p>
        </Reveal>
        <div className="mt-12"><QuestExplorer quests={data.quests} /></div>
      </SectionShell>

      <SectionShell tone="gold" showGrid>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="viiv-kicker">{data.capstone.label}</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">{data.capstone.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--vil-navy)]/75">{data.capstone.description}</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.capstone.evidence.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="flex h-full items-center gap-3 rounded-2xl bg-[color:var(--vil-ivory)] p-5 font-semibold text-[color:var(--vil-navy)] shadow-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--vil-gold-dim)]" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="dark" compact>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="viiv-kicker text-[color:var(--vil-gold)]">Continue the journey</p>
            <p className="mt-3 text-2xl font-bold md:text-3xl">One year builds into the next.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {previous ? <Link href={`/program/${previous.slug}`} className="btn-secondary !border-white/25 !text-white"><ArrowLeft className="h-4 w-4" /> {previous.title}</Link> : null}
            {next ? <Link href={`/program/${next.slug}`} className="btn-primary !bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]">{next.title} <ArrowRight className="h-4 w-4" /></Link> : <Link href="/program/graduation-and-demo-day" className="btn-primary !bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]">Graduation & Demo Day <ArrowRight className="h-4 w-4" /></Link>}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
