import type { CSSProperties } from "react";

import { LibraryPageHeader } from "@/components/viiv/LibraryPageHeader";
import { SectionShell } from "@/components/viiv/SectionShell";
import { BookEntry } from "@/components/viiv/BookEntry";
import { Reveal } from "@/components/viiv/motion";
import { libraryBooks } from "@/content/library";

const fdVars = {
  ["--color-fd-background" as string]: "#ffffff",
  ["--color-fd-foreground" as string]: "#1f3149",
} as CSSProperties;

export default function LibraryPage() {
  return (
    <>
      <LibraryPageHeader
        eyebrow="Library"
        title={
          <h1 className="viiv-section-title max-w-3xl text-balance text-[color:var(--vil-ivory)]">
            The reading every builder starts with.
          </h1>
        }
        description="Three essential books that shape the builder mindset at VIIV."
      />

      <SectionShell tone="light" className="bg-[color:var(--vil-surface)]">
        <div style={fdVars}>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {libraryBooks.map((book, i) => (
              <Reveal key={book.title} delay={0.1 + i * 0.08}>
                <BookEntry book={book} />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
