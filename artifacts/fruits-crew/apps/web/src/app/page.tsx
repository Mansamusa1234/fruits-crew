import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCoreCharacters } from "@/data/characters";

const FEATURES = [
  { title: "Watch", emoji: "📺", description: "Stories that make you ask why", href: "/explore" },
  { title: "Explore", emoji: "🌍", description: "Plants, places and ecosystems", href: "/plants" },
  { title: "Play", emoji: "🎮", description: "Games that teach maths & nature", href: "/explore" },
  { title: "Grow", emoji: "🌱", description: "Your own virtual garden", href: "/explore" },
  { title: "Sing", emoji: "🎵", description: "Original songs & rhythms", href: "/explore" },
  { title: "Investigate", emoji: "🔎", description: "Evidence, history & mystery", href: "/plants" },
];

export default function HomePage() {
  const characters = getCoreCharacters();

  return (
    <div className="min-h-screen bg-gradient-to-b from-crew-sun-50 via-white to-crew-green-50">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-crew-green-600">
              Back to Nature
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-crew-soil-900 sm:text-5xl lg:text-6xl">
              Everything Is{" "}
              <span className="bg-gradient-to-r from-crew-green-600 to-crew-sun-500 bg-clip-text text-transparent">
                Connected
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-crew-soil-600 sm:text-xl">
              A joyful children’s universe where fruit characters, wild plants, bees and seeds
              teach mathematics, music, ecosystems and curiosity — without ever feeling like a
              worksheet.
            </p>
            <p className="mt-3 text-base font-medium text-crew-green-700">
              Each One Teach One
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/explore"
                className="inline-flex w-full items-center justify-center rounded-full bg-crew-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-crew-green-600/25 transition hover:bg-crew-green-700 sm:w-auto"
              >
                Start Exploring
              </Link>
              <Link
                href="/characters"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-crew-green-200 bg-white px-8 py-3.5 text-base font-semibold text-crew-green-800 transition hover:border-crew-green-300 hover:bg-crew-green-50 sm:w-auto"
              >
                Meet the Crew
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute -left-8 top-20 hidden text-6xl opacity-20 sm:block" aria-hidden>
            🍌
          </div>
          <div className="pointer-events-none absolute -right-4 top-32 hidden text-5xl opacity-20 sm:block" aria-hidden>
            🥭
          </div>
          <div className="pointer-events-none absolute bottom-10 left-1/4 hidden text-4xl opacity-15 sm:block" aria-hidden>
            🌱
          </div>
        </section>

        {/* Feature cards */}
        <section id="explore" className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-crew-soil-900 sm:text-3xl">
              Today’s Adventure
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {FEATURES.map((f) => (
                <Link
                  key={f.title}
                  href={f.href}
                  className="group flex flex-col items-center rounded-2xl border border-crew-green-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-crew-green-200 hover:shadow-md"
                >
                  <span className="text-3xl transition group-hover:scale-110" aria-hidden>
                    {f.emoji}
                  </span>
                  <span className="mt-2 text-sm font-bold text-crew-soil-800">{f.title}</span>
                  <span className="mt-1 text-xs text-crew-soil-500">{f.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Crew */}
        <section id="crew" className="bg-crew-green-50/50 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-crew-soil-900 sm:text-3xl">
                Meet the Fruits Crew
              </h2>
              <p className="mt-2 text-crew-soil-600">
                Eight friends who learn from each other — and from you.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {characters.map((c) => (
                <Link
                  key={c.slug}
                  href={`/characters/${c.slug}`}
                  className="rounded-2xl border border-crew-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-4xl" aria-hidden>
                      {c.emoji}
                    </span>
                    <div>
                      <h3 className="font-bold text-crew-soil-900">{c.name}</h3>
                      <p className="text-sm font-medium text-crew-green-600">
                        {c.learning_role.split("—")[0].trim()}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm italic text-crew-soil-600">“{c.catchphrase}”</p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/characters"
                className="inline-flex items-center gap-1 text-sm font-semibold text-crew-green-700 hover:text-crew-green-800"
              >
                See all characters
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Core message */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-crew-green-600 to-crew-green-800 px-6 py-12 text-center text-white shadow-xl sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Everything Is Connected</h2>
            <p className="mt-4 text-crew-green-100">
              From a tiny seed under the soil to the oceans, forests, bees and children of the
              world — Fruits Crew shows that nature is one living system. We investigate, we
              share, and we care.
            </p>
            <p className="mt-6 text-lg font-semibold">Each One Teach One</p>
          </div>
        </section>

        {/* Parents & Teachers */}
        <section id="parents" className="border-t border-crew-green-100 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-crew-soil-900 sm:text-3xl">
              For Parents & Teachers
            </h2>
            <p className="mt-4 text-crew-soil-600">
              Age-banded learning (Sprouts → Investigators), progress you can see, evidence-based
              content, and strong child-safety design. No behavioural advertising. Parental
              controls built in from day one.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="rounded-full bg-crew-soil-800 px-6 py-3 text-sm font-semibold text-white hover:bg-crew-soil-900"
              >
                Start Exploring
              </Link>
              <Link
                href="/plants"
                className="rounded-full border border-crew-soil-300 px-6 py-3 text-sm font-semibold text-crew-soil-800 hover:bg-crew-soil-50"
              >
                Plant Encyclopedia
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
