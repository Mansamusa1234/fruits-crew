import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Instagram, Leaf, Menu, Search, Youtube, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguagePicker } from "@/components/i18n/LanguagePicker";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/lib/i18n";

const NAV = [
  { to: "/about", key: "navAbout" },
  { to: "/crew", key: "navCrew" },
  { to: "/watch", key: "navWatch" },
  { to: "/sing", key: "navSing" },
  { to: "/farm", key: "navFarm" },
  { to: "/parents", key: "navParents" },
] as const;

const FOOT_LEFT = [
  { to: "/about", label: "About" },
  { to: "/press", label: "Press" },
  { to: "/partners", label: "Partners" },
  { to: "/faq", label: "FAQs" },
] as const;

const FOOT_RIGHT = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Use" },
  { to: "/cookies", label: "Cookies Policy" },
  { to: "/contact", label: "Contact" },
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
      <header className="sticky top-0 z-40 bg-leaf text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex min-h-11 items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <Leaf className="size-5" aria-hidden />
            Fruits Crew
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/15 hover:text-white",
                  pathname.startsWith(item.to) && "bg-white/20 text-white",
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
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:bg-white/15"
              aria-label="Search"
            >
              <Search className="size-5" />
            </Link>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/15 lg:hidden"
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
          <nav id="mobile-nav" className="grid gap-1 border-t border-white/20 px-4 py-3 lg:hidden" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-2xl px-3 py-3 text-base hover:bg-white/15"
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
      <footer className="bg-leaf text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 font-display text-2xl">
              <Leaf className="size-6" aria-hidden /> Fruits Crew
            </p>
            <div className="mt-4 flex gap-3" aria-label="Official channels coming soon">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/15">
                <Facebook className="size-5" aria-hidden />
              </span>
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/15">
                <Instagram className="size-5" aria-hidden />
              </span>
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/15">
                <Youtube className="size-5" aria-hidden />
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div>
                {FOOT_LEFT.map((l) => (
                  <Link key={l.to} to={l.to} className="mt-2 block text-white/90 hover:underline">
                    {l.label}
                  </Link>
                ))}
              </div>
              <div>
                {FOOT_RIGHT.map((l) => (
                  <Link key={l.to} to={l.to} className="mt-2 block text-white/90 hover:underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <img
            src="/scenes/footer-crew.jpg"
            alt="Original Fruits Crew fruit characters together"
            className="w-full rounded-[24px] object-cover"
          />
        </div>
        <div className="border-t border-white/20 px-4 py-4 text-center text-xs text-white/80">
          © 2026 Darren-neil. Fruits Crew. Original characters, songs and stories. This website is
          designed for parents and guardians.
        </div>
      </footer>
    </div>
  );
}
