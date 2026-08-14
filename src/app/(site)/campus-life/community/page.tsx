import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, HeartHandshake, Lightbulb, MessageCircle, Radio, Rocket, Users, Wallet } from "lucide-react";

import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { MentorsGrid } from "@/components/viiv/MentorsSectionVelocityScroll";
import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { communityLayers } from "@/content/campusLife";

const practices = [
  { icon: MessageCircle, title: "Honest feedback", copy: "Critique the work directly, protect the person, and leave every review with a useful next step." },
  { icon: HeartHandshake, title: "Shared accountability", copy: "Make commitments visible, communicate early, and help the team finish what it starts." },
  { icon: Radio, title: "Build in public", copy: "Share progress, evidence, uncertainty, and lessons so the whole community can learn faster." },
  { icon: Users, title: "Give back", copy: "Senior builders mentor, facilitate founder circles, and pass practical knowledge to the next cohort." },
];

const stats = [
  { value: "100+", label: "Industry mentors" },
  { value: "IIT & IIM", label: "Alumni in the network" },
  { value: "Microsoft", label: "& global tech companies" },
];

const journey = [
  { icon: Lightbulb, title: "Validate the idea", copy: "Pressure-test your instinct with founders who have taken ideas from zero to market — before you invest months building the wrong thing." },
  { icon: Rocket, title: "Build the MVP", copy: "Get hands-on guidance on scope, architecture, and speed. Ship a first version that real users can react to, not a perfect one that never launches." },
  { icon: Wallet, title: "Find product-market fit", copy: "Learn how to read early signals, iterate on feedback, and find the wedge that makes customers come back and tell others." },
  { icon: GraduationCap, title: "Pitch & navigate careers", copy: "Practice telling your story to investors, prepare for placements and internships, and make confident calls about your next move." },
];

export default function CommunityPage() {
  return (
    <>
      <CampusEditorialHero eyebrow="The VIIV Mentor Network" title="Learn from those who've been there. Build with those who've done it." description="At VIIV, learning goes beyond classrooms. Students gain access to a growing network of 100+ mentors from IITs, IIMs, leading startups, global technology companies such as Microsoft, and the wider entrepreneurial ecosystem." image="/photos/059A3259.jpg" cta={{ label: "Meet the mentors", href: "#mentors" }} />

      {/* By the numbers */}
      <SectionShell tone="dark" compact>
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/7 px-6 py-7 text-center">
                <p className="text-3xl font-bold tracking-tight text-[color:var(--vil-gold)]">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Mentor journey */}
      <SectionShell tone="light">
        <Reveal>
          <p className="viiv-kicker">Mentors at every stage</p>
          <h2 className="viiv-section-title mt-4">From validating an idea to pitching to investors.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--text-muted)]">
            Our mentors bring real-world experience into every stage of the student journey — so you&apos;re never guessing at the next step.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {journey.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[2rem] border border-[color:var(--border)] bg-white p-6 transition hover:border-[color:var(--vil-gold)]/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">Step 0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-bold text-[color:var(--vil-navy)]">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-[color:var(--text-muted)]">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Mentors grid */}
      <section id="mentors" className="relative overflow-hidden bg-[color:var(--vil-surface)]">
        <div className="viiv-container py-20 md:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
              <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
              The people in the room
            </p>
          </Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-[color:var(--vil-navy)]">
                Startup founders. Business leaders. Investors. Global tech professionals.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/about" className="btn-secondary">View all mentors <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
        </div>
        <MentorsGrid />
      </section>

      {/* Who is in the room */}
      <SectionShell tone="light">
        <Reveal>
          <p className="viiv-kicker">Who is in the room</p>
          <h2 className="viiv-section-title mt-4">Different experience. Shared builder mindset.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {communityLayers.map((layer, index) => (
            <Reveal key={layer.title} delay={index * 0.06}>
              <article className="group grid h-full overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white sm:grid-cols-[0.8fr_1.2fr]">
                <div className="relative min-h-56 overflow-hidden">
                  <Image src={layer.image} alt={layer.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-[color:var(--vil-gold-dim)]">0{index + 1}</p>
                  <h3 className="mt-4 text-3xl font-bold text-[color:var(--vil-navy)]">{layer.title}</h3>
                  <p className="mt-4 leading-relaxed text-[color:var(--text-muted)]">{layer.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Culture */}
      <SectionShell tone="dark">
        <Reveal>
          <p className="viiv-kicker text-[color:var(--vil-gold)]">How we work together</p>
          <h2 className="viiv-section-title mt-4 text-white">The culture is something everyone practises.</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {practices.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/7 p-6">
                <item.icon className="h-6 w-6 text-[color:var(--vil-gold)]" />
                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-white/60">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="gold" compact>
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="viiv-kicker">Join the room</p>
            <h2 className="mt-3 text-3xl font-bold text-[color:var(--vil-navy)]">Visit campus and meet the community.</h2>
          </div>
          <Link href="/campus-life/book-a-tour" className="btn-primary">Book a tour <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </SectionShell>
    </>
  );
}
