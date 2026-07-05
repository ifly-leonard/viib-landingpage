import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";

import { siteMeta } from "@/content/homepage";

import "../styles.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
