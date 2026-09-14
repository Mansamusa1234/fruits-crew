import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCoreCharacters } from "@/data/characters";

export const metadata: Metadata = {
  title: "Meet the Crew",
  description:
    "Meet the Fruits Crew — Soursop, Banana, Mango, Coconut, Pineapple, Fig, Dandelion and Little Seed.",
};

export default function CharactersPage() {
  const characters = getCoreCharacters();

  return (
    <div className="min-h-screen bg-gradient-to-b from-crew-sun-50 via-white to-crew-green-50">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-crew-green-600">
            Fruits Crew
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-crew-soil-900 sm:text-4xl">
            Meet the Crew
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-crew-soil-600">
            Eight friends who learn from each other — and from you. Tap a character to learn more.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((c) => (
            <Link
              key={c.slug}
              href={`/characters/${c.slug}`}
              className="group rounded-2xl border border-crew-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-crew-green-200 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition group-hover:scale-110"
                  style={{ backgroundColor: `${c.colour_palette.secondary}40` }}
                  aria-hidden
                >
                  {c.emoji}
                </span>
                <div>
                  <h2 className="font-bold text-crew-soil-900 group-hover:text-crew-green-700">
                    {c.name}
                  </h2>
                  <p className="text-sm font-medium text-crew-green-600">{c.learning_role.split("—")[0].trim()}</p>
                </div>
              </div>
              <p className="mt-3 text-sm italic text-crew-soil-600">“{c.catchphrase}”</p>
              <p className="mt-3 text-xs font-medium text-crew-green-600 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-crew-soil-500">
          Everything Is Connected · Each One Teach One
        </p>
      </main>

      <Footer />
    </div>
  );
}
