"use client";

import { useState } from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { CtaButton } from "@/components/viiv/CtaButton";
import { Reveal } from "@/components/viiv/motion";
import mentorsData from "@/content/mentors.json";

type Mentor = {
  name: string;
  company: string;
  title: string;
  linkedin: string;
  photo_url: string;
  company_logo_url: string;
};

const MENTORS: Mentor[] = mentorsData;
const CARD_BG = "#282629";

function MentorCardPortrait({ mentor }: { mentor: Mentor }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[86%]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mentor.photo_url}
        alt=""
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[102%] w-[112%] max-w-none -translate-x-1/2 object-contain object-bottom"
        style={{
          filter: "contrast(1.08) brightness(1.04)",
          WebkitMaskImage:
            "linear-gradient(to top, #000 0%, #000 72%, rgba(0,0,0,0.55) 86%, transparent 100%)",
          maskImage:
            "linear-gradient(to top, #000 0%, #000 72%, rgba(0,0,0,0.55) 86%, transparent 100%)",
        }}
      />
    </div>
  );
}

function MentorCompanyMark({ mentor }: { mentor: Mentor }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = Boolean(mentor.company_logo_url) && !logoFailed;

  return (
    <div className="mt-2 flex min-w-0 items-center gap-2">
      {showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={mentor.company_logo_url}
          alt=""
          aria-hidden
          onError={() => setLogoFailed(true)}
          className="h-6 w-6 shrink-0 object-contain opacity-95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
        />
      ) : null}
      <p className="min-w-0 truncate text-xs font-semibold tracking-wide text-[color:var(--vil-ivory)]/80">
        {mentor.company}
      </p>
    </div>
  );
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div
      className="group relative mx-2 rounded-2xl flex h-[22rem] w-[15rem] shrink-0 select-none flex-col overflow-hidden p-5 text-left text-[color:var(--vil-ivory)] shadow-[0_18px_40px_-24px_rgba(40,38,41,0.55)]"
      style={{ backgroundColor: CARD_BG }}
    >
      {/* shine sweep on hover */}
      <span className="pointer-events-none absolute inset-0 z-[1] -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo_main_white.png"
        alt=""
        className="relative z-[5] mx-auto h-7 w-auto shrink-0 object-contain opacity-90"
      />

      <MentorCardPortrait mentor={mentor} />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-40"
        style={{
          background: `linear-gradient(to top, ${CARD_BG} 0%, ${CARD_BG}cc 38%, ${CARD_BG}66 68%, transparent 100%)`,
        }}
      />

      <div className="relative z-[5] mt-auto flex items-end justify-between gap-3 pr-11">
        <div className="min-w-0">
          <p className="truncate text-lg font-bold tracking-tight text-[color:var(--vil-ivory)]">
            {mentor.name}
          </p>
          <p className="mt-0.5 truncate text-xs font-medium text-[color:var(--vil-ivory)]/70">
            {mentor.title}
          </p>
          <MentorCompanyMark mentor={mentor} />
        </div>
      </div>
    </div>
  );
}

function Row({ mentors }: { mentors: readonly Mentor[] }) {
  return (
    <div className="flex items-center">
      {mentors.map((mentor, i) => (
        <MentorCard key={`${mentor.name}-${i}`} mentor={mentor} />
      ))}
    </div>
  );
}

/** Animated mentor card grid (two counter-scrolling velocity rows). */
export function MentorsGrid() {
  const firstRow = MENTORS.slice(0, Math.ceil(MENTORS.length / 2));
  const secondRow = MENTORS.slice(Math.ceil(MENTORS.length / 2));

  return (
    <div className="space-y-4">
      <ScrollVelocityContainer>
        <ScrollVelocityRow baseVelocity={2.5} direction={1}>
          <Row mentors={firstRow} />
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <ScrollVelocityContainer>
        <ScrollVelocityRow baseVelocity={2.5} direction={-1}>
          <Row mentors={secondRow} />
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}

export function MentorsSectionVelocityScroll() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-surface)]">
      <div className="viiv-container py-20 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
            <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
            50+ industry practitioners
          </p>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-2xl text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-[color:var(--vil-navy)]">
              Learn from people who&apos;ve done it before
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <CtaButton href="/about" variant="outline">
              View all mentors
            </CtaButton>
          </Reveal>
        </div>
      </div>

      <MentorsGrid />
    </section>
  );
}
