import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Lightbulb, PackageCheck, Play, Presentation, Users } from "lucide-react";

import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";

const format = [
  { icon: Lightbulb, title: "Frame the problem", copy: "Show who experiences it, what happens today, and the customer evidence behind the opportunity." },
  { icon: PackageCheck, title: "Demonstrate the solution", copy: "Bring the working product or service. Show what users can do—not only what a future version might become." },
  { icon: BarChart3, title: "Present the evidence", copy: "Share validation, business model, traction, revenue, financials, and the decisions those numbers support." },
  { icon: Users, title: "Face the room", copy: "Answer questions from founders, operators, investors, incubators, accelerators, and university partners." },
];

const archiveSlots = [
  { title: "Founder pitch archive", image: "/photos/059A3153.jpg", copy: "Full student venture pitches and Q&A sessions will appear here." },
  { title: "Product demo archive", image: "/photos/059A2764.jpg", copy: "Watch students demonstrate products, experiments, and market learning." },
  { title: "Behind Demo Day", image: "/photos/059A3259.jpg", copy: "Preparation, mentor reviews, rehearsals, and stories from the floor." },
];

export default function DemoDaysPage() {
  return (
    <>
      <CampusEditorialHero eyebrow="Demo Days" title="Show the work. Defend the evidence." description="Demo Day is where building becomes visible: a live product, a real market story, honest numbers, and the next decision in front of a real audience." image="/cover/cover_3_hackathon.png" cta={{ label: "See graduation requirements", href: "/program/graduation-and-demo-day" }} />
      <SectionShell tone="light"><Reveal><p className="viiv-kicker">The format</p><h2 className="viiv-section-title mt-4">More than a pitch deck.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--text-muted)]">Every presentation follows the venture from validated problem to product, market response, business model, and founder vision.</p></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{format.map((item, index) => <Reveal key={item.title} delay={index * 0.06}><article className="h-full rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_45px_-35px_rgba(31,49,73,0.5)]"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]"><item.icon className="h-5 w-5" /></span><span className="text-xs font-bold tracking-[0.18em] text-[color:var(--text-soft)]">0{index + 1}</span></div><h3 className="mt-8 text-2xl font-bold text-[color:var(--vil-navy)]">{item.title}</h3><p className="mt-4 leading-relaxed text-[color:var(--text-muted)]">{item.copy}</p></article></Reveal>)}</div></SectionShell>
      <SectionShell tone="dark"><Reveal><p className="viiv-kicker text-[color:var(--vil-gold)]">Past showcase videos</p><h2 className="viiv-section-title mt-4 text-white">The film archive is being assembled.</h2><p className="mt-5 max-w-2xl text-white/60">These modules are ready for verified event films and student permissions. No placeholder video links have been published.</p></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{archiveSlots.map((slot, index) => <Reveal key={slot.title} delay={index * 0.07}><article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/7"><div className="relative aspect-video overflow-hidden"><Image src={slot.image} alt="" fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105" sizes="33vw" /><div className="absolute inset-0 bg-black/25" /><span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]"><Play className="ml-1 h-5 w-5" /></span><span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">Archive coming soon</span></div><div className="p-6"><h3 className="text-2xl font-bold">{slot.title}</h3><p className="mt-3 leading-relaxed text-white/60">{slot.copy}</p></div></article></Reveal>)}</div></SectionShell>
      <SectionShell tone="light"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><Reveal><Presentation className="h-9 w-9 text-[color:var(--vil-gold-dim)]" /><p className="viiv-kicker mt-8">Launched products</p><h2 className="viiv-section-title mt-4">A growing catalogue of ventures.</h2><p className="mt-6 text-lg leading-relaxed text-[color:var(--text-muted)]">Verified student products, customer evidence, launch stories, and outcomes will be added here as each cohort publishes its work.</p><div className="mt-7 inline-flex rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--text-muted)]">Product catalogue coming soon</div></Reveal><Reveal delay={0.08}><div className="relative h-[31rem] overflow-hidden rounded-[2rem]"><Image src="/photos/059A3364.jpg" alt="A practical venture-building session at VIIV" fill className="object-cover" sizes="55vw" /><div className="absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)]/80 via-transparent to-transparent" /><p className="absolute bottom-6 left-6 max-w-md text-2xl font-bold text-white">Built in the studio. Tested in the market. Presented with proof.</p></div></Reveal></div></SectionShell>
      <SectionShell tone="gold" compact><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="viiv-kicker">The final journey</p><h2 className="mt-3 text-3xl font-bold text-[color:var(--vil-navy)]">See what students bring to graduation.</h2></div><Link href="/program/graduation-and-demo-day" className="btn-primary">Explore Demo Day outcomes <ArrowRight className="h-4 w-4" /></Link></div></SectionShell>
    </>
  );
}
