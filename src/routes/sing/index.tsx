import { createFileRoute, Link } from "@tanstack/react-router";
import { songs } from "@/lib/content/songs";

export const Route = createFileRoute("/sing/")({ component: SingIndex });

function SingIndex() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">Sing</h1>
      <p className="mt-2 text-muted">
        Original Fruits Crew songs. Easy chorus, a child question, an adult answer, and a grandparent line.
      </p>
      <ul className="mt-6 space-y-4">
        {songs.map((s) => (
          <li key={s.slug}>
            <Link
              to="/sing/$slug"
              params={{ slug: s.slug }}
              className="block rounded-[24px] border border-border bg-bg-elevated p-5 shadow-soft"
            >
              <h2 className="font-display text-2xl">{s.title}</h2>
              <p className="mt-1 text-sm text-muted">{s.learningObjective}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
