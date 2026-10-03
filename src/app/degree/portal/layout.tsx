import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal Login | VIIV — Varman Institute of Innovation and Venture Building",
  robots: { index: false, follow: false },
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
