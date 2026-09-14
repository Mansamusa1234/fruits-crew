import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/parents")({ component: ParentsPage });

function ParentsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-4xl">Parents and carers</h1>
      <p className="mt-3 text-lg text-muted">
        Original songs, stories and adventures that turn screen time into family learning. Designed with UK child-safety
        principles in mind.
      </p>
      <section className="mt-8 space-y-4">
        <h2 className="font-display text-2xl">How we keep children safer</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>No child-to-child messaging.</li>
          <li>No behavioural advertising in this app.</li>
          <li>No products sold to children here. Memberships stay adult-controlled later.</li>
          <li>Minimal data: this first release stores nothing on a server.</li>
          <li>Wild-plant pages never tell a child a plant is safe to eat from a photo.</li>
          <li>Pretend markets only. No gambling and no real-money trading for children.</li>
          <li>External source links are for adults. Use them together.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="font-display text-2xl">Age stages</h2>
        <ul className="mt-3 space-y-2 text-muted">
          <li>2–4: songs, movement, colours, counting, kindness.</li>
          <li>5–7: stories, simple experiments, pretend money.</li>
          <li>8–10: ecosystems, projects, budgeting.</li>
          <li>11–13: media literacy and careful economics — still not investing advice.</li>
          <li>Family: grandparents included on purpose.</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="font-display text-2xl">What still needs legal review</h2>
        <p className="mt-2 text-muted">
          Before a public launch: UK GDPR, Age Appropriate Design Code, COPPA, and app-store child
          policies. This page is a product design, not legal advice.
        </p>
      </section>
      <p className="mt-8">
        <Link to="/family" className="font-semibold text-primary">
          Try a family activity
        </Link>
      </p>
    </main>
  );
}
