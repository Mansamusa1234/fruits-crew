import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { KaraokePlayer } from "@/components/karaoke/KaraokePlayer";
import { songPack } from "@/lib/content/song-i18n";
import { getSong } from "@/lib/content/songs";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/sing/$slug")({ component: SongPage });

function SongPage() {
  const { slug } = Route.useParams();
  const song = getSong(slug);
  if (!song) throw notFound();
  const { locale, t } = useLanguage();
  const pack = songPack(song.slug, locale);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/sing" className="text-sm font-semibold text-primary">
        {t("allSongs")}
      </Link>
      <h1 className="mt-3 font-display text-4xl">{pack?.title ?? song.title}</h1>
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
