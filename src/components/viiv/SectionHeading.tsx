import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  headline,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="viiv-eyebrow">{eyebrow}</p> : null}
      <h2 className="viiv-heading mt-4 text-balance">{headline}</h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-[color:var(--text-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
