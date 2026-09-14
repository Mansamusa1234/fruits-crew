import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl text-leaf">{title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated {updated}</p>
      <div className="legal-copy mt-8 space-y-6 text-[17px] leading-relaxed text-fg/90">{children}</div>
      <p className="mt-10 text-sm text-muted">
        These pages are a Fruits Crew operations draft by Darren-neil. They are not legal advice. A
        solicitor should review them before a public company launch.
      </p>
    </main>
  );
}

export function H({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-2xl text-leaf">{children}</h2>;
}
