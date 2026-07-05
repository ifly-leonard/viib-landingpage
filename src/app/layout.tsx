import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight } from "next/font/google";

import "../styles.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIIB — Coming Soon | Varman Innovation Labs",
  description:
    "Something new is building. A product-first venture from Varman Innovation Labs — scalable products, platforms, and growth systems from India for the world. Launching August 15, 2026.",
  openGraph: {
    title: "VIIB — Coming Soon",
    description:
      "Building venture-grade technology from India for the world. Launching August 15, 2026 from Varman Innovation Labs.",
    type: "website",
    url: "https://varmaninnovationlabs.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${interTight.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
