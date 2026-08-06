import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/viiv/motion";

export function CampusEditorialHero({ eyebrow, title, description, image, cta }: { eyebrow: string; title: string; description: string; image: string; cta?: { label: string; href: string } }) {
  return (
    <section className="relative min-h-[44rem] overflow-hidden bg-[color:var(--vil-navy)] pt-28 text-white md:pt-36">
      <Image src={image} alt="" fill priority className="object-cover opacity-55" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--vil-navy)] via-[color:var(--vil-navy)]/82 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)] via-transparent to-[color:var(--vil-navy)]/30" />
      <div className="viiv-container relative z-10 flex min-h-[36rem] items-end pb-20 md:pb-24">
        <Reveal>
          <Link href="/campus" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-[color:var(--vil-gold)]"><ArrowLeft className="h-4 w-4" /> Campus Life</Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.23em] text-[color:var(--vil-gold)]">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-balance text-[clamp(3.4rem,8vw,7.4rem)] font-bold leading-[0.9] tracking-[-0.06em]">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{description}</p>
          {cta ? <Link href={cta.href} className="btn-primary mt-8 !bg-[color:var(--vil-gold)] !text-[color:var(--vil-navy)]">{cta.label}<ArrowRight className="h-4 w-4" /></Link> : null}
        </Reveal>
      </div>
    </section>
  );
}
