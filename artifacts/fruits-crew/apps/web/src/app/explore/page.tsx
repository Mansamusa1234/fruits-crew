import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Explore",
  description: "Choose your adventure — characters, plants, stories, maths and more.",
};

const CARDS = [
  {
    href: "/characters",
    emoji: "🍌",
    title: "Meet the Crew",
    description: "Soursop, Banana, Mango and friends",
  },
  {
    href: "/plants",
    emoji: "🌿",
    title: "Plant Explorer",
    description: "Caribbean, African, British & global plants",
  },
  {
    href: "/characters/little-seed",
    emoji: "🌱",
    title: "Little Seed",
    description: "Ask why, how, and how do we know?",
  },
  {
    href: "/characters/dandelion",
    emoji: "🌼",
    title: "Dandelion’s Story",
    description: "Something common can still be extraordinary",
  },
  {
    href: "/plants/dandelion",
    emoji: "🔎",
    title: "Investigate a Plant",
    description: "Start with the dandelion",
  },
  {
    href: "/#parents",
    emoji: "👨‍👩‍👧",
    title: "Parents & Teachers",
    description: "Progress, safety and classroom tools",
  },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-crew-sun-50 via-white to-crew-green-50">
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-crew-green-600">
            Back to Nature
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-crew-soil-900 sm:text-4xl">
            Choose your adventure
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-crew-soil-600">
            Everything Is Connected. Pick a path and start exploring.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="flex items-start gap-4 rounded-2xl border border-crew-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-crew-green-200 hover:shadow-md"
            >
              <span className="text-4xl" aria-hidden>
                {card.emoji}
              </span>
              <div>
                <h2 className="font-bold text-crew-soil-900">{card.title}</h2>
                <p className="mt-1 text-sm text-crew-soil-600">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center text-sm font-medium text-crew-green-700">
          Each One Teach One
        </p>
      </main>

      <Footer />
    </div>
  );
}
