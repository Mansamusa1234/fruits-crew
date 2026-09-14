import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import type { PlantKind } from "@/lib/content/schema";
import { plants } from "@/lib/content/plants";

export const Route = createFileRoute("/plants/")({ component: PlantsPage });

const KINDS: { id: "all" | PlantKind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fruit", label: "Fruit" },
  { id: "vegetable", label: "Vegetable" },
  { id: "herb", label: "Herb" },
  { id: "grain", label: "Grain" },
  { id: "nut", label: "Nut" },
  { id: "legume", label: "Legume" },
  { id: "spice", label: "Spice" },
  { id: "wild", label: "Wild" },
];

function PlantsPage() {
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<(typeof KINDS)[number]["id"]>("all");
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return plants.filter((p) => {
      if (kind !== "all" && p.kind !== kind) return false;
      if (!needle) return true;
      return (
        p.commonName.toLowerCase().includes(needle) ||
        p.scientificName.toLowerCase().includes(needle) ||
        p.botanicalOrigin.toLowerCase().includes(needle) ||
        p.indigenousAndHistoricalNames.some((n) => n.toLowerCase().includes(needle))
      );
    });
  }, [q, kind]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl">Plant explorer</h1>
      <p className="mt-3 max-w-2xl text-muted">
        {plants.length} fruits, vegetables, herbs, grains, nuts and wild plants. Botanical origin,
        cultural history and modern farms are listed separately. Traditional uses are not medical
        advice.
      </p>
      <div className="mt-6 rounded-[20px] border border-warn/30 bg-bg-elevated p-4 text-sm">
        Never eat a wild plant unless a knowledgeable adult has positively identified it as safe.
      </div>
      <label className="mt-6 block">
        <span className="text-sm font-medium">Search the living catalogue</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-2 min-h-12 w-full rounded-2xl border border-border-strong bg-white px-4"
          placeholder="Try mango, yam, thyme, peanut…"
          autoComplete="off"
        />
      </label>
      <div className="mt-4 flex flex-wrap gap-2">
        {KINDS.map((k) => (
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
      <p className="mt-4 text-sm text-muted">
        Showing {list.length} of {plants.length}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.slug}
            to="/plants/$slug"
            params={{ slug: p.slug }}
            className="rounded-[24px] bg-white p-5 shadow-soft hover:bg-bg-subtle"
          >
            <p className="text-xs uppercase tracking-wide text-subtle">
              {p.kind} · {p.editorialStatus.replaceAll("_", " ")}
            </p>
            <h2 className="mt-1 font-display text-2xl">{p.commonName}</h2>
            <p className="text-sm italic text-muted">{p.scientificName}</p>
            <p className="mt-2 text-sm">{p.botanicalOrigin}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
