import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, MoveUpRight } from "lucide-react";

import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { ventureStudioDetails } from "@/content/campusLife";

export default function StudiosLabsPage() {
  return (
    <>
      <CampusEditorialHero eyebrow="Studios & Labs" title="Choose a market. Build inside it." description="In Year 3, students choose a venture studio and organise their learning, mentoring, and company-building around one industry direction." image="/photos/059A2764.jpg" cta={{ label: "Explore Year 3", href: "/program/build-an-enterprise" }} />
      <SectionShell tone="light"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"><Reveal><div className="lg:sticky lg:top-28"><FlaskConical className="h-9 w-9 text-[color:var(--vil-gold-dim)]" /><p className="viiv-kicker mt-8">Proposed venture studios</p><h2 className="viiv-section-title mt-4">Industry context changes how you build.</h2><p className="mt-6 text-lg leading-relaxed text-[color:var(--text-muted)]">Each studio creates a focused environment for customer discovery, specialist mentoring, relevant partnerships, and venture decisions grounded in the realities of that sector.</p></div></Reveal><div className="space-y-3">{ventureStudioDetails.map((studio, index) => <Reveal key={studio.title} delay={(index % 4) * 0.04}><article className="group grid gap-5 rounded-2xl border border-[color:var(--border)] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[color:var(--vil-gold)] sm:grid-cols-[5rem_1fr_auto] sm:items-center"><span className="text-3xl font-bold text-[color:var(--vil-gold)]">{studio.icon}</span><div><h3 className="text-2xl font-bold text-[color:var(--vil-navy)]">{studio.title}</h3><p className="mt-2 leading-relaxed text-[color:var(--text-muted)]">{studio.copy}</p></div><MoveUpRight className="hidden h-5 w-5 text-[color:var(--vil-gold-dim)] transition group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" /></article></Reveal>)}</div></div></SectionShell>
      <SectionShell tone="dark"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><Reveal><div className="relative h-[30rem] overflow-hidden rounded-[2rem]"><Image src="/photos/059A3202.jpg" alt="Students building collaboratively in a VIIV studio" fill className="object-cover" sizes="50vw" /></div></Reveal><Reveal delay={0.08}><p className="viiv-kicker text-[color:var(--vil-gold)]">One venture, every assignment</p><h2 className="viiv-section-title mt-4 text-white">No hypothetical startups. No random case studies.</h2><p className="mt-6 text-lg leading-relaxed text-white/65">From studio selection onward, the student&apos;s projects, reviews, systems, financial work, and founder development contribute to the same company.</p><Link href="/program/build-an-enterprise" className="btn-primary mt-8 !bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]">See the Year 3 journey <ArrowRight className="h-4 w-4" /></Link></Reveal></div></SectionShell>
    </>
  );
}
