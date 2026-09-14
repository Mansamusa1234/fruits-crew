import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguagePicker } from "@/components/i18n/LanguagePicker";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/lib/i18n";

const NAV = [
  { to: "/start", key: "navStart" },
  { to: "/farm", key: "navFarm" },
  { to: "/crew", key: "navCrew" },
  { to: "/plants", key: "navPlants" },
  { to: "/languages", key: "navLanguages" },
  { to: "/watch", key: "navWatch" },
  { to: "/sing", key: "navSing" },
  { to: "/map", key: "navMap" },
  { to: "/family", key: "navFamily" },
  { to: "/parents", key: "navParents" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useLanguage();

  return (
    <div className="flex min-h-dvh flex-col bg-transparent text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bg-elevated focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md">
        <div className="fruit-stripe" aria-hidden />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex min-h-11 items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <Leaf className="size-5 text-leaf" aria-hidden />
            Fruits Crew
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-muted hover:bg-bg-subtle hover:text-fg",
                  pathname.startsWith(item.to) && "bg-banana text-fg",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguagePicker />
            <Link
              to="/search"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:bg-bg-subtle"
              aria-label="Search"
            >
              <Search className="size-5" />
            </Link>
            <Button
              variant="ghost"
              className="lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="grid gap-1 border-t border-border px-4 py-3 lg:hidden" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-2xl px-3 py-3 text-base hover:bg-bg-subtle"
                onClick={() => setOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <div id="main" className="flex-1">
        {children}
      </div>
      <footer className="relative overflow-hidden px-4 py-10 text-white">
        <div className="fruit-stripe" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#c2410c] to-[#0e7490]" />
        <div className="relative mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl">Fruits Crew</p>
            <p className="mt-2 text-sm text-white/85">
              The whole living world is one family. Everything is connected. Each one teach one.
            </p>
          </div>
          <div className="text-sm">
            <Link to="/start" className="mt-2 block text-white/85 underline">
              Start here (beginner)
            </Link>
            <Link to="/languages" className="mt-2 block text-white/85 underline">
              Languages
            </Link>
            <Link to="/parents" className="mt-2 block text-white/85 underline">
              Child safety and parent notes
            </Link>
            <Link to="/schools" className="mt-2 block text-white/85 underline">
              Schools and libraries
            </Link>
            <Link to="/studio" className="mt-2 block text-white/85 underline">
              Studio and launch kit
            </Link>
            <Link to="/press" className="mt-2 block text-white/85 underline">
              Press and brand
            </Link>
          </div>
          <p className="text-xs text-white/75">
            Created by Darren-neil. Original characters, songs and stories. No behavioural
            advertising. No products sold to children on this site.
          </p>
        </div>
      </footer>
    </div>
  );
}
