import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Construction, MapPin, Sparkles } from "lucide-react";

export default function CampusBrochurePage() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[color:var(--vil-navy)] px-6 pb-20 pt-32 text-white md:pt-40">
      <Image src="/cover/cover_2_topview_sspdl.png" alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--vil-navy)] via-[color:var(--vil-navy)]/92 to-[color:var(--vil-navy)]/55" />
      <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[color:var(--vil-gold)]/20 blur-[100px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div><Link href="/campus-life/life-at-viiv" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-[color:var(--vil-gold)]"><ArrowLeft className="h-4 w-4" /> Campus Life</Link><p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-[color:var(--vil-gold)]">Coming soon</p><h1 className="mt-5 max-w-3xl text-balance text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.06em]">The VIIV Campus Brochure.</h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">A closer look at the Chennai campus, builder spaces, learning rhythm, community, and visit information is being prepared.</p><div className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/70"><Construction className="h-4 w-4 text-[color:var(--vil-gold)]" /> The downloadable edition is in production.</div></div>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm rotate-3 rounded-xl border border-white/15 bg-[color:var(--vil-ivory)] p-5 text-[color:var(--vil-navy)] shadow-2xl"><div className="relative h-full overflow-hidden rounded-lg bg-[color:var(--vil-gold)] p-7"><div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#1f3149_1px,transparent_0)] [background-size:20px_20px]" /><div className="relative z-10 flex h-full flex-col"><Sparkles className="h-8 w-8" /><p className="mt-10 text-xs font-bold uppercase tracking-[0.2em]">VIIV · Chennai</p><p className="mt-4 text-5xl font-bold leading-[0.9] tracking-tight">Campus Brochure</p><div className="mt-auto space-y-3"><div className="flex items-center gap-2 border-t border-[color:var(--vil-navy)]/20 pt-4 text-sm font-semibold"><BookOpen className="h-4 w-4" /> Builder spaces & studios</div><div className="flex items-center gap-2 text-sm font-semibold"><MapPin className="h-4 w-4" /> Visit information</div></div></div></div></div>
      </div>
    </section>
  );
}
