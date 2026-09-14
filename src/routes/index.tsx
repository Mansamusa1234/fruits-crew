import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { animals } from "@/lib/content/animals";
import { characters } from "@/lib/content/characters";
import { plants } from "@/lib/content/plants";
import { songs } from "@/lib/content/songs";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src="/scenes/garden-hero.jpg"
          alt="Original Fruits Crew characters in a sunlit worldwide garden"
          className="h-[min(88vh,820px)] w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 text-white sm:pb-14">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.32em] text-banana">
            Fruits Crew
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">
            Come meet the world that talks.
          </h1>
          <p className="mt-3 max-w-xl text-lg text-white/90">
            Original songs, stories and a living farm. Everything is connected.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/watch/$slug" params={{ slug: "jump-in-and-scrub" }}>
                <Play className="size-4" /> Watch now
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/sing/$slug" params={{ slug: "jump-in-and-scrub" }}>
                Sing together
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="overflow-hidden rounded-[28px] bg-black shadow-soft">
          <video
            className="aspect-video w-full object-cover"
            src="/watch/jump-in-and-scrub.mp4"
            poster="/songs/jump-in-and-scrub.jpg"
            controls
            playsInline
            preload="metadata"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Episode</p>
            <h2 className="font-display text-3xl">Jump In and Scrub</h2>
            <p className="mt-1 text-muted">Original bath song. Fill the tap. Jump in. Wash your hands.</p>
          </div>
          <Button asChild>
            <Link to="/watch/$slug" params={{ slug: "jump-in-and-scrub" }}>
              Open episode
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">Meet the Crew</h2>
          <Link to="/crew" className="text-sm font-semibold text-primary">
            All characters
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-5">
          {characters.map((c) => (
            <Link
              key={c.slug}
              to="/crew/$slug"
              params={{ slug: c.slug }}
              className="overflow-hidden rounded-[24px] bg-white shadow-soft"
            >
              <img src={c.portrait} alt={c.accessibilityDescription} className="aspect-square w-full object-cover" />
              <div className="p-3">
                <h3 className="font-display text-lg">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl">Sing</h2>
          <Link to="/sing" className="text-sm font-semibold text-primary">
            All songs
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {songs.map((s) => (
            <Link
              key={s.slug}
              to="/sing/$slug"
              params={{ slug: s.slug }}
              className="overflow-hidden rounded-[24px] bg-white shadow-soft"
            >
              {s.poster ? (
                <img src={s.poster} alt="" className="aspect-video w-full object-cover" />
              ) : (
                <img src="/scenes/garden-hero.jpg" alt="" className="aspect-video w-full object-cover" />
              )}
              <div className="p-4">
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.chorus}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl">Your farm</h2>
          <Link to="/farm" className="text-sm font-semibold text-primary">
            Open farm
          </Link>
        </div>
        <Link to="/farm" className="block overflow-hidden rounded-[28px] bg-white shadow-soft">
          <img
            src="/farm/overview.jpg"
            alt="Working family farm with raised beds, water tank and greenhouse"
            className="h-[min(42vh,380px)] w-full object-cover"
          />
          <div className="p-5">
            <p className="text-muted">Plant a seed. Call the rain. Call the sun. Watch it grow.</p>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl">Around the world</h2>
          <Link to="/plants" className="text-sm font-semibold text-primary">
            {plants.length}+ plants
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {plants.slice(0, 8).map((p) => (
            <Link
              key={p.slug}
              to="/plants/$slug"
              params={{ slug: p.slug }}
              className="rounded-[20px] bg-white p-4 shadow-soft"
            >
              <h3 className="font-display text-xl">{p.commonName}</h3>
              <p className="text-sm italic text-muted">{p.scientificName}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl">Fish, birds, bees and the whole living world</h2>
          <Link to="/animals" className="text-sm font-semibold text-primary">
            {animals.length} animals
          </Link>
        </div>
        <p className="mb-4 max-w-2xl text-muted">
          There are more species than any one site can hold. This is a worldwide family to start —
          oceans, rivers, soil and sky — each one connected to the plants.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {animals.slice(0, 8).map((a) => (
            <Link
              key={a.slug}
              to="/animals/$slug"
              params={{ slug: a.slug }}
              className="rounded-[20px] bg-white p-4 shadow-soft"
            >
              <p className="text-xs uppercase tracking-wide text-subtle">{a.kind}</p>
              <h3 className="font-display text-xl">{a.commonName}</h3>
              <p className="text-sm italic text-muted">{a.scientificName}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[28px] bg-white p-6 shadow-soft sm:p-8">
          <Shield className="size-6 text-primary" aria-hidden />
          <h2 className="mt-3 font-display text-3xl">For parents</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Original characters, songs and stories. No ads. No products sold to children here.
            Sung studio masters are made in CapCut. This site is the world they live in.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/parents">Safety notes</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/studio">Studio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
