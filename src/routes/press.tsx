import { createFileRoute } from "@tanstack/react-router";
import { CopyBlock } from "@/components/CopyBlock";
import { BRAND, pressBoilerplate, socialPosts } from "@/lib/content/marketing";

export const Route = createFileRoute("/press")({ component: PressPage });

function PressPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">Press and brand</h1>
      <p className="mt-3 text-lg text-muted">
        Use this copy exactly. Fruits Crew is original. Created by {BRAND.creator}.
      </p>
      <CopyBlock label="Boilerplate" text={pressBoilerplate} />
      <div className="mt-6 space-y-3">
        <CopyBlock label="Child-facing" text={BRAND.childMessage} />
        <CopyBlock label="Parent-facing" text={BRAND.parentMessage} />
        <CopyBlock label="Core lines" text={BRAND.core.join("\n")} />
      </div>
      <h2 className="mt-10 font-display text-2xl">Ready posts</h2>
      <div className="mt-4 space-y-3">
        {socialPosts.map((p) => (
          <CopyBlock key={p.platform} label={p.platform} text={p.text} />
        ))}
      </div>
      <h2 className="mt-10 font-display text-2xl">Do not say</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
        {BRAND.neverSay.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </main>
  );
}
