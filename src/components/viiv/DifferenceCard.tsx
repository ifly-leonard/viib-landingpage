"use client";

import { motion, type MotionValue } from "motion/react";

import { cn } from "@/lib/utils";

type DifferenceMessageProps = {
  logoOpacity?: MotionValue<number>;
  textOpacity?: MotionValue<number>;
  textY?: MotionValue<number>;
};

function InlineLogo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo_main_white.png"
      alt="VIIV"
      className={cn(
        "mx-1 inline-block h-[1.1em] w-auto align-[-0.1em]",
        className,
      )}
    />
  );
}

export function DifferenceMessage({
  logoOpacity,
  textOpacity,
  textY,
}: DifferenceMessageProps) {
  const animated = Boolean(logoOpacity && textOpacity);

  return (
    <div className="mx-auto w-full max-w-3xl px-6">
      <div className="relative flex min-h-[18rem] w-full items-center justify-center md:min-h-[22rem]">
        {animated ? (
          <motion.img
            src="/brand/logo_main_white.png"
            alt="VIIV"
            style={{ opacity: logoOpacity }}
            className="h-24 w-auto md:h-32"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/brand/logo_main_white.png"
            alt="VIIV"
            className="h-24 w-auto md:h-32"
          />
        )}

        {animated ? (
          <motion.p
            style={{ opacity: textOpacity, y: textY }}
            className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-2xl text-balance px-2 text-center text-[clamp(1.75rem,4.5vw,3.5rem)] font-semibold leading-[1.12] tracking-tight text-[color:var(--vil-ivory)]"
          >
            This is where VIIV puts you ahead of the{" "}
            <span className="text-[color:var(--vil-gold)]">competition.</span>
          </motion.p>
        ) : (
          <p className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-2xl text-balance px-2 text-center text-[clamp(1.75rem,4.5vw,3.5rem)] font-semibold leading-[1.12] tracking-tight text-[color:var(--vil-ivory)]">
            This is where VIIV puts you ahead of the{" "}
            <span className="text-[color:var(--vil-gold)]">competition.</span>
          </p>
        )}
      </div>
    </div>
  );
}
