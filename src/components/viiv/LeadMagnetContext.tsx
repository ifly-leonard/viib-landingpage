"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

import type { LibraryBook } from "@/content/library";

type LeadMagnetContextValue = {
  open: boolean;
  book: LibraryBook | null;
  openLeadMagnet: (book: LibraryBook) => void;
  closeLeadMagnet: () => void;
};

const LeadMagnetContext = createContext<LeadMagnetContextValue>({
  open: false,
  book: null,
  openLeadMagnet: () => {},
  closeLeadMagnet: () => {},
});

export function LeadMagnetProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<LibraryBook | null>(null);

  const openLeadMagnet = useCallback((b: LibraryBook) => {
    setBook(b);
    setOpen(true);
  }, []);
  const closeLeadMagnet = useCallback(() => {
    setOpen(false);
    setBook(null);
  }, []);

  return (
    <LeadMagnetContext.Provider value={{ open, book, openLeadMagnet, closeLeadMagnet }}>
      {children}
    </LeadMagnetContext.Provider>
  );
}

export function useLeadMagnet() {
  return useContext(LeadMagnetContext);
}
