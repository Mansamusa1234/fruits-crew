import { createFileRoute, Link } from "@tanstack/react-router";
import { plants } from "@/lib/content/plants";

export const Route = createFileRoute("/plants/")({ component: PlantsPage });

function PlantsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl">Plant explorer</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Botanical origin, cultural history, and modern growing regions are listed separately. Traditional uses
        are not medical advice.
      </p>
      <div className="mt-6 rounded-[20px] border border-warn/30 bg-bg-elevated p-4 text-sm">
        Never eat a wild plant unless a knowledgeable adult has positively identified it as safe.
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((p) => (
          <Link
            key={p.slug}
            to="/plants/$slug"
            params={{ slug: p.slug }}
            className="rounded-[24px] border border-border bg-bg-elevated p-5 shadow-soft hover:bg-bg-subtle"
          >
            <p className="text-xs uppercase tracking-wide text-subtle">{p.editorialStatus}</p>
            <h2 className="mt-1 font-display text-2xl">{p.commonName}</h2>
            <p className="text-sm italic text-muted">{p.scientificName}</p>
            <p className="mt-2 text-sm">{p.botanicalOrigin}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
