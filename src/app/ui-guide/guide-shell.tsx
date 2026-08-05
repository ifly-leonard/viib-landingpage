import Link from "next/link";
import { ArrowLeft, Layers, Palette } from "lucide-react";

import { cn } from "@/lib/utils";

export function GuideShell({
  title,
  description,
  children,
  backHref = "/ui-guide/components",
  backLabel = "All components",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-[color:var(--vil-ivory)] text-[color:var(--text-main)]">
      <div className="border-b border-[color:var(--border)] bg-white">
        <div className="viiv-container flex h-16 items-center justify-between gap-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--vil-navy)] transition-colors hover:text-[color:var(--vil-gold-dim)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
          <div className="flex items-center gap-4">
            <GuideNavLink href="/ui-guide/components" icon={<Layers className="h-3.5 w-3.5" />} label="Components" />
            <GuideNavLink href="/ui-guide/page-styles/1" icon={<Palette className="h-3.5 w-3.5" />} label="Page styles" />
          </div>
        </div>
      </div>

      <div className="viiv-container py-12 md:py-16">
        <header className="max-w-3xl">
          <p className="viiv-kicker">UI Guide</p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[color:var(--vil-navy)]">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--text-muted)] md:text-lg">
            {description}
          </p>
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}

export function GuideNavLink({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
        active
          ? "text-[color:var(--vil-gold-dim)]"
          : "text-[color:var(--text-muted)] hover:text-[color:var(--vil-navy)]",
      )}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

export function GuideBlock({
  id,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <div className="mb-5 max-w-2xl">
        <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-[color:var(--vil-navy)]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{description}</p>
        ) : null}
      </div>
      <div className={cn("overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white", className)}>
        {children}
      </div>
    </section>
  );
}

export function GuideCodeFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[color:var(--border)]">
      <p className="px-4 pt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--text-soft)]">
        {label}
      </p>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}
