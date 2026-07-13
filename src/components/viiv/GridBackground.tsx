import { cn } from "@/lib/utils";

type GridTone = "light" | "dark" | "gold";

export function GridBackground({
  tone = "light",
  className,
}: {
  tone?: GridTone;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        tone === "light" && "viiv-grid-bg-light",
        tone === "dark" && "viiv-grid-bg-dark",
        tone === "gold" && "viiv-grid-bg-gold",
        className,
      )}
    />
  );
}
