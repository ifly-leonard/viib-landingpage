import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { siteMeta } from "@/content/homepage";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[color:var(--vil-ivory)] px-6 py-24 text-center">
      <div className="w-full max-w-2xl">
        {/* VIIV colored logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo_main.png"
          alt={siteMeta.name}
          className="mx-auto h-20 w-auto"
        />

        <p className="mt-10 font-display text-[clamp(4rem,12vw,8rem)] font-bold leading-none tracking-tight text-[color:var(--vil-navy)]">
          404
        </p>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--vil-gold-dim)]">
          Page not found
        </p>

        <p className="mx-auto mt-8 max-w-xl font-serif text-xl italic leading-snug text-[color:var(--vil-navy)] md:text-2xl">
          Not found. But not all those who wander are lost.
        </p>

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[color:var(--text-muted)]">
          The page you&apos;re looking for has drifted off. Meanwhile, maybe the right
          education for a better tomorrow is a path worth exploring.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--vil-gold)] px-6 py-3.5 text-sm font-bold text-[color:var(--vil-navy)] transition hover:brightness-105"
          >
            Explore the Program
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--vil-navy)]/20 px-6 py-3.5 text-sm font-semibold text-[color:var(--vil-navy)] transition hover:bg-[color:var(--vil-navy)]/[0.04]"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
