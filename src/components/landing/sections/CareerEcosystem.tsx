"use client";

import { m, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { careerPaths } from "@/content/landing/careers";
import { media } from "@/content/landing/media";
import { cn } from "@/lib/landing/cn";
import { Photo } from "../ui/Photo";

/** Card anchor positions (percent of the stage) and parallax depth. */
const layout = [
  { x: 0, y: 8, depth: 18 },
  { x: 58, y: 0, depth: 26 },
  { x: 62, y: 34, depth: 14 },
  { x: -2, y: 46, depth: 22 },
  { x: 56, y: 70, depth: 20 },
  { x: 2, y: 82, depth: 12 },
];

function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const set = () => setFine(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return fine;
}

function FloatingCard({
  title,
  line,
  index,
  depth,
  px,
  py,
  style,
}: {
  title: string;
  line: string;
  index: number;
  depth: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
  style: React.CSSProperties;
}) {
  const x = useTransform(px, (v) => v * depth);
  const y = useTransform(py, (v) => v * depth);
  return (
    <m.li
      className="absolute w-[8rem] sm:w-[9.75rem] lg:w-[12.5rem]"
      style={{ ...style, x, y }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35 + index * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="animate-float rounded-2xl bg-white/95 p-2.5 shadow-lift ring-1 ring-line backdrop-blur-sm motion-reduce:animate-none lg:p-3.5"
        style={{ animationDelay: `${index * -1.1}s` }}
      >
        <p className="flex items-center gap-2 text-[11px] font-semibold text-ink lg:text-[13px]">
          <span aria-hidden className={cn("size-1.5 shrink-0 rounded-full lg:size-2", index % 2 ? "bg-iris" : "bg-accent")} />
          {title}
        </p>
        <p className="mt-1 text-[10px] leading-snug text-muted lg:text-xs">{line}</p>
      </div>
    </m.li>
  );
}

export function CareerEcosystem({ roles }: { roles: readonly string[] }) {
  const stage = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 60, damping: 20 });
  const py = useSpring(rawY, { stiffness: 60, damping: 20 });
  const photoX = useTransform(px, (v) => v * -8);
  const photoY = useTransform(py, (v) => v * -8);

  const cards = roles.map((title) => ({
    title,
    line: careerPaths.find((c) => c.title === title)?.short ?? "",
  }));

  useEffect(() => {
    if (!fine || reduce) return;
    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine, reduce, rawX, rawY]);

  return (
    <div className="min-w-0">
      {/* The people image with the career cards annotated around it, at every
          breakpoint (parallax only kicks in on fine pointers). */}
      <div
        ref={stage}
        className="relative mx-auto aspect-[1/1.02] w-full max-w-[21rem] sm:max-w-[28rem] lg:max-w-[36rem]"
      >
        <m.div className="absolute inset-x-[16%] inset-y-[8%] lg:inset-x-[17%] lg:inset-y-[6%]" style={{ x: photoX, y: photoY }}>
          <div className="absolute -inset-3 rounded-[2.5rem] bg-sand" aria-hidden />
          <Photo
            media={media.hero}
            priority
            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 20rem, 100vw"
            className="absolute inset-0 rounded-[2.2rem] shadow-lift"
          />
        </m.div>

        {/* Connecting paths from the graduate to each career */}
        <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
          {layout.map((p, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={p.x + (p.x > 50 ? 6 : 28)}
              y2={p.y + 5}
              stroke="var(--color-ink)"
              strokeOpacity="0.18"
              strokeWidth="1"
              strokeDasharray="3 3"
              vectorEffect="non-scaling-stroke"
              className="animate-dash motion-reduce:animate-none"
            />
          ))}
          <circle cx="50" cy="50" r="1.1" fill="var(--color-accent)" />
        </svg>

        <ul aria-label="Career paths to explore">
          {cards.map((c, i) => (
            <FloatingCard
              key={c.title}
              {...c}
              index={i}
              depth={layout[i % layout.length].depth}
              px={px}
              py={py}
              style={{ left: `${layout[i % layout.length].x}%`, top: `${layout[i % layout.length].y}%` }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
