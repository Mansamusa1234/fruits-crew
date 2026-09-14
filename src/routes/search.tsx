import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { searchContent } from "@/lib/content/search";

export const Route = createFileRoute("/search")({ component: SearchPage });

function SearchPage() {
  const [q, setQ] = useState("");
  const hits = useMemo(() => searchContent(q), [q]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">Search</h1>
      <p className="mt-2 text-muted">Child-safe catalogue search: characters, plants, songs, stories.</p>
      <label className="mt-6 block">
        <span className="text-sm font-medium">Find something in Fruits Crew</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-2 min-h-12 w-full rounded-2xl border border-border-strong bg-bg-elevated px-4"
          placeholder="Try mango, seed, banana"
          autoComplete="off"
        />
      </label>
      <ul className="mt-6 space-y-3">
        {hits.map((h) => (
          <li key={h.href + h.title}>
            <a href={h.href} className="block rounded-[20px] border border-border bg-bg-elevated p-4">
              <p className="text-xs uppercase tracking-wide text-subtle">{h.kind}</p>
              <p className="font-display text-xl">{h.title}</p>
              <p className="text-sm text-muted">{h.blurb}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
