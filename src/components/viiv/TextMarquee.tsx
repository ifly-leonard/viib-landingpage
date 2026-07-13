"use client";

import ScrollVelocity from "@/components/ui/scroll-velocity";

export function TextMarquee({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div className={`overflow-hidden border-y border-[color:var(--vil-gold)]/20 bg-[color:var(--vil-navy)] py-5 ${className}`}>
      <ScrollVelocity
        texts={items.map((item) => (
          <span
            key={item}
            className="mx-8 font-display text-xl font-semibold italic uppercase tracking-wide text-[color:var(--vil-ivory)] md:text-3xl"
          >
            {item}
          </span>
        ))}
        velocity={4}
        damping={40}
        stiffness={280}
        className="text-[color:var(--vil-ivory)]"
      />
    </div>
  );
}
