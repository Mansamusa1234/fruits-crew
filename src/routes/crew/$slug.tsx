import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { characters, getCharacter } from "@/lib/content/characters";

export const Route = createFileRoute("/crew/$slug")({ component: CharacterPage });

function CharacterPage() {
  const { slug } = Route.useParams();
  const c = getCharacter(slug);
  if (!c) throw notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/crew" className="text-sm font-semibold text-primary">
        All characters
      </Link>
      <div className="mt-4 overflow-hidden rounded-[28px] border border-border bg-bg-elevated shadow-soft">
        <img src={c.portrait} alt={c.accessibilityDescription} className="aspect-square w-full object-cover sm:aspect-[5/4]" />
        <div className="p-6">
          <h1 className="font-display text-4xl">{c.name}</h1>
          <p className="mt-2 text-primary">{c.learningSpeciality}</p>
          <blockquote className="mt-4 border-l-4 border-primary pl-4 font-display text-xl italic">
            {c.catchphrase}
          </blockquote>
        </div>
      </div>
      <dl className="mt-8 space-y-5">
        <Item label="Species or element" value={c.speciesOrElement} />
        <Item label="Region" value={c.region} />
        <Item label="Botanical origin" value={c.botanicalOrigin} />
        <Item label="Personality" value={c.personality} />
        <Item label="Voice" value={c.voiceDirection} />
        <Item label="Textures" value={c.textures} />
      </dl>
      <h2 className="mt-10 font-display text-2xl">Friends</h2>
      <ul className="mt-3 space-y-2 text-muted">
        {Object.entries(c.relationships).map(([key, val]) => (
          <li key={key}>
            <Link to="/crew/$slug" params={{ slug: key }} className="font-medium text-primary">
              {characters.find((x) => x.slug === key)?.name ?? key}
            </Link>
            {" — "}
            {val}
          </li>
        ))}
      </ul>
      <h2 className="mt-10 font-display text-2xl">Animation states</h2>
      <p className="mt-2 text-sm text-muted">{c.animationStates.join(" · ")}</p>
    </main>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}
