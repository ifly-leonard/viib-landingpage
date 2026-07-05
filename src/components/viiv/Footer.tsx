import { admissionsConfig } from "@/lib/admissions.config";
import { footerContent, siteMeta } from "@/content/homepage";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--vil-ivory)]">
      <div className="viiv-container py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="font-serif text-2xl font-semibold text-[color:var(--vil-navy)]">{siteMeta.name}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[color:var(--text-muted)]">
              {siteMeta.fullName}. {siteMeta.oneLiner}
            </p>
            <a
              href={footerContent.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-[color:var(--vil-navy)] underline-offset-4 hover:underline"
            >
              A venture of {footerContent.parent}
            </a>
          </div>
          <div className="text-sm text-[color:var(--text-muted)]">
            <p>{footerContent.address}</p>
            <a href={footerContent.phoneHref} className="mt-2 inline-block font-medium text-[color:var(--vil-navy)]">
              {footerContent.phone}
            </a>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[color:var(--text-soft)]">
              {admissionsConfig.batchLabel} · {admissionsConfig.status}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
