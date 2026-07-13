import { cn } from "@/lib/utils";

import { GridBackground } from "./GridBackground";

export function SectionShell({
  children,
  tone = "light",
  className,
  id,
  compact = false,
  showGrid = false,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark" | "gold";
  className?: string;
  id?: string;
  compact?: boolean;
  showGrid?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        compact ? "py-16 md:py-20" : "py-20 md:py-28",
        tone === "light" && "bg-[color:var(--vil-ivory)] text-[color:var(--text-main)]",
        tone === "dark" && "bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]",
        tone === "gold" && "bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]",
        className,
      )}
    >
      {showGrid ? <GridBackground tone={tone === "gold" ? "gold" : tone} /> : null}
      <div className="viiv-container relative z-10">{children}</div>
    </section>
  );
}
