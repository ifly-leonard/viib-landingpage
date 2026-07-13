import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CtaVariant = "gold" | "navy" | "outlineLight" | "outline";

const VARIANTS: Record<CtaVariant, { base: string; dot: string; reveal: string }> = {
  gold: {
    base: "border-transparent bg-[color:var(--vil-gold)] text-[color:var(--vil-navy)]",
    dot: "bg-[color:var(--vil-navy)]",
    reveal: "text-[color:var(--vil-ivory)]",
  },
  navy: {
    base: "border-transparent bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]",
    dot: "bg-[color:var(--vil-gold)]",
    reveal: "text-[color:var(--vil-navy)]",
  },
  outlineLight: {
    base: "border-[color:var(--vil-ivory)]/30 bg-transparent text-[color:var(--vil-ivory)]",
    dot: "bg-[color:var(--vil-ivory)]",
    reveal: "text-[color:var(--vil-navy)]",
  },
  outline: {
    base: "border-[color:var(--vil-navy)]/20 bg-transparent text-[color:var(--vil-navy)]",
    dot: "bg-[color:var(--vil-navy)]",
    reveal: "text-[color:var(--vil-ivory)]",
  },
};

type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: CtaVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

function isExternal(href: string) {
  return /^(https?:|tel:|mailto:)/.test(href);
}

export function CtaButton({
  children,
  href,
  variant = "gold",
  className,
  onClick,
  type = "button",
}: CtaButtonProps) {
  const v = VARIANTS[variant];

  const content = (
    <>
      <span className="flex items-center justify-center gap-2">
        <span
          className={cn(
            "h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-[100.8]",
            v.dot,
          )}
        />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </span>
      <span
        className={cn(
          "absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
          v.reveal,
        )}
      >
        <span>{children}</span>
        <ArrowRight className="h-4 w-4" />
      </span>
    </>
  );

  const classes = cn(
    "group relative inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full border px-6 py-2.5 text-center text-sm font-semibold transition-colors",
    v.base,
    className,
  );

  if (href) {
    if (isExternal(href)) {
      return (
        <a href={href} onClick={onClick} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
