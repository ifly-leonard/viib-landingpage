"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import { NAV_ICON } from "@/components/viiv/navIcons";
import { navItems, type NavIcon, type NavMenuData } from "@/content/navigation";
import { cn } from "@/lib/utils";

type SubItem = { title: string; href: string; icon: NavIcon; badge?: string };

function subItems(menu: NavMenuData): SubItem[] {
  const items: SubItem[] = menu.links.map((l) => ({
    title: l.title,
    href: l.href,
    icon: l.icon,
    badge: l.badge,
  }));
  if (menu.variant === "grid") {
    for (const s of menu.side.items) {
      items.push({ title: s.title, href: s.href, icon: s.icon, badge: s.badge });
    }
  }
  return items;
}

export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <nav className="mt-6 flex flex-col gap-1.5">
      {navItems.map((item, i) => {
        if (!item.menu) {
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="rounded-xl px-3 py-3 text-base font-semibold text-[color:var(--vil-navy)] transition-colors hover:bg-[color:var(--vil-navy)]/5"
            >
              {item.label}
            </Link>
          );
        }

        const isOpen = openIndex === i;
        const items = subItems(item.menu);

        return (
          <div key={item.label} className="rounded-xl">
            <button
              type="button"
              onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
              aria-expanded={isOpen}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-[color:var(--vil-navy)] transition-colors",
                isOpen ? "bg-[color:var(--vil-navy)]/5" : "hover:bg-[color:var(--vil-navy)]/5",
              )}
            >
              {item.label}
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-1.5 px-2 pb-2 pt-1">
                    {items.map((sub) => {
                      const Icon = NAV_ICON[sub.icon];
                      return (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={onNavigate}
                          className="group flex items-start gap-2 rounded-lg px-2.5 py-2 transition-colors hover:bg-[color:var(--vil-navy)]/5"
                        >
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[color:var(--vil-navy)]/6 text-[color:var(--vil-gold-dim)]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 flex-1 text-[12px] font-medium leading-tight text-[color:var(--vil-navy)]">
                            {sub.title}
                            {sub.badge ? (
                              <span className="ml-1 inline-block rounded-full bg-[color:var(--vil-gold)]/18 px-1 py-0.5 align-middle text-[8px] font-bold uppercase tracking-[0.08em] text-[color:var(--vil-gold-dim)]">
                                {sub.badge}
                              </span>
                            ) : null}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
