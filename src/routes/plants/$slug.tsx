import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPlant } from "@/lib/content/plants";

export const Route = createFileRoute("/plants/$slug")({ component: PlantPage });

function PlantPage() {
  const { slug } = Route.useParams();
  const p = getPlant(slug);
  if (!p) throw notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/plants" className="text-sm font-semibold text-primary">
        All plants
      </Link>
      <h1 className="mt-4 font-display text-4xl">{p.commonName}</h1>
      <p className="italic text-muted">{p.scientificName}</p>
      <p className="mt-2 text-xs uppercase tracking-wide text-subtle">
        {p.kind} · Evidence labels on each claim · {p.editorialStatus.replaceAll("_", " ")}
      </p>
      <Section title="Botanical origin">{p.botanicalOrigin}</Section>
      <Section title="Present growing regions">{p.presentGrowingRegions.join(", ")}</Section>
      <Section title="Climate">{p.climate}</Section>
      <Section title="Soil">{p.soilRequirements}</Section>
      <Section title="Seed and growing cycle">{p.seedAndGrowingCycle}</Section>
      <Section title="Seasons">{p.seasons}</Section>
      <Section title="Growers">{p.growersAndCommunities}</Section>
      <Section title="Harvest">{p.harvestingMethod}</Section>
      <Section title="Farm to family">{p.farmToFamily}</Section>
      <Section title="Transport and food miles">{p.transportAndFoodMiles}</Section>
      <Section title="Historical movement">{p.historicalMovement}</Section>
      <Section title="Cultural history">{p.culturalHistory}</Section>
      <Section title="Traditional recipes">{p.traditionalRecipes.join(" · ")}</Section>
      <Section title="Nutrition">{p.nutrition}</Section>
      <Section title="Safety">{p.safetyAndAllergies}</Section>
      <Section title="Names">
        {p.indigenousAndHistoricalNames.join(" · ")}
        {p.languages.map((l) => (
          <span key={l.language} className="mt-1 block text-sm text-muted">
            {l.language}: {l.name}
            {l.note ? ` (${l.note})` : ""}
          </span>
        ))}
      </Section>
      <h2 className="mt-10 font-display text-2xl">Claims and sources</h2>
      <ul className="mt-3 space-y-4">
        {p.claims.map((c) => (
          <li key={c.id} className="rounded-[20px] border border-border bg-bg-elevated p-4">
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
