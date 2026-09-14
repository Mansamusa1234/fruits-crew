import { createFileRoute } from "@tanstack/react-router";
import { episodes } from "@/lib/content/episodes";
import { songs } from "@/lib/content/songs";

export const Route = createFileRoute("/studio")({ component: StudioPage });

const CAPCUT_STEPS = [
  "Import the storyboard stills and original audio sketch (never a protected melody).",
  "Lay captions for child, adult, chorus and grandparent lines.",
  "Keep call-and-response as two caption colours.",
  "Export a 6–8 minute story, a 2–3 minute song, and three vertical clips from the same timeline.",
  "Add a calm bedtime cut (no jump cuts) and a movement cut.",
  "Adult reviews safety notes before publishing.",
];

function StudioPage() {
  const ep = episodes[0];
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">CapCut production board</h1>
      <p className="mt-3 text-muted">
        Original Fruits Crew rhymes and episodes only. This is a family production workflow — not a
        copy of another brand’s songs or characters.
      </p>
      <ol className="mt-8 list-decimal space-y-2 pl-5">
        {CAPCUT_STEPS.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <h2 className="mt-10 font-display text-2xl">Pilot pack — {ep.title}</h2>
      <dl className="mt-4 space-y-3 text-sm">
        <Row k="YouTube title" v={ep.marketing.youtubeTitle} />
        <Row k="Description" v={ep.marketing.description} />
        <Row k="Thumbnail" v={ep.marketing.thumbnailConcept} />
        <Row k="Learning" v={ep.marketing.learningObjective} />
        <Row k="Age" v={ep.marketing.ageRange} />
        <Row k="Parent CTA" v={ep.marketing.parentCta} />
        <Row k="Safety" v={ep.marketing.safetyNotes} />
        <Row k="Copyright" v={ep.marketing.copyrightOwner} />
        <Row k="Music" v={ep.marketing.musicOwner} />
      </dl>
      <h2 className="mt-10 font-display text-2xl">Song captions</h2>
      <ul className="mt-3 space-y-2">
        {songs.map((s) => (
          <li key={s.slug} className="rounded-[16px] border border-border bg-bg-elevated p-4">
            <p className="font-display text-lg">{s.title}</p>
            <p className="text-sm text-muted">{s.chorus}</p>
          </li>
        ))}
      </ul>
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
