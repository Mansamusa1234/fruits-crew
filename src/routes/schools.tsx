import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { schoolLessons } from "@/lib/content/marketing";

export const Route = createFileRoute("/schools")({ component: SchoolsPage });

function SchoolsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">Schools and libraries</h1>
      <p className="mt-3 text-lg text-muted">
        Short circle-time lessons. Original songs. No tests sold to children. Adults stay in the
        room.
      </p>
      <ul className="mt-8 space-y-4">
        {schoolLessons.map((l) => (
          <li key={l.title} className="rounded-[20px] border border-border bg-bg-elevated p-5">
            <h2 className="font-display text-2xl">{l.title}</h2>
            <p className="mt-1 text-sm text-muted">
              {l.minutes} · {l.ages}
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-5">
              {l.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
      <Button asChild className="mt-8">
        <Link to="/parents">Safety notes for educators</Link>
      </Button>
    </main>
  );
}
