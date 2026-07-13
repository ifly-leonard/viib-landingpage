import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Kit | VIIV",
  description: "Design playground for VIIV page components — colors, typography, buttons, and the full component library.",
  robots: { index: false, follow: false },
};

export default function UiKitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
