import { createFileRoute, Link } from "@tanstack/react-router";
import { characters } from "@/lib/content/characters";

export const Route = createFileRoute("/crew/")({ component: CrewPage });

function CrewPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">Original characters</p>
      <h1 className="mt-2 font-display text-4xl">Meet the Crew</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Seven friends from fruit, soil, water and sunlight. They learn from each other — and from you.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((c) => (
          <Link
            key={c.slug}
            to="/crew/$slug"
            params={{ slug: c.slug }}
            className="overflow-hidden rounded-[28px] border border-border bg-bg-elevated shadow-soft"
          >
            <img src={c.portrait} alt={c.accessibilityDescription} className="aspect-square w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-2xl">{c.name}</h2>
              <p className="text-sm text-primary">{c.learningSpeciality}</p>
              <p className="mt-2 text-sm italic text-muted">“{c.catchphrase}”</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
