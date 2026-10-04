import { anchors } from "@/content/landing/site";
import { founder } from "@/content/landing/founder";
import { Icon } from "../ui/Icon";
import { TrackView } from "../TrackView";
import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Section";

export function FounderSection() {
  const [credentialTitle, credentialLine] = founder.credentials.split(" | ");

  return (
    <section id={anchors.founder} aria-labelledby="founder-title" className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-32">
      <TrackView event="founder_section_view" className="container-x">
        <Reveal>
          <Eyebrow>The founder</Eyebrow>
          <h2
            id="founder-title"
            className="mt-4 max-w-3xl text-balance text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-[1.08] tracking-tight"
          >
            {founder.heading}
          </h2>
        </Reveal>

        {/* Portrait + bio */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_24px_60px_-24px_rgba(31,49,73,0.4)] md:h-64 md:w-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={founder.photo} alt={founder.name} className="h-full w-full object-cover" />
              </div>

              <p className="mt-5 text-sm font-semibold text-ink">{founder.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{founder.title}</p>

              <div className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-2.5 py-1.5">
                <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={founder.iimLogo} alt="IIM Kozhikode" className="h-full w-full object-contain p-0.5" />
                </span>
                <span className="flex flex-col items-start text-left leading-tight">
                  <span className="text-xs font-semibold text-ink">{credentialTitle}</span>
                  <span className="text-[10px] font-medium text-muted">{credentialLine}</span>
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-muted">{founder.companies}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="max-w-2xl space-y-6 text-base leading-[1.8] text-muted md:text-lg">
              {founder.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Why VIIV Full Stack Sales */}
        <Reveal delay={0.06} className="mt-14 border-t border-line pt-10">
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{founder.why.heading}</h3>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p>{founder.why.lead}</p>
            {founder.why.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
            <p className="font-semibold text-ink">{founder.why.insight}</p>
            <p>{founder.why.program}</p>
          </div>

          <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3">
            {founder.why.salesCycle.map((step, i) => (
              <li key={step} className="inline-flex items-center gap-2">
                <span className="rounded-full bg-sand px-3 py-1.5 text-xs font-semibold text-ink ring-1 ring-line">
                  {step}
                </span>
                {i < founder.why.salesCycle.length - 1 && (
                  <Icon name="chevron" className="size-3.5 -rotate-90 text-muted" />
                )}
              </li>
            ))}
          </ol>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{founder.why.learnThrough}</p>
        </Reveal>

        {/* Vision */}
        <Reveal delay={0.06} className="mt-14">
          <div className="rounded-[1.75rem] bg-ink p-8 text-paper sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-dark">{founder.vision.heading}</p>
            <p className="mt-4 text-base text-paper/80">{founder.vision.lead}</p>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-accent-bright sm:text-4xl">
              {founder.vision.line}
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-paper/70 md:text-base">{founder.vision.body}</p>
          </div>
        </Reveal>

        {/* Experience logos */}
        <Reveal delay={0.06} className="mt-14 border-t border-line pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Built the ropes at</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {founder.companiesLogos.map((company) => (
              <div
                key={company.name}
                title={company.name}
                className="flex h-16 w-32 items-center justify-center overflow-hidden rounded-lg border border-line bg-white px-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={company.logo} alt={company.name} className="max-h-8 w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
        </Reveal>
      </TrackView>
    </section>
  );
}
