import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Presentation, Users, Wrench } from "lucide-react";

import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { campusRhythm } from "@/content/campusLife";

const icons = [MessageSquare, Wrench, Users, Presentation];

export default function LifeAtViivPage() {
  return (
    <>
      <CampusEditorialHero eyebrow="Life at VIIV" title="College, in builder mode." description="A full-time campus rhythm shaped by questions, studio work, customer conversations, mentor feedback, and the energy of making something real." image="/photos/059A3259.jpg" cta={{ label: "Book a campus visit", href: "/campus-life/book-a-tour" }} />

      <SectionShell tone="light">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal><p className="viiv-kicker">The everyday experience</p><h2 className="viiv-section-title mt-4">Not every day looks the same. Every day moves the work forward.</h2><p className="mt-6 text-lg leading-relaxed text-[color:var(--text-muted)]">Students move between structured learning, focused studio time, field research, peer collaboration, and live reviews. The campus is designed to make progress visible and participation unavoidable.</p></Reveal>
          <Reveal delay={0.08}><div className="grid h-[32rem] grid-cols-5 grid-rows-5 gap-3"><div className="relative col-span-3 row-span-5 overflow-hidden rounded-[2rem]"><Image src="/photos/059A3202.jpg" alt="Builders collaborating during studio time" fill className="object-cover" sizes="35vw" /></div><div className="relative col-span-2 row-span-3 overflow-hidden rounded-[2rem]"><Image src="/photos/059A2764.jpg" alt="A live learning session" fill className="object-cover" sizes="25vw" /></div><div className="relative col-span-2 row-span-2 overflow-hidden rounded-[2rem]"><Image src="/photos/059A3548.jpg" alt="A learner celebrating a milestone" fill className="object-cover" sizes="25vw" /></div></div></Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <Reveal><p className="viiv-kicker text-[color:var(--vil-gold)]">A builder cycle</p><h2 className="viiv-section-title mt-4 text-white">Learn a little. Build a little. Show it. Begin again.</h2></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{campusRhythm.map((item, index) => { const Icon = icons[index]; return <Reveal key={item.time} delay={index * 0.06}><article className="h-full rounded-[2rem] border border-white/10 bg-white/7 p-6"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]"><Icon className="h-5 w-5" /></div><p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold)]">{item.time}</p><h3 className="mt-3 text-2xl font-bold">{item.title}</h3><p className="mt-4 leading-relaxed text-white/60">{item.copy}</p></article></Reveal>; })}</div>
      </SectionShell>

      <SectionShell tone="gold" compact><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="viiv-kicker">See it for yourself</p><h2 className="mt-3 text-3xl font-bold text-[color:var(--vil-navy)] md:text-4xl">Walk the campus. Meet the people. Feel the rhythm.</h2></div><Link href="/campus-life/gallery" className="btn-primary">Open the gallery <ArrowRight className="h-4 w-4" /></Link></div></SectionShell>
    </>
  );
}
