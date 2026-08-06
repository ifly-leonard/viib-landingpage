import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, MessageCircle, Radio, Users } from "lucide-react";

import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { communityLayers } from "@/content/campusLife";

const practices = [
  { icon: MessageCircle, title: "Honest feedback", copy: "Critique the work directly, protect the person, and leave every review with a useful next step." },
  { icon: HeartHandshake, title: "Shared accountability", copy: "Make commitments visible, communicate early, and help the team finish what it starts." },
  { icon: Radio, title: "Build in public", copy: "Share progress, evidence, uncertainty, and lessons so the whole community can learn faster." },
  { icon: Users, title: "Give back", copy: "Senior builders mentor, facilitate founder circles, and pass practical knowledge to the next cohort." },
];

export default function CommunityPage() {
  return (
    <>
      <CampusEditorialHero eyebrow="The VIIV community" title="Nobody builds alone." description="A community of ambitious students, generous peers, experienced mentors, and people from the startup ecosystem—connected by the work." image="/photos/059A3259.jpg" cta={{ label: "Meet the mentors", href: "/#mentors" }} />
      <SectionShell tone="light"><Reveal><p className="viiv-kicker">Who is in the room</p><h2 className="viiv-section-title mt-4">Different experience. Shared builder mindset.</h2></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2">{communityLayers.map((layer, index) => <Reveal key={layer.title} delay={index * 0.06}><article className="group grid h-full overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white sm:grid-cols-[0.8fr_1.2fr]"><div className="relative min-h-56 overflow-hidden"><Image src={layer.image} alt={layer.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 25vw" /></div><div className="p-6 md:p-8"><p className="text-xs font-bold uppercase tracking-[0.17em] text-[color:var(--vil-gold-dim)]">0{index + 1}</p><h3 className="mt-4 text-3xl font-bold text-[color:var(--vil-navy)]">{layer.title}</h3><p className="mt-4 leading-relaxed text-[color:var(--text-muted)]">{layer.copy}</p></div></article></Reveal>)}</div></SectionShell>
      <SectionShell tone="dark"><Reveal><p className="viiv-kicker text-[color:var(--vil-gold)]">How we work together</p><h2 className="viiv-section-title mt-4 text-white">The culture is something everyone practises.</h2></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{practices.map((item, index) => <Reveal key={item.title} delay={index * 0.05}><div className="h-full rounded-[2rem] border border-white/10 bg-white/7 p-6"><item.icon className="h-6 w-6 text-[color:var(--vil-gold)]" /><h3 className="mt-8 text-2xl font-bold">{item.title}</h3><p className="mt-4 leading-relaxed text-white/60">{item.copy}</p></div></Reveal>)}</div></SectionShell>
      <SectionShell tone="gold" compact><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="viiv-kicker">Join the room</p><h2 className="mt-3 text-3xl font-bold text-[color:var(--vil-navy)]">Visit campus and meet the community.</h2></div><Link href="/campus-life/book-a-tour" className="btn-primary">Book a tour <ArrowRight className="h-4 w-4" /></Link></div></SectionShell>
    </>
  );
}
