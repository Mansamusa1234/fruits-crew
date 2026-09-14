import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { characters } from "@/lib/content/characters";
import { getEpisode } from "@/lib/content/episodes";
import { getSong } from "@/lib/content/songs";

export const Route = createFileRoute("/watch/$slug")({ component: EpisodePage });

function EpisodePage() {
  const { slug } = Route.useParams();
  const e = getEpisode(slug);
  if (!e) throw notFound();
  const song = getSong(e.songSlug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">Pilot episode</p>
      <h1 className="mt-2 font-display text-4xl">{e.title}</h1>
      {song?.videoUrl ? (
        <video
          className="mt-6 aspect-video w-full rounded-[28px] bg-black object-cover"
          src={song.videoUrl}
          poster={song.poster}
          controls
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={song?.poster ?? "/scenes/garden-hero.jpg"}
          alt=""
          className="mt-6 aspect-video w-full rounded-[28px] object-cover"
        />
      )}
      <p className="mt-6 text-lg">{e.synopsis}</p>
      <Block title="1. The mystery">{e.mystery}</Block>
      <Block title="2. Predict">{e.predictionQuestion}</Block>
      <Block title="3. Nature explains">{e.natureExplanation}</Block>
      <Block title="4. Cooperation">{e.cooperationBeat}</Block>
      <Block title="5. Song">
        <Link to="/sing/$slug" params={{ slug: e.songSlug }} className="font-semibold text-primary">
          Sing along
        </Link>
      </Block>
      <Block title="6. Offline activity">{e.offlineActivity}</Block>
      <Block title="7. Parent guide">{e.parentGuide}</Block>
      <h2 className="mt-10 font-display text-2xl">In this story</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {e.characters.map((slug) => {
          const c = characters.find((x) => x.slug === slug);
          return c ? (
            <li key={slug}>
              <Link
                to="/crew/$slug"
                params={{ slug }}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-bg-elevated px-3 text-sm"
              >
                {c.name}
              </Link>
            </li>
          ) : null;
        })}
      </ul>
      <h2 className="mt-10 font-display text-2xl">References</h2>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted">
        {e.sources.map((s) => (
          <li key={s.title}>
            {s.publisher}: {s.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-2 text-muted">{children}</div>
    </section>
  );
}
