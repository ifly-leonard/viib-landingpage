import type { CSSProperties } from "react";

import { libraryBooks } from "@/content/library";
import { Reveal } from "@/components/viiv/motion";
import { BookEntry } from "@/components/viiv/BookEntry";

const fdVars = {
  ["--color-fd-background" as string]: "#ffffff",
  ["--color-fd-foreground" as string]: "#1f3149",
} as CSSProperties;

export function ForStudentsSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-surface)]">
      <div className="viiv-container py-16 md:py-20" style={fdVars}>
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
            <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
            For students
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-2xl text-balance text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-[1.15] tracking-tight text-[color:var(--vil-navy)]">
            The reading every builder starts with.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {libraryBooks.map((book, i) => (
            <Reveal key={book.title} delay={0.1 + i * 0.08}>
              <BookEntry book={book} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
