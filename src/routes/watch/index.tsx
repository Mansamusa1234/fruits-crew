import { createFileRoute, Link } from "@tanstack/react-router";
import { episodes } from "@/lib/content/episodes";
import { getSong } from "@/lib/content/songs";

export const Route = createFileRoute("/watch/")({ component: WatchIndex });

function WatchIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-4xl">Watch</h1>
      <p className="mt-2 text-muted">Original shorts. High quality. No copied cartoons.</p>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {episodes.map((e) => {
          const song = getSong(e.songSlug);
          return (
            <li key={e.slug}>
              <Link
                to="/watch/$slug"
                params={{ slug: e.slug }}
                className="kid-card block overflow-hidden rounded-[28px] bg-white shadow-soft"
              >
                <img
                  src={song?.poster ?? "/scenes/garden-hero.jpg?v=hq1"}
                  alt=""
                  className="aspect-video w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="font-display text-2xl">{e.title}</h2>
                  <p className="mt-2 text-sm text-muted">{e.synopsis}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
