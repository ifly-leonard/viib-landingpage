import { Reveal } from "@/components/viiv/motion";

const FOUNDER_COMPANIES = [
  { name: "Practo", logo: "/founder/practo.png" },
  { name: "Toppr", logo: "/founder/toppr.png" },
  { name: "WheelsEye", logo: "/founder/wheels-eye.jpeg" },
  { name: "NxtWave", logo: "/founder/nxtwave.png" },
] as const;

export function EnvisionedBySection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-ivory)]">
      <div
        aria-hidden
        className="viiv-dot-bg-light pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="viiv-container relative z-10 py-20 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
            <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
            The founder
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-balance text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-tight text-[color:var(--vil-navy)]">
            Envisioned by{" "}
            <span className="text-[color:var(--vil-gold-dim)]">
              industry veterans.
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_24px_60px_-24px_rgba(31,49,73,0.4)] md:h-64 md:w-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/mentors/arunmozhivarman_circle.png"
                  alt="Arunmozhivarman Ramachandran"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-5 text-sm font-semibold text-[color:var(--vil-navy)]">
                Arunmozhivarman Ramachandran
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-soft)]">
                Founder
              </p>

              <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-white px-2.5 py-1.5">
                <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/founder/iim-k.jpeg"
                    alt="IIM Kozhikode"
                    className="h-full w-full object-contain p-0.5"
                  />
                </span>
                <span className="flex flex-col items-start text-left leading-tight">
                  <span className="text-xs font-semibold text-[color:var(--vil-navy)]">
                    IIM Kozhikode
                  </span>
                  <span className="text-[10px] font-medium text-[color:var(--text-soft)]">
                    Strategic Management 2019-20
                  </span>
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-[color:var(--text-muted)]">
                12+ years of startup experience
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="max-w-2xl">
              <div className="space-y-6 text-base leading-[1.8] text-[color:var(--text-muted)] md:text-lg">
                <p>
                  Arunmozhivarman Ramachandran spent over 12 years building and
                  leading teams at Practo, WheelsEye, Toppr and NxtWave
                  scaling sales teams of 200+ professionals, forging multi-crore
                  strategic partnerships, and helping 1,000+ healthcare
                  providers adopt digital solutions. He completed his Executive
                  Programme in{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    Strategic Management at IIM Kozhikode
                  </strong>
                  , sharpening the ability to pair business strategy with
                  market-level execution.
                </p>
                <p>
                  Working inside multiple unicorn startups, he saw what most
                  classrooms still miss — that technology, strong execution, and
                  the right business model can transform industries. He also saw
                  the gap: graduates arriving with degrees, but not the
                  demonstrated ability to build, sell, and lead.
                </p>
                <p className="text-[color:var(--vil-navy)]">
                  VIIV is his answer — a venture-building institute where
                  students learn by building real businesses, so the workforce
                  of tomorrow graduates with evidence of what they can do, not
                  just certificates.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-14 border-t border-[color:var(--border)] pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
              Built the ropes at
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {FOUNDER_COMPANIES.map((company) => (
                <div
                  key={company.name}
                  title={company.name}
                  className="flex h-16 w-32 items-center justify-center overflow-hidden rounded-lg border border-[color:var(--border)] bg-white px-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-8 w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
