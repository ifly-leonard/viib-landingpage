import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

import { siteMeta } from "@/content/homepage";

export function ComingSoon({
  title,
  description,
  backHref = "/campus",
  backLabel = "Back to Campus Life",
}: {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[color:var(--vil-ivory)] px-6 py-24 text-center">
      <div className="w-full max-w-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo_main.png" alt={siteMeta.name} className="mx-auto h-16 w-auto" />

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--vil-gold-dim)]">
          Coming soon
        </p>
        <h1 className="mt-3 font-serif text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-[color:var(--vil-navy)]">
          {title}
        </h1>

        {description ? (
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[color:var(--text-muted)]">
            {description}
          </p>
        ) : null}

        <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-navy)]/15 bg-white px-4 py-2 text-sm text-[color:var(--text-muted)]">
          <Construction className="h-4 w-4 text-[color:var(--vil-gold-dim)]" />
          We&apos;re building this — check back soon.
        </div>

        <div className="mt-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-6 py-3 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
