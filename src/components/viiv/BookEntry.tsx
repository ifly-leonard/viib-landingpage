import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Book from "@/components/smoothui/book";
import type { LibraryBook } from "@/content/library";

export function BookEntry({ book }: { book: LibraryBook }) {
  return (
    <Link href={`/library/${book.slug}`} className="group block">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="w-[104px] shrink-0">
          <Book
            title={book.title}
            color={book.color}
            textColor={book.textColor}
            variant={book.variant}
            width={104}
            illustration={
              book.variant === "stripe" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={book.coverImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : undefined
            }
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold tracking-tight text-[color:var(--vil-navy)] group-hover:text-[color:var(--vil-gold-dim)]">
            {book.label}
          </h3>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--text-soft)]">
            {book.author}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-[color:var(--text-muted)]">
            {book.description}
          </p>
          <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--vil-navy)]">
            Read the book
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
