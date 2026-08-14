"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type CallbackContextValue = {
  open: boolean;
  openCallbackDialog: () => void;
  closeCallbackDialog: () => void;
};

const CallbackContext = createContext<CallbackContextValue>({
  open: false,
  openCallbackDialog: () => {},
  closeCallbackDialog: () => {},
});

export function CallbackProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openCallbackDialog = useCallback(() => setOpen(true), []);
  const closeCallbackDialog = useCallback(() => setOpen(false), []);

  return (
    <CallbackContext.Provider value={{ open, openCallbackDialog, closeCallbackDialog }}>
      {children}
    </CallbackContext.Provider>
  );
}

export function useCallbackDialog() {
  return useContext(CallbackContext);
}
