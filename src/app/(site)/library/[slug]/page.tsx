import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { BookFlipbookClient } from "@/components/viiv/BookFlipbookClient";
import { getBookBySlug, libraryBooks } from "@/content/library";

export function generateStaticParams() {
  return libraryBooks.map((book) => ({ slug: book.slug }));
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  return (
    <div className="min-h-screen bg-[color:var(--vil-ivory)]">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 md:py-14">
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

        {/* Book info */}
        <div className="mt-10 text-center">
          <h1 className="font-book text-4xl font-semibold leading-tight tracking-tight text-[color:var(--vil-navy)] md:text-5xl">
            {book.title}
          </h1>
          <p className="mt-3 font-book text-sm italic text-[color:var(--text-muted)]">
            by {book.author}
          </p>
          <p className="mx-auto mt-5 max-w-xl font-book text-base leading-relaxed text-[color:var(--text-muted)]">
            {book.description}
          </p>
        </div>

        {/* Flipbook viewer */}
        <div className="mt-10">
          <BookFlipbookClient book={book} />
        </div>
      </div>
    </div>
  );
}
