import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Guide | VIIV",
  description: "High-fidelity page-style and component guide for VIIV pages.",
  robots: { index: false, follow: false },
};

export default function UiGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
