import index from "@/content/library/index.json";
import studentHandbookRaw from "@/content/library/student-handbook.json";
import builderGuideRaw from "@/content/library/builder-guide.json";
import codeOfConductRaw from "@/content/library/code-of-conduct.json";

export type LibraryBookChapter = {
  slug: string;
  title: string;
  description: string;
  body: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
    afterParagraph?: number;
  }[];
};

export type LibraryBook = {
  slug: string;
  title: string;
  label: string;
  author: string;
  description: string;
  color: string;
  textColor?: string;
  variant?: "stripe" | "simple";
  coverImage: string;
  /** Optional lead-gate: blur the flipbook after this many pages and offer a download. */
  gate?: {
    /** Number of readable pages (chapters) shown before the blur kicks in. */
    afterPage?: number;
    /** Button label on the blur overlay. */
    cta?: string;
  };
  chapters: LibraryBookChapter[];
};

type RawBook = Omit<LibraryBook, "variant"> & { variant?: string };

const BOOK_VARIANTS = ["stripe", "simple"] as const;

/** Validate a raw JSON book and normalize it into a typed LibraryBook. */
function parseBook(raw: RawBook, file: string): LibraryBook {
  if (raw.variant !== undefined && !BOOK_VARIANTS.includes(raw.variant as (typeof BOOK_VARIANTS)[number])) {
    throw new Error(
      `[library] "${file}" has invalid variant "${raw.variant}". Expected one of: ${BOOK_VARIANTS.join(", ")}.`,
    );
  }
  return raw as LibraryBook;
}

const bookFiles: Record<string, LibraryBook> = {
  "student-handbook.json": parseBook(studentHandbookRaw, "student-handbook.json"),
  "builder-guide.json": parseBook(builderGuideRaw, "builder-guide.json"),
  "code-of-conduct.json": parseBook(codeOfConductRaw, "code-of-conduct.json"),
};

export const libraryBooks: LibraryBook[] = index.map((file) => bookFiles[file]);

/** Look up a book by its slug. */
export function getBookBySlug(slug: string): LibraryBook | undefined {
  return libraryBooks.find((book) => book.slug === slug);
}
