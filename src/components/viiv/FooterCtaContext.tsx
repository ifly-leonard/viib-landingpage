"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type FooterCta = {
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

export function FooterCtaProvider({ children }: { children: ReactNode }) {
  const [footerCta, setFooterCta] = useState<FooterCta | null>(null);
  return (
    <FooterCtaContext.Provider value={{ footerCta, setFooterCta }}>
      {children}
    </FooterCtaContext.Provider>
  );
}

export function useFooterCta() {
  return useContext(FooterCtaContext);
}
