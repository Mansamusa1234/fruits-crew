import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { KaraokePlayer } from "@/components/karaoke/KaraokePlayer";
import { getSong } from "@/lib/content/songs";

export const Route = createFileRoute("/sing/$slug")({ component: SongPage });

function SongPage() {
  const { slug } = Route.useParams();
  const song = getSong(slug);
  if (!song) throw notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/sing" className="text-sm font-semibold text-primary">
        All songs
      </Link>
      <h1 className="mt-3 font-display text-4xl">{song.title}</h1>
      <p className="mt-2 text-muted">{song.learningObjective}</p>
      <div className="mt-6">
        <KaraokePlayer song={song} />
      </div>
      <dl className="mt-8 space-y-4">
        <Row k="Chorus" v={song.chorus} />
        <Row k="Child question" v={song.childQuestion} />
        <Row k="Adult response" v={song.adultResponse} />
        <Row k="Grandparent wisdom" v={song.grandparentWisdom} />
        <Row k="Physical action" v={song.physicalAction} />
        <Row k="Offline activity" v={song.offlineActivity} />
        <Row k="Dance" v={song.danceSteps.join(" · ")} />
      </dl>
    </main>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">{k}</dt>
      <dd className="mt-1">{v}</dd>
    </div>
  );
}
