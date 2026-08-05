import Link from "next/link";
import { Home } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function LibraryPageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/cover/cover_2_topview_sspdl.png)" }}
      />

      {/* Readability scrims (same as hero) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--vil-navy)]/92 via-[color:var(--vil-navy)]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)]/85 via-transparent to-[color:var(--vil-navy)]/20" />

      <div className="viiv-container relative z-10 pb-16 pt-28 md:pb-24 md:pt-36">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm text-[color:var(--vil-ivory)]/70 transition-colors hover:text-[color:var(--vil-ivory)]"
                >
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[color:var(--vil-ivory)]/40" />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-[color:var(--vil-gold)]">
                {eyebrow}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="viiv-kicker text-[color:var(--vil-gold)]">{eyebrow}</p>
        <div className="mt-4 max-w-5xl">{title}</div>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--vil-ivory)]/80">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
