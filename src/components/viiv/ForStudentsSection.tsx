import type { CSSProperties } from "react";

import Book from "@/components/smoothui/book";
import { Reveal } from "@/components/viiv/motion";

type BookItem = {
  title: string;
  label: string;
  description: string;
  color: string;
  textColor?: string;
  variant?: "stripe" | "simple";
};

const books: BookItem[] = [
  {
    title: "Student Handbook",
    label: "Student Handbook",
    description: "Everything you need to know about life, learning, and expectations on campus.",
    color: "#1f3149",
    textColor: "#1f3149",
    variant: "stripe",
  },
  {
    title: "Builder Guide",
    label: "Builder Guide",
    description: "The playbook for shipping ventures — from first sprint to demo day.",
    color: "#f7bd44",
    textColor: "#1f3149",
    variant: "simple",
  },
  {
    title: "Code of Conduct",
    label: "Code of Conduct",
    description: "The values and standards that keep our builder community safe and honest.",
    color: "#bb8806",
    textColor: "#1f3149",
    variant: "stripe",
  },
];

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
          {books.map((book, i) => (
            <Reveal key={book.title} delay={0.1 + i * 0.08}>
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="w-[104px] shrink-0">
                  <Book
                    title={book.title}
                    color={book.color}
                    textColor={book.textColor}
                    variant={book.variant}
                    width={104}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold tracking-tight text-[color:var(--vil-navy)]">
                    {book.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--text-muted)]">
                    {book.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
