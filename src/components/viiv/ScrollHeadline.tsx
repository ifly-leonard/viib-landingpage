"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

export function ScrollHeadline({
  lines,
  className,
  size = "hero",
}: {
  lines: readonly string[];
  className?: string;
  size?: "hero" | "section";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y0 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -36]);
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -18]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -48]);
  const shifts = [y0, y1, y2];

  return (
    <h1
      ref={ref}
      className={cn(
        size === "hero" ? "viiv-scroll-headline" : "viiv-scroll-headline viiv-scroll-headline--section",
        className,
      )}
    >
      {lines.map((line, index) => (
        <motion.span
          key={line}
          style={reduce ? undefined : { y: shifts[index] ?? y0 }}
          className={cn(
            "block w-fit",
            index === 0 && "text-[color:var(--vil-ivory)]",
            index === 1 && "text-[color:var(--vil-gold)]",
            index === 2 && "text-[color:var(--vil-blue)]",
          )}
        >
          {line}
        </motion.span>
      ))}
    </h1>
  );
}
