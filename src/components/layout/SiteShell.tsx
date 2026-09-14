import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const NAV = [
  { to: "/crew", label: "Meet the Crew" },
  { to: "/plants", label: "Plants" },
  { to: "/watch", label: "Watch" },
  { to: "/sing", label: "Sing" },
  { to: "/map", label: "Map" },
  { to: "/family", label: "Family" },
  { to: "/parents", label: "Parents" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bg-elevated focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-bg-elevated/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex min-h-11 items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <Leaf className="size-5 text-primary" aria-hidden />
            Fruits Crew
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-muted hover:bg-bg-subtle hover:text-fg",
                  pathname.startsWith(item.to) && "bg-bg-subtle text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
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
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <div id="main" className="flex-1">
        {children}
      </div>
      <footer className="border-t border-border bg-soil px-4 py-10 text-primary-fg">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl">Fruits Crew</p>
            <p className="mt-2 text-sm text-primary-fg/80">
              The whole living world is one family. Everything is connected. Each one teach one.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">Safety and privacy</p>
            <Link to="/parents" className="mt-2 block text-primary-fg/80 underline">
              Child safety and parent notes
            </Link>
            <Link to="/studio" className="mt-2 block text-primary-fg/80 underline">
              Production board
            </Link>
          </div>
          <p className="text-xs text-primary-fg/70">
            Created by Darren-neil. Original characters, songs and stories. No behavioural
            advertising. No products sold to children on this site.
          </p>
        </div>
      </footer>
    </div>
  );
}
