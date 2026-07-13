"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

import { navItems, type NavIcon, type NavMenuData } from "@/content/navigation";
import { NAV_ICON as ICON } from "@/components/viiv/navIcons";
import Book from "@/components/smoothui/book";
import { cn } from "@/lib/utils";

/** Base panel width per menu variant (px). Morphs between these as you move across items. */
const BASE_WIDTH: Record<NavMenuData["variant"], number> = {
  feature: 720,
  grid: 640,
  list: 380,
};

const VIEWPORT_PAD = 16;

function clampWidth(variant: NavMenuData["variant"]) {
  const base = BASE_WIDTH[variant];
  if (typeof window === "undefined") return base;
  return Math.min(base, window.innerWidth - VIEWPORT_PAD * 2);
}

function NewBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--vil-gold)]/40 bg-[color:var(--vil-gold)]/12 px-1.5 py-px text-[9px] font-semibold uppercase tracking-[0.1em] text-[color:var(--vil-gold-dim)]">
      {label}
    </span>
  );
}

function MenuHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
      {children}
    </p>
  );
}

function IconTile({ icon, active = false }: { icon: NavIcon; active?: boolean }) {
  const Icon = ICON[icon];
  return (
    <span
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-200",
        active
          ? "border-[color:var(--vil-gold)]/45 bg-[color:var(--vil-gold)]/15 text-[color:var(--vil-gold-dim)]"
          : "border-[color:var(--border)] bg-[color:var(--vil-ivory)] text-[color:var(--vil-navy)] group-hover:border-[color:var(--vil-gold)]/45 group-hover:bg-[color:var(--vil-gold)]/12 group-hover:text-[color:var(--vil-gold-dim)]",
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
    </span>
  );
}

function FeatureLayout({
  menu,
  label,
}: {
  menu: Extract<NavMenuData, { variant: "feature" }>;
  label: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? menu.links[active] : null;

  const image = current?.image ?? menu.featured.image;
  const title = current?.title ?? menu.featured.title;
  const description = current?.description ?? menu.featured.description;
  const href = current?.href ?? menu.featured.href;
  const cta = current ? "Explore this track" : menu.featured.cta;

  return (
    <div className="grid grid-cols-[1.05fr_0.95fr]">
      <div className="p-4" onMouseLeave={() => setActive(null)}>
        <MenuHeading>{label}</MenuHeading>
        <div className="space-y-0.5">
          {menu.links.map((link, i) => (
            <Link
              key={link.title}
              href={link.href}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "group relative flex items-center gap-3.5 rounded-2xl px-3.5 py-3 transition-colors duration-200",
                active === i ? "bg-[color:var(--vil-navy)]/[0.05]" : "hover:bg-[color:var(--vil-navy)]/[0.05]",
              )}
            >
              <IconTile icon={link.icon} active={active === i} />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 text-sm font-semibold text-[color:var(--vil-navy)]">
                  {link.title}
                  {link.badge ? <NewBadge label={link.badge} /> : null}
                </span>
                <span className="mt-0.5 block text-xs leading-relaxed text-[color:var(--text-muted)]">
                  {link.description}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-[color:var(--vil-gold-dim)] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>

      <Link
        href={href}
        className="group relative m-2.5 flex min-h-[16.5rem] flex-col justify-end overflow-hidden rounded-[1.1rem] p-6 text-[color:var(--vil-ivory)] ring-1 ring-inset ring-white/10"
      >
        <AnimatePresence initial={false}>
          <motion.span
            key={image}
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
        <span className="absolute inset-0 bg-gradient-to-t from-[color:var(--vil-navy)] via-[color:var(--vil-navy)]/55 to-[color:var(--vil-navy)]/5" />
        <span className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--vil-gold)] backdrop-blur-sm">
            <span className="h-1 w-1 rounded-full bg-[color:var(--vil-gold)]" />
            {menu.featured.eyebrow}
          </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={title}
              className="block"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="mt-3 block text-xl font-bold leading-snug">{title}</span>
              <span className="mt-1.5 block text-sm leading-relaxed text-[color:var(--vil-ivory)]/75">
                {description}
              </span>
            </motion.span>
          </AnimatePresence>
          <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-[color:var(--vil-ivory)] px-3.5 py-1.5 text-xs font-semibold text-[color:var(--vil-navy)] transition-all duration-200 group-hover:gap-2.5">
            {cta}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </span>
      </Link>
    </div>
  );
}

function GridLayout({
  menu,
  label,
}: {
  menu: Extract<NavMenuData, { variant: "grid" }>;
  label: string;
}) {
  return (
    <div>
      <div className="grid grid-cols-[1fr_0.6fr]">
        <div className="p-4">
          <MenuHeading>{label}</MenuHeading>
          <div className="grid grid-cols-2 gap-0.5">
            {menu.links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-start gap-3 rounded-2xl p-3 transition-colors duration-200 hover:bg-[color:var(--vil-navy)]/[0.05]"
              >
                <IconTile icon={link.icon} />
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-[color:var(--vil-navy)]">
                    {link.title}
                    {link.badge ? <NewBadge label={link.badge} /> : null}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-[color:var(--text-muted)]">
                    {link.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-l border-[color:var(--border)] bg-[color:var(--vil-ivory)]/60 p-4">
          <MenuHeading>{menu.side.heading}</MenuHeading>
          <div className="space-y-0.5">
            {menu.side.items.map((item) => {
              const Icon = ICON[item.icon];
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-[color:var(--vil-surface)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[color:var(--border)] bg-[color:var(--vil-surface)] text-[color:var(--vil-gold-dim)]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-[color:var(--vil-navy)]">
                      {item.title}
                      {item.badge ? <NewBadge label={item.badge} /> : null}
                    </span>
                    <span className="block text-xs text-[color:var(--text-muted)]">{item.description}</span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[color:var(--text-soft)] transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>

          <Link
            href="/campus"
            className="group mt-3 flex items-center gap-3.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--vil-surface)] p-3 transition-colors duration-200 hover:border-[color:var(--vil-gold)]/45"
          >
            <div className="w-[68px] shrink-0">
              <Book
                title="Student Handbook"
                color="#f7bd44"
                textColor="#1f3149"
                variant="simple"
                width={68}
              />
            </div>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-[color:var(--vil-navy)]">
                Student Handbook
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-[color:var(--text-muted)]">
                Your guide to life on campus.
              </span>
            </span>
          </Link>
        </div>
      </div>

      <Link
        href={menu.footer.href}
        className="group flex items-center justify-center gap-1.5 border-t border-[color:var(--border)] bg-[color:var(--vil-ivory)]/50 px-5 py-3 text-sm font-semibold text-[color:var(--vil-navy)] transition-colors duration-200 hover:bg-[color:var(--vil-ivory)]"
      >
        {menu.footer.label}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

function ListLayout({
  menu,
  label,
}: {
  menu: Extract<NavMenuData, { variant: "list" }>;
  label: string;
}) {
  return (
    <div className="p-4">
      <MenuHeading>{label}</MenuHeading>
      <div className="space-y-0.5">
        {menu.links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="group flex items-center gap-3.5 rounded-2xl px-3 py-2.5 transition-colors duration-200 hover:bg-[color:var(--vil-navy)]/[0.05]"
          >
            <IconTile icon={link.icon} />
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 text-sm font-semibold text-[color:var(--vil-navy)]">
                {link.title}
                {link.badge ? <NewBadge label={link.badge} /> : null}
              </span>
              <span className="block text-xs text-[color:var(--text-muted)]">{link.description}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-[color:var(--vil-gold-dim)] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
        ))}
      </div>

      <Link
        href={menu.cta.href}
        className="group mt-3 flex items-center justify-between gap-3 overflow-hidden rounded-2xl bg-[color:var(--vil-navy)] p-4 text-[color:var(--vil-ivory)]"
      >
        <span className="min-w-0">
          <span className="block text-sm font-bold">{menu.cta.title}</span>
          <span className="mt-0.5 block text-xs text-[color:var(--vil-ivory)]/70">{menu.cta.description}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[color:var(--vil-gold)] px-3.5 py-2 text-xs font-bold text-[color:var(--vil-navy)] transition-all duration-200 group-hover:gap-2.5">
          {menu.cta.label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </div>
  );
}

function MenuContent({ menu, label }: { menu: NavMenuData; label: string }) {
  if (menu.variant === "feature") return <FeatureLayout menu={menu} label={label} />;
  if (menu.variant === "grid") return <GridLayout menu={menu} label={label} />;
  return <ListLayout menu={menu} label={label} />;
}

type PanelDims = { x: number; width: number; height: number };

export function NavMenu({ light }: { light: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [dims, setDims] = useState<PanelDims>({ x: 0, width: 0, height: 0 });

  const rootRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const visible = openIndex !== null;

  // Measure the panel position/size for a given nav item so the single
  // background layer can morph (translate + resize) toward it, Stripe-style.
  const measure = useCallback((index: number) => {
    const nav = navRef.current;
    const trigger = triggerRefs.current[index];
    const content = contentRefs.current[index];
    const item = navItems[index];
    if (!nav || !trigger || !content || !item.menu) return;

    const navRect = nav.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const width = clampWidth(item.menu.variant);

    const center = triggerRect.left + triggerRect.width / 2;
    let left = center - width / 2;
    left = Math.max(
      VIEWPORT_PAD,
      Math.min(left, window.innerWidth - VIEWPORT_PAD - width),
    );

    setDims({ x: left - navRect.left, width, height: content.offsetHeight });
  }, []);

  useEffect(() => {
    if (openIndex !== null) measure(openIndex);
  }, [openIndex, measure]);

  // Seed initial dims at the first menu item so the first open fades in place.
  useEffect(() => {
    const first = navItems.findIndex((n) => n.menu);
    if (first >= 0) measure(first);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onResize = () => measure(openIndex ?? navItems.findIndex((n) => n.menu));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openIndex, measure]);

  // Stays open on hover-out; only closes on outside click or Escape.
  useEffect(() => {
    if (openIndex === null) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  return (
    <div ref={rootRef} className="relative hidden lg:block">
      <nav ref={navRef} className="flex items-center gap-1">
        {navItems.map((item, i) => {
          const isOpen = openIndex === i;
          const triggerClass = cn(
            "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
            light
              ? "text-[color:var(--vil-ivory)]/85 hover:text-[color:var(--vil-ivory)]"
              : "text-[color:var(--text-muted)] hover:text-[color:var(--vil-navy)]",
            isOpen &&
              (light
                ? "bg-white/10 text-[color:var(--vil-ivory)]"
                : "bg-[color:var(--vil-navy)]/[0.06] text-[color:var(--vil-navy)]"),
          );

          return (
            <div
              key={item.label}
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onMouseEnter={() => {
                if (item.menu) setOpenIndex(i);
              }}
            >
              {item.menu ? (
                <button
                  type="button"
                  className={triggerClass}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
                >
                  {item.label}
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")}
                  />
                </button>
              ) : (
                <Link href={item.href} className={triggerClass}>
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      <motion.div
        aria-hidden={!visible}
        onClick={() => setOpenIndex(null)}
        className="absolute left-0 top-full z-50 mt-3 origin-top overflow-hidden rounded-[1.35rem] border border-[color:var(--border)] bg-[color:var(--vil-surface)] shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_28px_70px_-28px_rgba(31,49,73,0.5),0_10px_28px_-16px_rgba(31,49,73,0.28)]"
        style={{ pointerEvents: visible ? "auto" : "none" }}
        initial={false}
        animate={{
          x: dims.x,
          width: dims.width,
          height: dims.height,
          opacity: visible ? 1 : 0,
          y: visible ? 0 : 8,
          scale: visible ? 1 : 0.98,
        }}
        transition={{
          x: { type: "spring", stiffness: 420, damping: 40 },
          width: { type: "spring", stiffness: 420, damping: 40 },
          height: { type: "spring", stiffness: 420, damping: 40 },
          opacity: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
          y: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
        }}
      >
        {navItems.map((item, i) =>
          item.menu ? (
            <motion.div
              key={item.label}
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              className="absolute left-0 top-0"
              // Only the active layer receives pointer events; inactive layers
              // (which are stacked on top of each other) must let events pass
              // through to whichever menu is currently open.
              style={{
                width: BASE_WIDTH[item.menu.variant],
                pointerEvents: openIndex === i ? "auto" : "none",
                zIndex: openIndex === i ? 1 : 0,
              }}
              initial={false}
              animate={{
                opacity: openIndex === i ? 1 : 0,
                y: openIndex === i ? 0 : 6,
              }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <MenuContent menu={item.menu} label={item.label} />
            </motion.div>
          ) : null,
        )}
      </motion.div>
    </div>
  );
}
