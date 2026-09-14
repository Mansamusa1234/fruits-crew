import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getAnimal } from "@/lib/content/animals";

export const Route = createFileRoute("/animals/$slug")({ component: AnimalPage });

function AnimalPage() {
  const { slug } = Route.useParams();
  const a = getAnimal(slug);
  if (!a) throw notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/animals" className="text-sm font-semibold text-primary">
        All animals
      </Link>
      <h1 className="mt-4 font-display text-4xl">{a.commonName}</h1>
      <p className="italic text-muted">{a.scientificName}</p>
      <p className="mt-2 text-xs uppercase tracking-wide text-subtle">
        {a.kind} · {a.habitat} · {a.editorialStatus.replaceAll("_", " ")}
      </p>
      <Section title="Where they live">{a.nativeRange}</Section>
      <Section title="What they eat">{a.diet}</Section>
      <Section title="Everything is connected">{a.connected}</Section>
      <Section title="A fact for children">{a.childFact}</Section>
      <Section title="Care and conservation">{a.conservation}</Section>
      <Section title="Stay safe">{a.safety}</Section>
      {a.names.length ? <Section title="Other names">{a.names.join(" · ")}</Section> : null}
      <h2 className="mt-10 font-display text-2xl">Claims and sources</h2>
      <ul className="mt-3 space-y-4">
        {a.claims.map((c) => (
          <li key={c.id} className="rounded-[20px] bg-white p-4 shadow-soft">
            <p>{c.text}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-primary">
              {c.evidence.replaceAll("_", " ")} · {c.category}
            </p>
            <ul className="mt-2 text-sm text-muted">
              {c.sources.map((s) => (
                <li key={s.title}>
                  {s.url ? (
                    <a href={s.url} className="underline" target="_blank" rel="noreferrer">
                      {s.publisher}: {s.title}
                    </a>
                  ) : (
                    <span>
                      {s.publisher}: {s.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">
        <Link to="/plants" className="font-semibold text-leaf">
          See the plants they live with
        </Link>
      </p>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-subtle">{title}</h2>
      <div className="mt-1">{children}</div>
    </section>
  );
}
