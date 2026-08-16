"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { MorphingText } from "@/components/ui/morphing-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";

export const admissionsTaglines = [
  "No Entrance Exam",
  "Only 30 Seats Left at the Chennai Campus",
  "Up to 50% Scholarship for Eligible Students",
] as const;

const TAGLINE_DURATION = 2.2; // seconds each tagline is on screen
const ROTATE_EASE = [0.16, 1, 0.3, 1] as const;

type TaglineTone = "light" | "dark";

/**
 * Rotating admissions taglines — uses the same character-by-character
 * text effect as the announcement bar. Add to any page with:
 *   <AdmissionsTaglines tone="dark" />
 * `tone` picks the text color for light or dark backgrounds.
 */
export function AdmissionsTaglines({
  className,
  size = "md",
  tone = "light",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: TaglineTone;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % admissionsTaglines.length),
      TAGLINE_DURATION * 1000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: ROTATE_EASE }}
        >
          <TextAnimate
            key={`text-${index}`}
            as="span"
            by="character"
            duration={0.9}
            startOnView={false}
            className={cn(
              "text-center font-display font-bold",
              tone === "dark"
                ? "text-[color:var(--vil-ivory)]"
                : "text-[color:var(--vil-navy)]",
              size === "sm" && "text-lg sm:text-xl",
              size === "md" && "text-xl sm:text-2xl",
              size === "lg" && "text-2xl sm:text-3xl",
            )}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
              exit: { opacity: 0 },
            }}
          >
            {admissionsTaglines[index]}
          </TextAnimate>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * Morphing variant — swaps between the taglines with a blur-morph effect.
 *   <AdmissionsTaglinesMorphing tone="dark" />
 */
export function AdmissionsTaglinesMorphing({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: TaglineTone;
}) {
  return (
    <MorphingText
      texts={[...admissionsTaglines]}
      className={cn(
        "h-24 w-full max-w-none !max-w-3xl text-xl md:h-28 md:text-2xl lg:text-3xl",
        tone === "dark"
          ? "text-[color:var(--vil-ivory)]"
          : "text-[color:var(--vil-navy)]",
        className,
      )}
    />
  );
}
