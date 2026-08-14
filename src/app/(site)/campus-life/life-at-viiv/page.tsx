import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Music, Presentation, Trophy, Users, Wrench } from "lucide-react";

import { CampusEditorialHero } from "@/components/viiv/campus-life/CampusEditorialHero";
import { CampusMasonryGallery } from "@/components/viiv/campus-life/CampusMasonryGallery";
import { EveningSpotsOrbit } from "@/components/viiv/EveningSpotsOrbit";
import { Reveal } from "@/components/viiv/motion";
import { SectionShell } from "@/components/viiv/SectionShell";
import { campusRhythm, lifeAtViivPhotos } from "@/content/campusLife";

const icons = [MessageSquare, Wrench, Users, Presentation];

export default function LifeAtViivPage() {
  return (
    <>
      <CampusEditorialHero eyebrow="Life at VIIV" title="College, in builder mode." description="A full-time campus rhythm shaped by questions, studio work, customer conversations, mentor feedback, and the energy of making something real." image="/photos/early-campus/branding_session_lecture_lab.png" cta={{ label: "Book a campus visit", href: "/campus-life/book-a-tour" }} />

      {/* Sports, Dance & Wellness */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-3xl">
              <p className="viiv-kicker">Life at VIIV</p>
              <h2 className="viiv-section-title mt-4">Build. Move. Create. Thrive.</h2>
              <p className="mt-5 text-lg leading-relaxed text-[color:var(--text-muted)]">
                At VIIV, learning goes beyond classrooms and venture building. We believe the best founders, creators and professionals are shaped not only by what they learn, but also by how they collaborate, compete, express themselves and take care of their wellbeing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--text-muted)]">
                That&apos;s why Life at VIIV brings together Sports, Dance &amp; Wellness through partnerships with professional organisations.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Sports */}
            <Reveal delay={0.06}>
              <article className="h-full overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white shadow-[0_24px_60px_-40px_rgba(31,49,73,0.3)]">
                <div className="flex h-48 items-center justify-center overflow-hidden bg-[color:var(--vil-navy)] sm:h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/life-at-viiv/football_turf.png"
                    alt="Sports at VIIV"
                    className="h-full w-full object-cover opacity-80"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                      <Trophy className="h-5 w-5" />
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[color:var(--vil-navy)]">Sports @ VIIV</h3>
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--vil-gold-dim)]">
                    In Collaboration with Riane Sports Centre
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    VIIV has partnered with Riane Sports Centre to give students access to structured sports, fitness and recreational experiences.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    Through sports, students develop discipline, resilience, teamwork, leadership and a competitive spirit — qualities that extend far beyond the playing field.
                  </p>
                  <p className="mt-5 font-serif text-lg font-semibold italic text-[color:var(--vil-navy)]">
                    Play. Compete. Collaborate. Grow.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Dance & Wellness */}
            <Reveal delay={0.1}>
              <article className="h-full overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-white shadow-[0_24px_60px_-40px_rgba(31,49,73,0.3)]">
                <div className="flex h-48 items-center justify-center overflow-hidden bg-[color:var(--vil-navy)] sm:h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/life-at-viiv/dance_studio_with_people.png"
                    alt="Dance & Wellness at VIIV"
                    className="h-full w-full object-cover opacity-80"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]">
                      <Music className="h-5 w-5" />
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[color:var(--vil-navy)]">Dance &amp; Wellness @ VIIV</h3>
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--vil-gold-dim)]">
                    In Collaboration with Ecstatic Studio of Dance
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    VIIV has partnered with Ecstatic Studio of Dance to bring movement, dance, creative expression and wellness into the student experience.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                    Students get opportunities to explore dance, stay active, build confidence, express themselves and recharge alongside their academic and venture-building journey.
                  </p>
                  <p className="mt-5 font-serif text-lg font-semibold italic text-[color:var(--vil-navy)]">
                    Move. Express. Energise. Belong.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="light">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal><p className="viiv-kicker">The everyday experience</p><h2 className="viiv-section-title mt-4">Not every day looks the same. Every day moves the work forward.</h2><p className="mt-6 text-lg leading-relaxed text-[color:var(--text-muted)]">Students move between structured learning, focused studio time, field research, peer collaboration, and live reviews. The campus is designed to make progress visible and participation unavoidable.</p></Reveal>
          <Reveal delay={0.08}><div className="grid h-[32rem] grid-cols-5 grid-rows-5 gap-3"><div className="relative col-span-3 row-span-5 overflow-hidden rounded-[2rem]"><Image src="/photos/early-campus/hackathon.png" alt="Builders collaborating during studio time" fill className="object-cover" sizes="35vw" /></div><div className="relative col-span-2 row-span-3 overflow-hidden rounded-[2rem]"><Image src="/photos/early-campus/lecture_lab.png" alt="A live learning session" fill className="object-cover" sizes="25vw" /></div><div className="relative col-span-2 row-span-2 overflow-hidden rounded-[2rem]"><Image src="/photos/early-campus/cafeteria_hackathon.png" alt="A learner celebrating a milestone" fill className="object-cover" sizes="25vw" /></div></div></Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="dark">
        <Reveal><p className="viiv-kicker text-[color:var(--vil-gold)]">A builder cycle</p><h2 className="viiv-section-title mt-4 text-white">Learn a little. Build a little. Show it. Begin again.</h2></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{campusRhythm.map((item, index) => { const Icon = icons[index]; return <Reveal key={item.time} delay={index * 0.06}><article className="h-full rounded-[2rem] border border-white/10 bg-white/7 p-6"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]"><Icon className="h-5 w-5" /></div><p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold)]">{item.time}</p><h3 className="mt-3 text-2xl font-bold">{item.title}</h3><p className="mt-4 leading-relaxed text-white/60">{item.copy}</p></article></Reveal>; })}</div>
      </SectionShell>

      {/* Life around campus */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="viiv-kicker">Life around campus</p>
                <h2 className="viiv-section-title mt-4">Evening Hangouts & Recreation</h2>
                <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
                  Classes wrap up. Game on. Here&apos;s how VIIV students unwind within minutes of the campus gate.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <EveningSpotsOrbit />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[color:var(--text-muted)]">
              From the Marina Mall to Kovalam Beach — every spot above is a short ride from the VIIV campus. Tap the centre to explore the full location guide.
            </p>
          </Reveal>
        </div>
      </SectionShell>

      {/* Campus life gallery */}
      <SectionShell tone="light">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div>
              <p className="viiv-kicker">Around the campus</p>
              <h2 className="viiv-section-title mt-4">Life at VIIV, in pictures.</h2>
              <p className="mt-4 max-w-2xl text-[color:var(--text-muted)]">
                Studios, courts, stages, and stays — the spaces where builders live, train, and unwind.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10">
              <CampusMasonryGallery photos={lifeAtViivPhotos} />
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="gold" compact><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="viiv-kicker">See it for yourself</p><h2 className="mt-3 text-3xl font-bold text-[color:var(--vil-navy)] md:text-4xl">Walk the campus. Meet the people. Feel the rhythm.</h2></div><Link href="/campus-life/gallery" className="btn-primary">Open the gallery <ArrowRight className="h-4 w-4" /></Link></div></SectionShell>
    </>
  );
}
