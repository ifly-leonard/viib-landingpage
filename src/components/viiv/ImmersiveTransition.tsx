"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { DifferenceMessage } from "@/components/viiv/DifferenceCard";

/**
 * Immersive scroll transition (inspired by CodyHouse's immersive section
 * transition): a media panel pins to the viewport and scales up from a
 * contained, rounded card into a full-bleed panel, after which the following
 * content scrolls up over it.
 */
export function ImmersiveTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.82, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.5], ["44px", "0px"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0.1, 0.28], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.32, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.32, 0.5], [40, 0]);

  if (reduce) {
    return (
      <>
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[color:var(--vil-navy)] py-24">
          <DifferenceMessage />
        </section>
        {children}
      </>
    );
  }

  return (
    <div className="relative">
      <div ref={trackRef} className="relative h-[180vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-[color:var(--vil-ivory)]">
          <motion.div
            style={{ scale, borderRadius: radius }}
            className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)] shadow-[0_60px_140px_-50px_rgba(31,49,73,0.65)] will-change-transform"
          >
            <motion.div
              aria-hidden
              style={{ opacity: glowOpacity }}
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--vil-gold)_18%,transparent),transparent_55%)]" />
            </motion.div>

            <div className="relative z-10 w-full">
              <DifferenceMessage
                logoOpacity={logoOpacity}
                textOpacity={textOpacity}
                textY={textY}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 -mt-[30vh]">{children}</div>
    </div>
  );
}
