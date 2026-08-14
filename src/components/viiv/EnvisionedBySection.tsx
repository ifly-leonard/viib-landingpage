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
                Founder, VIIV — Varman Institute of Innovation and Venture Building
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
                    IIM Kozhikode Alumnus
                  </span>
                  <span className="text-[10px] font-medium text-[color:var(--text-soft)]">
                    12+ Years of Startup Experience
                  </span>
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-[color:var(--text-muted)]">
                Ex-Practo · Ex-Toppr · Ex-WheelsEye · Ex-NxtWave
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="max-w-2xl">
              <div className="space-y-6 text-base leading-[1.8] text-[color:var(--text-muted)] md:text-lg">
                <p>
                  Arunmozhivarman Ramachandran brings{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    12+ years of experience
                  </strong>{" "}
                  across high-growth startups, including{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    Practo, Toppr, WheelsEye, and NxtWave
                  </strong>
                  , where he built and led large sales teams, scaled new markets, forged strategic partnerships, and drove business growth at scale.
                </p>
                <p>
                  Over the course of his career, he has built and managed teams of{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    200+ professionals
                  </strong>
                  , contributed to{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    multi-crore business and institutional partnerships
                  </strong>
                  , and helped{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    1,000+ healthcare providers
                  </strong>{" "}
                  adopt digital solutions during his time at Practo. His journey across multiple high-growth and unicorn startups gave him first-hand experience in how technology, execution, sales, leadership, and strong business models can transform industries.
                </p>
                <p>
                  He holds a{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    Bachelor of Engineering in Electronics and Communication Engineering (ECE)
                  </strong>{" "}
                  and a{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    PGPM from ICFAI Business School (IBS), Bangalore
                  </strong>
                  . He further completed the{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    Executive Programme in Strategic Management at IIM Kozhikode
                  </strong>
                  , strengthening his ability to connect long-term business strategy with real-world market execution.
                </p>
                <p>
                  Throughout his journey, Arunmozhivarman observed a persistent gap between education and execution: many young graduates enter the workforce with degrees, but without enough opportunities to demonstrate that they can{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    identify problems, build solutions, understand customers, sell, lead teams, and create value.
                  </strong>
                </p>
                <p className="text-[color:var(--vil-navy)]">
                  VIIV was created to bridge that gap.
                </p>
                <p>
                  At VIIV, students don&apos;t wait until graduation to start building. They learn through{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    challenge-based learning, real-world projects, venture building, mentorship, and hands-on execution
                  </strong>{" "}
                  — developing the skills, portfolio, and entrepreneurial mindset needed for the AI-driven economy.
                </p>
                <p>
                  His vision for VIIV is simple: help young people graduate not only with a degree, but with{" "}
                  <strong className="font-semibold text-[color:var(--vil-navy)]">
                    evidence of what they can build, lead, and create.
                  </strong>
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
