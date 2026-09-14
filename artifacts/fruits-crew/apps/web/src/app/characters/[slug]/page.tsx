import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCharacterBySlug, getCoreCharacters } from "@/data/characters";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCoreCharacters().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) return { title: "Character not found" };
  return {
    title: character.name,
    description: `${character.name} — ${character.learning_role}. ${character.catchphrase}`,
  };
}

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) notFound();

  const others = getCoreCharacters().filter((c) => c.slug !== slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-crew-sun-50 via-white to-crew-green-50">
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Back link */}
        <Link
          href="/characters"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-crew-green-700 hover:text-crew-green-800"
        >
          ← All characters
        </Link>

        {/* Hero */}
        <div
          className="rounded-3xl border border-crew-green-100 bg-white p-6 shadow-sm sm:p-8"
          style={{ borderTopColor: character.colour_palette.primary, borderTopWidth: 4 }}
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span
              className="flex h-20 w-20 items-center justify-center rounded-3xl text-5xl"
              style={{ backgroundColor: `${character.colour_palette.secondary}50` }}
              aria-hidden
            >
              {character.emoji}
            </span>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-crew-soil-900">
                {character.name}
              </h1>
              <p className="mt-1 text-crew-green-700">{character.learning_role}</p>
              <p className="mt-2 text-sm text-crew-soil-500">
                <span className="font-medium">Species:</span> {character.species}
              </p>
            </div>
          </div>

          <blockquote className="mt-6 border-l-4 border-crew-green-300 pl-4 text-lg italic text-crew-soil-700">
            “{character.catchphrase}”
          </blockquote>
        </div>

        {/* Personality */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-crew-soil-900">Personality</h2>
          <p className="mt-2 text-crew-soil-600">{character.age_personality}</p>
        </section>

        {/* Backstory */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-crew-soil-900">Story</h2>
          <p className="mt-2 text-crew-soil-600">{character.backstory}</p>
        </section>

        {/* Looks */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-crew-soil-900">How they look</h2>
          <p className="mt-2 text-crew-soil-600">{character.physical_description}</p>
        </section>

        {/* Strengths */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-crew-soil-900">What they teach</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {character.strengths.map((s) => (
              <li
                key={s}
                className="rounded-full bg-crew-green-100 px-3 py-1 text-sm font-medium text-crew-green-800"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* Voice */}
        <section className="mt-8 rounded-2xl bg-crew-green-50/80 p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-crew-green-800">
            Voice & accent
          </h2>
          <p className="mt-1 text-crew-soil-700">
            {character.voice_style} · {character.accent}
          </p>
        </section>

        {/* Other characters */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-crew-soil-900">Meet more of the Crew</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/characters/${c.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-crew-green-100 bg-white px-3 py-2 text-sm font-medium text-crew-soil-800 shadow-sm transition hover:border-crew-green-300 hover:bg-crew-green-50"
              >
                <span aria-hidden>{c.emoji}</span>
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-12 text-center text-sm text-crew-soil-500">
          Everything Is Connected · Each One Teach One
        </p>
      </main>

      <Footer />
    </div>
  );
}
