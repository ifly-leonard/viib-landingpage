import { proofStrip } from "@/content/homepage";

export function ProofStrip() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--vil-navy)] text-[color:var(--vil-ivory)]">
      <div className="viiv-container py-6 md:py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {proofStrip.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[color:var(--vil-ivory)]/12 bg-[color:var(--vil-ivory)]/6 px-4 py-4"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--vil-gold)]">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
