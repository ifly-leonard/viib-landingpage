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

const highlightClasses =
  "inline-flex items-center bg-[color:var(--vil-gold)] text-white";

/**
 * Rotating admissions taglines — solid gold block with white text and
 * squared corners, using the same character-by-character text effect as
 * the announcement bar.
 *   <AdmissionsTaglines />
 */
export function AdmissionsTaglines({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
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
    <div className={cn("flex flex-col items-center", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: ROTATE_EASE }}
          className={cn(highlightClasses, "px-6 py-3")}
        >
          <TextAnimate
            key={`text-${index}`}
            as="span"
            by="character"
            duration={0.9}
            startOnView={false}
            className={cn(
              "text-center font-display font-bold uppercase tracking-[0.14em]",
              size === "sm" && "text-xs sm:text-sm",
              size === "md" && "text-sm sm:text-base",
              size === "lg" && "text-base sm:text-lg",
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
 * Morphing variant — solid gold block with white text and squared
 * corners, swapping between the taglines with a blur-morph effect.
 *   <AdmissionsTaglinesMorphing />
 */
export function AdmissionsTaglinesMorphing({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn(highlightClasses, "max-w-full px-6 py-3", className)}>
      <MorphingText
        texts={[...admissionsTaglines]}
        className="h-8 w-full !max-w-3xl text-sm font-bold uppercase tracking-[0.14em] sm:text-base md:h-10"
      />
    </div>
  );
}
