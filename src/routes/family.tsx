import { createFileRoute } from "@tanstack/react-router";
import { MangoCount } from "@/components/games/MangoCount";
import { activities } from "@/lib/content/activities";

export const Route = createFileRoute("/family")({ component: FamilyPage });

function FamilyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">Family challenges</h1>
      <p className="mt-2 text-muted">
        Short activities for children, parents and grandparents. Pretend markets never use real money.
      </p>
      <div className="mt-8">
        <MangoCount />
      </div>
      <ul className="mt-8 space-y-5">
        {activities.map((a) => (
          <li
            key={a.slug}
            id={a.slug}
            className="scroll-mt-24 rounded-[24px] border border-border bg-bg-elevated p-5 shadow-soft"
          >
            <h2 className="font-display text-2xl">{a.title}</h2>
            <p className="text-sm text-muted">
              {a.minutes} minutes · {a.ageBands.join(", ")}
            </p>
            <p className="mt-2">{a.why}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-subtle">You need</p>
            <p>{a.whatYouNeed.join(" · ")}</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5">
              {a.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-warn">{a.safety}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
