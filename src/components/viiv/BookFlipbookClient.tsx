"use client";

import { BookFlipbook } from "@/components/viiv/BookFlipbook";
import { useLeadMagnet } from "@/components/viiv/LeadMagnetContext";
import type { LibraryBook } from "@/content/library";

export function BookFlipbookClient({ book }: { book: LibraryBook }) {
  const { openLeadMagnet } = useLeadMagnet();

  return <BookFlipbook book={book} onRequestDownload={openLeadMagnet} />;
}
