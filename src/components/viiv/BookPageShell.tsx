import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import type { LibraryBook } from "@/content/library";
import { cn } from "@/lib/utils";

/**
 * Shared "actual book" reading shell. Renders on a warm paper background
 * with serif typography, like an open book rather than a webpage.
 */
export function BookPageShell({
  book,
  children,
  className,
}: {
  book: LibraryBook;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-screen bg-[color:var(--vil-ivory)]">
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 md:py-14">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--vil-navy)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Library
          </Link>
          <span className="font-book text-sm italic text-[color:var(--text-soft)]">{book.title}</span>
        </div>

        {/* Book page */}
        <div
          className={cn(
            "book-paper relative mt-8 overflow-hidden rounded-sm shadow-[0_1px_2px_rgba(31,49,73,0.08),0_24px_60px_-24px_rgba(31,49,73,0.25)]",
            className,
          )}
        >
          <div className="absolute inset-y-0 left-8 hidden w-px bg-[color:var(--vil-navy)]/[0.06] sm:block" />
          <div className="px-6 py-10 sm:px-14 md:px-20 md:py-16">{children}</div>
        </div>
      </div>
    </div>
  );
}
