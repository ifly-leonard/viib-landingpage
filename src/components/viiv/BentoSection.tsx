"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.";

const LOREM_LONG = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
];

type BentoItem = {
  id: string;
  index: string;
  title: string;
  short: string;
  image: string;
  className: string;
};

const ITEMS: BentoItem[] = [
  {
    id: "bento-1",
    index: "01",
    title: "Venture Studio",
    short: LOREM_SHORT,
    image: "/cover/cover_1.png",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    id: "bento-2",
    index: "02",
    title: "Mentor Network",
    short: LOREM_SHORT,
    image: "/cover/cover_4_classroom.png",
    className: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "bento-3",
    index: "03",
    title: "Demo Days",
    short: LOREM_SHORT,
    image: "/cover/cover_3_hackathon.png",
    className: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-2",
  },
  {
    id: "bento-4",
    index: "04",
    title: "Founder Community",
    short: LOREM_SHORT,
    image: "/cover/cover_2_topview_sspdl.png",
    className: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "bento-5",
    index: "05",
    title: "Real Ventures",
    short: LOREM_SHORT,
    image: "/cover/cover_1.png",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    id: "bento-6",
    index: "06",
    title: "Recognized Degree",
    short: LOREM_SHORT,
    image: "/cover/cover_4_classroom.png",
    className: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-2",
  },
  {
    id: "bento-7",
    index: "07",
    title: "Chennai Campus",
    short: LOREM_SHORT,
    image: "/cover/cover_2_topview_sspdl.png",
    className: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: "bento-8",
    index: "08",
    title: "Career Outcomes",
    short: LOREM_SHORT,
    image: "/cover/cover_3_hackathon.png",
    className: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
  },
];

const PHOTO_MASK =
  "linear-gradient(to bottom, #000 0%, #000 18%, transparent 68%)";
const GRAIN_MASK =
  "linear-gradient(to bottom, #000 0%, #000 14%, transparent 62%)";

function CardPhoto({ image }: { image: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-2/3 w-full object-cover"
        style={{
          filter: "grayscale(1) contrast(1.35) brightness(1.02) blur(1.5px)",
          mixBlendMode: "multiply",
          opacity: 0.42,
          WebkitMaskImage: PHOTO_MASK,
          maskImage: PHOTO_MASK,
        }}
      />
      {/* ordered-dot dither grain */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--vil-navy) 72%, transparent) 0.6px, transparent 0.9px)",
          backgroundSize: "3px 3px",
          mixBlendMode: "multiply",
          opacity: 0.45,
          WebkitMaskImage: GRAIN_MASK,
          maskImage: GRAIN_MASK,
        }}
      />
    </>
  );
}

function BentoCard({
  item,
  onOpen,
}: {
  item: BentoItem;
  onOpen: (id: string) => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      layoutId={`card-${item.id}`}
      onClick={() => onOpen(item.id)}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="group relative flex h-full min-h-[9rem] w-full flex-col justify-between overflow-hidden rounded-2xl border border-[color:var(--vil-gold-dim)]/30 bg-[color:var(--vil-gold)] p-5 text-left text-[color:var(--vil-navy)] shadow-[0_16px_36px_-20px_rgba(31,49,73,0.55)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--vil-navy)] focus-visible:ring-offset-2"
    >
      <CardPhoto image={item.image} />

      {/* animated decorative blob */}
      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--vil-navy)]/10 blur-xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Number(item.index) * 0.35,
          }}
        />
      )}

      {/* shine sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

      <span className="relative text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-navy)]/55">
        {item.index}
      </span>

      <div className="relative">
        <h3 className="text-xl font-semibold leading-tight tracking-tight md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 max-w-[24ch] text-sm leading-relaxed text-[color:var(--vil-navy)]/70">
          {item.short}
        </p>
      </div>

      <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--vil-navy)] text-[color:var(--vil-gold)] transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </motion.button>
  );
}

function BentoModal({
  item,
  panelLayoutId,
  index,
  total,
  direction,
  onClose,
  onPaginate,
}: {
  item: BentoItem;
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
        className="relative z-10 flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--vil-surface)] text-[color:var(--vil-navy)] shadow-[0_40px_100px_-30px_rgba(31,49,73,0.7)]"
        transition={{ type: "spring", stiffness: 300, damping: 34 }}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={item.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            <CardPhoto image={item.image} />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--vil-navy)] text-[color:var(--vil-gold)] transition-transform hover:rotate-90"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10 flex min-h-[24rem] flex-col p-7 md:p-12">
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={item.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * offset }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -offset }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-navy)]/55">
                  {item.index}
                </span>
                <h3 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                  {item.title}
                </h3>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--vil-navy)]/80">
                  {LOREM_LONG.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* prev / next navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-[color:var(--vil-navy)]/15 pt-5">
            <button
              type="button"
              onClick={() => onPaginate(-1)}
              aria-label="Previous"
              className="group/nav flex items-center gap-2 rounded-full border border-[color:var(--vil-navy)]/20 px-4 py-2 text-sm font-semibold transition-colors hover:bg-[color:var(--vil-navy)] hover:text-[color:var(--vil-gold)]"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover/nav:-translate-x-0.5" />
              Prev
            </button>

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--vil-navy)]/55">
              {index + 1} / {total}
            </span>

            <button
              type="button"
              onClick={() => onPaginate(1)}
              aria-label="Next"
              className="group/nav flex items-center gap-2 rounded-full border border-[color:var(--vil-navy)]/20 px-4 py-2 text-sm font-semibold transition-colors hover:bg-[color:var(--vil-navy)] hover:text-[color:var(--vil-gold)]"
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

export function BentoSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const open = useCallback((id: string) => {
    const i = ITEMS.findIndex((it) => it.id === id);
    if (i < 0) return;
    setOpenId(id);
    setDirection(0);
    setActiveIndex(i);
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setActiveIndex((i) =>
      i === null ? i : (i + dir + ITEMS.length) % ITEMS.length,
    );
  }, []);

  const activeItem = activeIndex === null ? null : ITEMS[activeIndex];

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const overlay = (
    <AnimatePresence>
      {activeItem && openId && (
        <BentoModal
          item={activeItem}
          panelLayoutId={`card-${openId}`}
          index={activeIndex as number}
          total={ITEMS.length}
          direction={direction}
          onClose={close}
          onPaginate={paginate}
        />
      )}
    </AnimatePresence>
  );

  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-surface)]">
      <div
        aria-hidden
        className="viiv-dot-bg-light pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="viiv-container relative z-10 py-20 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
            <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
            What you get
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-balance text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-[color:var(--vil-navy)]">
            Everything a builder needs, in{" "}
            <span className="text-[color:var(--vil-gold-dim)]">one place.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[9rem] grid-cols-1 gap-4 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.id} delay={0.05 * i} className={item.className}>
              <BentoCard item={item} onOpen={open} />
            </Reveal>
          ))}
        </div>
      </div>

      {mounted ? createPortal(overlay, document.body) : null}
    </section>
  );
}
