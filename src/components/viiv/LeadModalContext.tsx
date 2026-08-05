"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type LeadModalContextValue = {
  open: boolean;
  openLeadModal: () => void;
  closeLeadModal: () => void;
};

const LeadModalContext = createContext<LeadModalContextValue>({
  open: false,
  openLeadModal: () => {},
  closeLeadModal: () => {},
});

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openLeadModal = useCallback(() => setOpen(true), []);
  const closeLeadModal = useCallback(() => setOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ open, openLeadModal, closeLeadModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  return useContext(LeadModalContext);
}
