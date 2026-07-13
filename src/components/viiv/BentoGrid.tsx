import { cn } from "@/lib/utils";

export function BentoGrid({
  children,
  className,
  cols = 4,
}: {
  children: React.ReactNode;
  className?: string;
  cols?: 3 | 4 | 6;
}) {
  return (
    <div
      className={cn(
        "viiv-bento-grid",
        cols === 3 && "viiv-bento-grid--3",
        cols === 4 && "viiv-bento-grid--4",
        cols === 6 && "viiv-bento-grid--6",
        className,
      )}
    >
      {children}
    </div>
  );
}
