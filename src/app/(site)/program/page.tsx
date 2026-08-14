import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";
import { JourneyMap } from "@/components/viiv/JourneyMap";
import { SectionShell } from "@/components/viiv/SectionShell";
import { ApplyButton } from "@/components/viiv/SiteShell";
import { graduateWith, programPaths } from "@/content/programPaths";

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
                A three-year, challenge-based venture-building journey at VIIV, pursued alongside a UGC-recognised Online BBA—designed to transform students from learners into builders, builders into entrepreneurs, and entrepreneurs into future-ready leaders.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ApplyButton className="!bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]" />
                <a href="#journey" className="btn-secondary !border-white/25 !text-white">See the three years <ArrowRight className="h-4 w-4" /></a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid h-[29rem] grid-cols-7 grid-rows-6 gap-3 md:h-[36rem]">
                <div className="relative col-span-4 row-span-6 overflow-hidden rounded-[2rem]"><Image src="/photos/early-campus/lecture_lab.png" alt="A live founder learning session at VIIV" fill priority className="object-cover" sizes="(max-width: 1024px) 58vw, 34vw" /></div>
                <div className="relative col-span-3 row-span-3 overflow-hidden rounded-[2rem]"><Image src="/photos/early-campus/hackathon.png" alt="Builders collaborating on campus" fill className="object-cover" sizes="(max-width: 1024px) 42vw, 26vw" /></div>
                <div className="relative col-span-3 row-span-3 overflow-hidden rounded-[2rem]"><Image src="/photos/early-campus/branding_session_lecture_lab.png" alt="The VIIV builder community" fill className="object-cover" sizes="(max-width: 1024px) 42vw, 26vw" /></div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <SectionShell tone="light">
        <Reveal>
          <p className="viiv-kicker">The roadmap</p>
          <h2 className="viiv-section-title mt-4 max-w-3xl">The 3-Year Journey at a Glance</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--text-muted)]">Scroll through the path — each year takes you from foundations to venture to launch.</p>
        </Reveal>
        <div className="mt-16 md:mt-20">
          <JourneyMap />
        </div>
      </SectionShell>

      <SectionShell id="journey" tone="light">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="viiv-kicker">Choose your path</p>
            <h2 className="viiv-section-title mt-4">Choose Your Path. Go All In.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[color:var(--text-muted)]">
              By Year 3, VIIV students have different strengths, different interests and different goals — so the program stops being one-size-fits-all. You&apos;ll choose the path that fits you and spend the year going deep, with structured mentorship and an incubation environment behind you.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--text-muted)]">
              Choosing a path in Year 3 doesn&apos;t mean the other doors close. Many VIIV students carry pieces of all three into life after graduation — a founder with a personal brand, a creator who freelances, a working professional who keeps building side projects.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {programPaths.map((path) => {
                const Icon = path.icon;
                return (
                  <article key={path.id} className="group flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-5 transition hover:border-[color:var(--vil-gold)]/60 hover:shadow-[0_18px_50px_-30px_rgba(31,49,73,0.5)]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]"><Icon className="h-6 w-6" /></span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--vil-navy)]">{path.title}</p>
                      <p className="mt-0.5 text-sm text-[color:var(--text-muted)]">{path.subtitle}</p>
                      <p className="mt-1.5 text-xs font-semibold text-[color:var(--vil-gold-dim)]">{path.highlight}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="light">
        <div className="grid gap-6 lg:grid-cols-3">
          {programPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Reveal key={path.id} delay={index * 0.07}>
                <article className="flex h-full flex-col rounded-[2rem] border border-[color:var(--border)] bg-white p-7 transition hover:-translate-y-1 hover:border-[color:var(--vil-gold)]/60 md:p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]"><Icon className="h-7 w-7" /></span>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold-dim)]">Path 0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[color:var(--vil-navy)]">{path.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[color:var(--vil-gold-dim)]">{path.subtitle}</p>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--text-soft)]">{path.experienceTitle}</p>
                  <ul className="mt-3 space-y-2.5">
                    {path.experience.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--text-muted)]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--vil-gold-dim)]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-[color:var(--border)] pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--vil-gold-dim)]">{path.endTitle}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--vil-navy)]">{path.end}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell tone="light">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_24px_60px_-24px_rgba(31,49,73,0.4)] md:h-64 md:w-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder/khushbu-ranjan.png"
                  alt="Khushbu Ranjan"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-5 text-sm font-semibold text-[color:var(--vil-navy)]">
                Khushbu Ranjan
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-soft)]">
                Head of Placements
              </p>

              <p className="mt-4 text-sm font-medium text-[color:var(--text-muted)]">
                8+ Years of Corporate Hiring &amp; Talent Acquisition Experience
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
                <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
                Hear from our Head of Placements
              </p>
              <div className="mt-8 space-y-6 text-base leading-[1.8] text-[color:var(--text-muted)] md:text-lg">
                <p>
                  Having spent 8+ years in corporate hiring and talent acquisition, I have interviewed, evaluated, and worked with professionals across different roles and organisations. One thing is clear — <strong className="font-semibold text-[color:var(--vil-navy)]">employers hire for capability, not credentials alone.</strong>
                </p>
                <p>
                  The strongest candidates are those who can demonstrate what they know through projects, internships, problem-solving ability, communication, initiative, and measurable work.
                </p>
                <p>
                  This is the career advantage we want every VIIV student to develop.
                </p>
                <p>
                  From the early stages of the program, students begin creating a professional portfolio and proof of work that reflects their abilities. They gain exposure to internships, startup environments, industry mentors, hiring professionals, career pathways, interview preparation, and opportunities across our growing network.
                </p>
                <p>
                  Our focus is not limited to securing a student&apos;s first job after graduation. We want them to develop the career confidence, professional network, and practical experience required to navigate opportunities throughout their working lives.
                </p>
                <p>
                  Whether they pursue high-growth startups, Founder&apos;s Office roles, sales, growth, product, operations, AI-led roles, creator careers, or entrepreneurship, our placement ecosystem will help them identify and pursue the right path.
                </p>
                <p>
                  At VIIV, career support continues beyond graduation through our mentor and industry network.
                </p>
                <p className="text-[color:var(--vil-navy)]">
                  Your first opportunity is only the beginning.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* Demo Day section — temporarily hidden. Restore when ready.
      <SectionShell tone="dark">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <GraduationCap className="mx-auto h-12 w-12 text-[color:var(--vil-gold)]" />
            <p className="viiv-kicker mt-8 text-[color:var(--vil-gold)]">{demoDay.eyebrow}</p>
            <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">{demoDay.title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{demoDay.body}</p>
            <Link href="/program/graduation-and-demo-day" className="btn-primary mt-9 !bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]">See Graduation & Demo Day <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </SectionShell>
      */}

      <SectionShell tone="gold" showGrid>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <Reveal>
            <GraduationCap className="h-10 w-10 text-[color:var(--vil-navy)]" />
            <p className="viiv-kicker mt-8">{graduateWith.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">{graduateWith.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--vil-navy)]/70">A UGC-recognised BBA degree, three years of real work, and a path you chose — all of it presented with the evidence behind it.</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {graduateWith.points.map((item, index) => (
              <Reveal key={item} delay={index * 0.035}>
                <div className="flex h-full items-start gap-3 rounded-2xl bg-[color:var(--vil-ivory)] p-4 font-semibold text-[color:var(--vil-navy)] shadow-sm">
                  <Check className="h-4 w-4 shrink-0 text-[color:var(--vil-gold-dim)]" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
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
