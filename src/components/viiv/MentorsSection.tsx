"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Linkedin, X } from "lucide-react";

import AnimatedAvatarGroup from "@/components/smoothui/animated-avatar-group";
import { CtaButton } from "@/components/viiv/CtaButton";
import { Reveal } from "@/components/viiv/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const MENTOR_AVATAR = "/photos/mentor_avatar_1.png";

const MENTOR_SEED = [
  { topic: "Fundraising & pitch decks", name: "Arjun Mehta", company: "Sequoia Capital", companyLogo: "/companies/sequoia.png" },
  { topic: "Product-market fit", name: "Priya Nair", company: "Razorpay", companyLogo: "/companies/razorpay.png" },
  { topic: "Go-to-market strategy", name: "Karthik Rao", company: "Freshworks", companyLogo: "/companies/freshworks.png" },
  { topic: "Unit economics", name: "Meera Shah", company: "Zerodha", companyLogo: "/companies/zerodha.png" },
  { topic: "Team building", name: "Rohan Das", company: "Swiggy", companyLogo: "/companies/swiggy.png" },
  { topic: "B2B sales", name: "Ananya Iyer", company: "Salesforce", companyLogo: "/companies/salesforce.png" },
  { topic: "Brand storytelling", name: "Vikram Singh", company: "Ogilvy", companyLogo: "/companies/ogilvy.png" },
  { topic: "Legal & compliance", name: "Divya Menon", company: "Khaitan & Co", companyLogo: "/companies/khaitan.svg" },
  { topic: "Financial modeling", name: "Nikhil Verma", company: "Deloitte", companyLogo: "/companies/deloitte.png" },
  { topic: "Customer discovery", name: "Sneha Pillai", company: "Flipkart", companyLogo: "/companies/flipkart.png" },
  { topic: "MVP development", name: "Aditya Bose", company: "Zoho", companyLogo: "/companies/zoho.png" },
  { topic: "Growth marketing", name: "Lakshmi Reddy", company: "CRED", companyLogo: "/companies/cred.png" },
  { topic: "Hiring first employees", name: "Harish Kumar", company: "PhonePe", companyLogo: "/companies/phonepe.png" },
  { topic: "Investor relations", name: "Ishita Malhotra", company: "Accel", companyLogo: "/companies/accel.png" },
  { topic: "Operations scaling", name: "Suresh Patel", company: "Dunzo", companyLogo: "/companies/dunzo.svg" },
  { topic: "Pricing strategy", name: "Kavya Srinivasan", company: "Meesho", companyLogo: "/companies/meesho.png" },
  { topic: "Partnership development", name: "Manoj Gupta", company: "Paytm", companyLogo: "/companies/paytm.png" },
  { topic: "Venture capital", name: "Ritu Agarwal", company: "Blume Ventures", companyLogo: "/companies/blume.png" },
] as const;

const MENTORS = MENTOR_SEED.map((mentor, index) => ({
  id: `mentor-${index + 1}`,
  ...mentor,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  linkedin: "https://www.linkedin.com/in/example",
  avatar: MENTOR_AVATAR,
}));

type Mentor = (typeof MENTORS)[number];

const AVATARS = MENTORS.slice(0, 10).map((mentor) => ({
  id: mentor.id,
  src: mentor.avatar,
  alt: mentor.name,
}));

const CARD_GRAIN_MASK =
  "linear-gradient(to bottom, transparent 0%, transparent 24%, rgba(0,0,0,0.22) 48%, rgba(0,0,0,0.72) 72%, #000 100%)";

function MentorCardAtmosphere() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[color:var(--vil-navy)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 58% at 50% 78%, color-mix(in srgb, var(--vil-ivory) 11%, transparent), transparent 72%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--vil-ivory) 28%, transparent) 0.6px, transparent 0.9px)",
          backgroundSize: "3px 3px",
          mixBlendMode: "soft-light",
          opacity: 0.34,
          WebkitMaskImage: CARD_GRAIN_MASK,
          maskImage: CARD_GRAIN_MASK,
        }}
      />
    </>
  );
}

const PORTRAIT_GRAIN_MASK =
  "linear-gradient(to top, transparent 0%, transparent 30%, rgba(0,0,0,0.2) 52%, rgba(0,0,0,0.65) 74%, #000 100%)";

function MentorCardPortrait() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[86%]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MENTOR_AVATAR}
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
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--vil-ivory) 38%, transparent) 0.55px, transparent 0.85px)",
          backgroundSize: "2.5px 2.5px",
          mixBlendMode: "soft-light",
          opacity: 0.36,
          WebkitMaskImage: PORTRAIT_GRAIN_MASK,
          maskImage: PORTRAIT_GRAIN_MASK,
        }}
      />
    </div>
  );
}

function MentorCard({
  mentor,
  index,
  onOpen,
}: {
  mentor: Mentor;
  index: number;
  onOpen: (id: string) => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      layoutId={`mentor-card-${mentor.id}`}
      onClick={() => onOpen(mentor.id)}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="group relative flex h-[24rem] w-[15rem] shrink-0 flex-col overflow-hidden rounded-none bg-[color:var(--vil-navy)] p-5 text-left text-[color:var(--vil-ivory)] shadow-[0_18px_40px_-24px_rgba(31,49,73,0.55)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--vil-gold)] focus-visible:ring-offset-2"
    >
      <MentorCardAtmosphere />

      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 z-[1] h-32 w-32 rounded-full bg-[color:var(--vil-gold)]/8 blur-xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.35,
          }}
        />
      )}

      <span className="pointer-events-none absolute inset-0 z-[1] -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo_main_white.png"
        alt=""
        className="relative z-[5] mx-auto h-7 w-auto shrink-0 object-contain opacity-90"
      />

      <div className="pointer-events-none absolute inset-x-4 top-[3.75rem] z-[1]">
        <p
          className="font-display text-[clamp(1.45rem,4.8vw,1.95rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, color-mix(in srgb, var(--vil-ivory) 100%, white) 0%, color-mix(in srgb, var(--vil-ivory) 92%, white) 38%, color-mix(in srgb, var(--vil-ivory) 42%, var(--vil-navy)) 78%, color-mix(in srgb, var(--vil-ivory) 18%, var(--vil-navy)) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {mentor.topic}
        </p>
      </div>

      <MentorCardPortrait />

      <div className="relative z-[5] mt-auto flex items-end justify-between gap-3 pr-11">
        <div className="min-w-0">
          <p className="truncate text-lg font-bold tracking-tight text-[color:var(--vil-ivory)]">
            {mentor.name}
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mentor.companyLogo}
            alt={mentor.company}
            className="mt-1.5 h-6 w-auto max-w-[7.5rem] object-contain object-left opacity-95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>

      <span className="absolute bottom-4 right-4 z-[6] flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--vil-gold)]/55 bg-[color:var(--vil-navy)]/75 text-[color:var(--vil-ivory)] shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-sm transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </motion.button>
  );
}

function MentorModal({
  mentor,
  panelLayoutId,
  index,
  total,
  direction,
  onClose,
  onPaginate,
}: {
  mentor: Mentor;
  panelLayoutId: string;
  index: number;
  total: number;
  direction: number;
  onClose: () => void;
  onPaginate: (dir: number) => void;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onPaginate(1);
      if (e.key === "ArrowLeft") onPaginate(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPaginate]);

  const offset = reduce ? 0 : 48;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        className="absolute inset-0 bg-[color:var(--vil-navy)]/55 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        layoutId={panelLayoutId}
        className="relative z-10 flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-none bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)] shadow-[0_40px_100px_-30px_rgba(31,49,73,0.7)]"
        transition={{ type: "spring", stiffness: 300, damping: 34 }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)] transition-transform hover:rotate-90"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10 flex min-h-[24rem] flex-col p-7 md:p-12">
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={mentor.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * offset }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -offset }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/logo_main_white.png"
                  alt="VIIV"
                  className="h-10 w-auto"
                />

                <div className="mt-8 flex items-start gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="h-20 w-20 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--vil-gold)]">
                      What they teach
                    </p>
                    <h3 className="mt-2 text-2xl font-bold uppercase leading-[1.1] tracking-tight md:text-4xl">
                      {mentor.topic}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[color:var(--vil-ivory)]/85">
                      {mentor.name} · {mentor.company}
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-base leading-relaxed text-[color:var(--vil-ivory)]/80">
                  {mentor.bio}
                </p>

                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border border-[color:var(--vil-ivory)]/25 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[color:var(--vil-gold)] hover:text-[color:var(--vil-gold)]"
                >
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn profile
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[color:var(--vil-ivory)]/15 pt-5">
            <button
              type="button"
              onClick={() => onPaginate(-1)}
              aria-label="Previous"
              className="group/nav flex items-center gap-2 border border-[color:var(--vil-ivory)]/25 px-4 py-2 text-sm font-semibold transition-colors hover:border-[color:var(--vil-gold)] hover:text-[color:var(--vil-gold)]"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover/nav:-translate-x-0.5" />
              Prev
            </button>

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-ivory)]/55">
              {index + 1} / {total}
            </span>

            <button
              type="button"
              onClick={() => onPaginate(1)}
              aria-label="Next"
              className="group/nav flex items-center gap-2 border border-[color:var(--vil-ivory)]/25 px-4 py-2 text-sm font-semibold transition-colors hover:border-[color:var(--vil-gold)] hover:text-[color:var(--vil-gold)]"
            >
              Next
              <ChevronRight className="h-4 w-4 transition-transform group-hover/nav:translate-x-0.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function MentorsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const open = useCallback((id: string) => {
    const i = MENTORS.findIndex((m) => m.id === id);
    if (i < 0) return;
    setOpenId(id);
    setDirection(0);
    setActiveIndex(i);
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex((i) =>
      i === null ? i : (i + dir + MENTORS.length) % MENTORS.length,
    );
  }, []);

  const activeMentor = activeIndex === null ? null : MENTORS[activeIndex];

  const overlay = (
    <AnimatePresence>
      {activeMentor && openId && (
        <MentorModal
          mentor={activeMentor}
          panelLayoutId={`mentor-card-${openId}`}
          index={activeIndex as number}
          total={MENTORS.length}
          direction={direction}
          onClose={close}
          onPaginate={paginate}
        />
      )}
    </AnimatePresence>
  );

  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-surface)]">
      <div className="viiv-container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <p className="text-sm font-medium text-[color:var(--text-muted)]">
                50+ industry practitioners
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-5 [&_.rounded-full]:border-[color:var(--vil-surface)]">
                <AnimatedAvatarGroup
                  avatars={AVATARS}
                  maxVisible={6}
                  size={44}
                  overlap={0.35}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-8 max-w-md text-balance text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-[color:var(--vil-navy)]">
                Learn from people who&apos;ve done it before
              </h2>
              <CtaButton href="/about" variant="outline" className="mt-6">
                View all mentors
              </CtaButton>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="min-w-0">
            <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:-mr-0 lg:ml-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
              {MENTORS.map((mentor, index) => (
                <MentorCard
                  key={mentor.id}
                  mentor={mentor}
                  index={index}
                  onOpen={open}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {mounted ? createPortal(overlay, document.body) : null}
    </section>
  );
}
