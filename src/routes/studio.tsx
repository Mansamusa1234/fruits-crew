import { createFileRoute, Link } from "@tanstack/react-router";
import { CopyBlock } from "@/components/CopyBlock";
import { CHANNELS, launchWeek, youtubePacks } from "@/lib/content/marketing";
import { songs } from "@/lib/content/songs";

export const Route = createFileRoute("/studio")({ component: StudioPage });

const CAPCUT_STEPS = [
  "New CapCut project, 1920×1080, then duplicate as 1080×1920.",
  "Import original storyboard stills and original audio only — never a protected melody.",
  "Captions: child = warm yellow, adult = green, chorus = cream, grandparent = brown.",
  "Keep call-and-response as two colours so families can shout the answer.",
  "Export from the same timeline: 6–8 min story, 2–3 min song, three vertical clips, one bedtime cut with no jump cuts.",
  "Add burned-in title: Fruits Crew — original song.",
  "Adult reviews safety notes, volume, and comments settings (no child-to-child chat) before publishing.",
];

function StudioPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">Studio and launch kit</h1>
      <p className="mt-3 text-muted">
        Full marketing package for original Fruits Crew rhymes, episodes, captions, voices and
        family call-and-response. Created by Darren-neil.
      </p>

      <h2 className="mt-10 font-display text-2xl">Where each piece goes</h2>
      <ul className="mt-4 grid gap-3">
        {CHANNELS.map((c) => (
          <li key={c.name} className="rounded-[16px] border border-border bg-bg-elevated p-4">
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm text-muted">{c.format}</p>
            <p className="mt-1 text-sm">{c.goal}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-display text-2xl">CapCut workflow</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5">
        {CAPCUT_STEPS.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <h2 className="mt-10 font-display text-2xl">Launch week</h2>
      <ol className="mt-4 space-y-2">
        {launchWeek.map((d) => (
          <li key={d.day}>
            <span className="font-semibold">{d.day}:</span> {d.item}
          </li>
        ))}
      </ol>

      <h2 className="mt-10 font-display text-2xl">YouTube paste packs</h2>
      <div className="mt-4 space-y-6">
        {youtubePacks.map((p) => (
          <section key={p.slug} className="space-y-3">
            <h3 className="font-display text-xl">{p.title}</h3>
            <CopyBlock label="Title" text={p.title} />
            <CopyBlock label="Description" text={p.description} />
            <CopyBlock label="Tags" text={p.tags.join(", ")} />
            <CopyBlock label="Thumbnail" text={p.thumbnail} />
            <CopyBlock label="End screen" text={p.endScreen} />
          </section>
        ))}
      </div>

      <h2 className="mt-10 font-display text-2xl">Song captions</h2>
      <ul className="mt-3 space-y-2">
        {songs.map((s) => (
          <li key={s.slug} className="rounded-[16px] border border-border bg-bg-elevated p-4">
            <p className="font-display text-lg">{s.title}</p>
            <p className="text-sm text-muted">{s.chorus}</p>
            <p className="mt-2 text-sm">
              Child: {s.childQuestion} Adult: {s.adultResponse}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm">
        Also see <Link to="/press">press copy</Link> and <Link to="/schools">school lessons</Link>.
      </p>
    </main>
  );
}
