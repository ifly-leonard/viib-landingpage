import { Reveal } from "@/components/viiv/motion";
import { credentialsContent, degreeAdvantages } from "@/content/credentials";

export function CredentialsSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--vil-ivory)]">
      <div className="viiv-container py-20 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--text-soft)]">
            <span className="h-px w-8 bg-[color:var(--vil-gold)]" />
            {credentialsContent.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[color:var(--vil-navy)]">
            {credentialsContent.headline}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--text-muted)]">
            {credentialsContent.subcopy}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 grid items-center gap-8 rounded-[2rem] border border-[color:var(--border)] bg-white p-8 shadow-[0_24px_70px_-45px_rgba(31,49,73,0.5)] md:grid-cols-[1fr_auto_1fr] md:gap-12 md:p-10">
            {/* VIIV */}
            <div className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logo_full.png"
                alt="VIIV"
                className="h-52 w-auto object-contain md:h-60"
              />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 text-[color:var(--text-soft)]">
              <span className="hidden h-px w-10 bg-[color:var(--border)] md:block" />
              <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em]">
                in partnership with
              </span>
              <span className="hidden h-px w-10 bg-[color:var(--border)] md:block" />
            </div>

            {/* Kalasalingam */}
            <div className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/partners/kalasalingam_university.png"
                alt="Kalasalingam University"
                className="h-auto w-full max-w-[300px] object-contain md:max-w-[360px]"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.14}>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-[color:var(--vil-navy)]">
                {credentialsContent.advantagesTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                {credentialsContent.advantagesSubcopy}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="space-y-5">
              {degreeAdvantages.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-4 border-t border-[color:var(--border)] pt-5 first:border-t-0 first:pt-0"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--vil-gold)]/15 text-xs font-bold text-[color:var(--vil-gold-dim)]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-[color:var(--vil-navy)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
