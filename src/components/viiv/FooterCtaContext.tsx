"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type FooterCta = {
  eyebrow: string;
  headline: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
};

const FooterCtaContext = createContext<{
  footerCta: FooterCta | null;
  setFooterCta: (cta: FooterCta | null) => void;
}>({
  footerCta: null,
  setFooterCta: () => {},
});

export function FooterCtaProvider({
  children,
  initial = null,
}: {
  children: ReactNode;
  initial?: FooterCta | null;
}) {
  const [footerCta, setFooterCta] = useState<FooterCta | null>(initial);
  return (
    <FooterCtaContext.Provider value={{ footerCta, setFooterCta }}>
      {children}
    </FooterCtaContext.Provider>
  );
}

export function useFooterCta() {
  return useContext(FooterCtaContext);
}
