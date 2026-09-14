import { createFileRoute, Link } from "@tanstack/react-router";
import { episodes } from "@/lib/content/episodes";

export const Route = createFileRoute("/watch/")({ component: WatchIndex });

function WatchIndex() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">Watch</h1>
      <p className="mt-2 text-muted">Original stories. No copied cartoons.</p>
      <ul className="mt-6 space-y-4">
        {episodes.map((e) => (
          <li key={e.slug}>
            <Link
              to="/watch/$slug"
              params={{ slug: e.slug }}
              className="block rounded-[24px] border border-border bg-bg-elevated p-5 shadow-soft"
            >
              <h2 className="font-display text-2xl">{e.title}</h2>
              <p className="mt-2 text-muted">{e.synopsis}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
