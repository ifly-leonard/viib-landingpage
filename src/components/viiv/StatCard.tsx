import { cn } from "@/lib/utils";

export function StatCard({
  value,
  label,
  detail,
  className,
  dark = false,
}: {
  value: string;
  label: string;
  detail: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <article
      className={cn(
        "viiv-big-card flex min-h-[220px] flex-col justify-between p-6 md:p-8",
        dark
          ? "border-[color:var(--vil-gold)]/25 bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]"
          : "",
        className,
      )}
    >
      <p className="font-display text-5xl font-semibold tracking-tight md:text-6xl">{value}</p>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold)]">
          {label}
        </p>
        <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-[color:var(--vil-ivory)]/75" : "text-[color:var(--text-muted)]")}>
          {detail}
        </p>
      </div>
    </article>
  );
}
