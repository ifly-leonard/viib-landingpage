import type { Metadata } from "next";

import { siteMeta } from "@/content/homepage";

import "../styles.css";

export const metadata: Metadata = {
  title: "VIIV | Varman Institute of Venture Building",
  description: siteMeta.oneLiner,
  openGraph: {
    title: "VIIV — Earn the BBA. Build the venture. Graduate with proof.",
    description: siteMeta.oneLiner,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
