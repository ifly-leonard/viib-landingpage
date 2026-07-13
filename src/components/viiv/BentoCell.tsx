"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

type Span = "1x1" | "2x1" | "1x2" | "2x2" | "3x1" | "1x3";

const spanClasses: Record<Span, string> = {
  "1x1": "",
  "2x1": "md:col-span-2",
  "1x2": "md:row-span-2",
  "2x2": "md:col-span-2 md:row-span-2",
  "3x1": "md:col-span-3",
  "1x3": "md:row-span-3",
};

export function BentoCell({
  children,
  className,
  span = "1x1",
  tone = "light",
  parallax = false,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  span?: Span;
  tone?: "light" | "dark" | "gold" | "glass";
  parallax?: boolean;
  hover?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 22 });
  const sy = useSpring(y, { stiffness: 260, damping: 22 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], parallax && !reduce ? [24, -24] : [0, 0]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !hover || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.035);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.035);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const motionStyle =
    parallax && !reduce
      ? { y: scrollY, x: sx }
      : hover && !reduce
        ? { x: sx, y: sy }
        : undefined;

  return (
    <motion.div
      ref={ref}
      style={motionStyle}
      onMouseMove={hover ? handleMove : undefined}
      onMouseLeave={hover ? reset : undefined}
      whileHover={hover && !reduce ? { scale: 1.015 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "viiv-bento-cell",
        tone === "light" && "viiv-bento-cell--light",
        tone === "dark" && "viiv-bento-cell--dark",
        tone === "gold" && "viiv-bento-cell--gold",
        tone === "glass" && "viiv-bento-cell--glass",
        hover && "viiv-bento-cell--hover",
        spanClasses[span],
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
