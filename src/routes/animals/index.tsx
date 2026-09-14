import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { animalKinds, animals, habitats } from "@/lib/content/animals";
import type { AnimalHabitat, AnimalKind } from "@/lib/content/schema";

export const Route = createFileRoute("/animals/")({ component: AnimalsPage });

function AnimalsPage() {
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<"all" | AnimalKind>("all");
  const [home, setHome] = useState<"all" | AnimalHabitat>("all");
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return animals.filter((a) => {
      if (kind !== "all" && a.kind !== kind) return false;
      if (home !== "all" && a.habitat !== home) return false;
      if (!needle) return true;
      return `${a.commonName} ${a.scientificName} ${a.nativeRange} ${a.connected}`.toLowerCase().includes(needle);
    });
  }, [q, kind, home]);

  const fish = animals.filter((a) => a.kind === "fish").length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl">Living world</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Earth has more than a million named animal species. Fruits Crew starts with a worldwide family
        children can learn — {animals.length} lives, including {fish} fish — each one with a part to
        play. The worm, the bee, the whale, the child: one ecosystem. This catalogue grows.
      </p>
      <div className="mt-6 rounded-[20px] bg-white p-4 text-sm shadow-soft">
        Wild animals are not toys. Look with an adult. Never chase, grab or feed a wild animal.
      </div>
      <label className="mt-6 block">
        <span className="text-sm font-medium">Search fish, birds, insects, mammals…</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-2 min-h-12 w-full rounded-2xl border border-border-strong bg-white px-4"
          placeholder="Try salmon, bee, whale, clownfish…"
          autoComplete="off"
        />
      </label>
      <div className="mt-4 flex flex-wrap gap-2">
        {animalKinds.map((k) => (
          <button
            key={k.id}
            type="button"
            onClick={() => setKind(k.id)}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
              kind === k.id ? "bg-leaf text-white" : "bg-white text-fg shadow-soft"
            }`}
          >
            {k.label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {habitats.map((h) => (
          <button
            key={h.id}
            type="button"
            onClick={() => setHome(h.id)}
            className={`min-h-10 rounded-full px-3 text-xs font-semibold ${
              home === h.id ? "bg-lagoon text-white" : "bg-white text-muted shadow-soft"
            }`}
          >
            {h.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">
        Showing {list.length} of {animals.length}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <Link
            key={a.slug}
            to="/animals/$slug"
            params={{ slug: a.slug }}
            className="rounded-[24px] bg-white p-5 shadow-soft hover:bg-bg-subtle"
          >
            <p className="text-xs uppercase tracking-wide text-subtle">
              {a.kind} · {a.habitat}
            </p>
            <h2 className="mt-1 font-display text-2xl">{a.commonName}</h2>
            <p className="text-sm italic text-muted">{a.scientificName}</p>
            <p className="mt-2 text-sm">{a.connected}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
