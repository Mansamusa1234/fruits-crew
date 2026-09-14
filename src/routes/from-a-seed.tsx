import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/from-a-seed")({ component: FromASeedPage });

function FromASeedPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Little Seed</p>
      <h1 className="mt-2 font-display text-4xl">All that grew, grew from seed</h1>
      <p className="mt-4 text-lg">
        God made living things with seed, so life can grow again.
      </p>
      <p className="mt-4 text-muted">
        A mango holds a seed. A seed holds a tree. A tree holds fruit. Fruit holds another seed.
        That is how a garden remembers tomorrow.
      </p>
      <p className="mt-4 text-muted">
        Animals have families too — eggs, milk, care. Plants and animals, soil and rain, sun and
        child: one living world. Everything is connected.
      </p>
      <blockquote className="mt-8 rounded-[24px] bg-white p-6 text-xl shadow-soft">
        “God put a tomorrow inside me.”
        <footer className="mt-2 text-sm text-muted">Little Seed</footer>
      </blockquote>
      <p className="mt-8 text-muted">
        Created by Darren-neil. Original. For families who want children to see that life is a gift
        that grows.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/crew/$slug" params={{ slug: "little-seed" }} className="font-semibold text-leaf">
          Meet Little Seed
        </Link>
        <Link to="/farm" className="font-semibold text-leaf">
          Plant a seed
        </Link>
        <Link to="/sing/$slug" params={{ slug: "wake-up-little-seed" }} className="font-semibold text-leaf">
          Sing Wake Up, Little Seed
        </Link>
      </div>
    </main>
  );
}
