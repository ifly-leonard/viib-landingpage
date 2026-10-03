import Image from "next/image";

import { site } from "@/content/landing/site";
import { cn } from "@/lib/landing/cn";

/** The real VIIV brand mark (colored on light backgrounds, white on dark). */
export function Logo({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <Image
      src={dark ? "/brand/logo_main_white.png" : "/brand/logo_main.png"}
      alt={site.brand}
      width={2000}
      height={2000}
      priority
      className={cn("h-14 w-auto shrink-0", className)}
    />
  );
}
