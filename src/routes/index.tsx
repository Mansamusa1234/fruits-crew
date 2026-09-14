import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  CloudSun,
  Globe2,
  Languages,
  Leaf,
  Music2,
  Shield,
  Sprout,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { characters } from "@/lib/content/characters";
import { plants } from "@/lib/content/plants";
import { songs } from "@/lib/content/songs";

export const Route = createFileRoute("/")({ component: Home });

const CARD_RING = [
  "border-[#e11d74] shadow-[0_10px_0_#e11d74]",
  "border-[#ff8a00] shadow-[0_10px_0_#ff8a00]",
  "border-[#00b4d8] shadow-[0_10px_0_#00b4d8]",
  "border-[#65d126] shadow-[0_10px_0_#65d126]",
  "border-[#c026d3] shadow-[0_10px_0_#c026d3]",
  "border-[#ffe566] shadow-[0_10px_0_#eab308]",
  "border-[#16a34a] shadow-[0_10px_0_#16a34a]",
];

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src="/scenes/garden-hero.jpg"
          alt="Friendly original fruit and nature characters in a sunlit worldwide garden"
          className="h-[min(78vh,720px)] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e11d74] via-[#ff8a00]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 text-white">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-banana">
            Fruits Crew
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold sm:text-6xl">
            The whole living world is one family.
          </h1>
          <p className="mt-3 max-w-xl text-lg">Come meet the world that talks!</p>
          <p className="mt-2 max-w-xl text-white/90">
            Everything is connected. Each one teach one. Learn together. Grow together. Love one
            another.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/farm">Open your farm</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/start">Start here</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/plants">Start Exploring</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/crew">Meet the Crew</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/sing">Sing Together</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="max-w-3xl text-lg text-muted">
          Fruits Crew is a joyful worldwide children’s learning and animation universe where fruits,
          vegetables, seeds, soil, roots, water, weather, plants, animals and the Earth can talk,
          sing and learn together. Caribbean culture sits inside a global family — alongside African,
          British, Asian, European, Middle Eastern, Pacific, Indigenous and other living cultures.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">Meet the Crew</h2>
          <Link to="/crew" className="text-sm font-semibold text-primary">
            All characters
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((c, i) => (
            <Link
              key={c.slug}
              to="/crew/$slug"
              params={{ slug: c.slug }}
              className={`overflow-hidden rounded-[28px] border-4 bg-white ${CARD_RING[i % CARD_RING.length]}`}
            >
              <img src={c.portrait} alt={c.accessibilityDescription} className="aspect-square w-full object-cover" />
              <div className="p-4">
                <h3 className="font-display text-xl">{c.name}</h3>
                <p className="mt-1 text-sm italic text-muted">“{c.catchphrase}”</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl">Fruits and vegetables around the world</h2>
          <Link to="/map" className="text-sm font-semibold text-primary">
            Open the map
          </Link>
        </div>
        <p className="max-w-2xl text-muted">
          Botanical origin, cultural history, and modern farms are listed separately. Never invented
          as one country owning the living world.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {plants.slice(0, 8).map((p, i) => (
            <Link
              key={p.slug}
              to="/plants/$slug"
              params={{ slug: p.slug }}
              className={`rounded-[20px] border-4 bg-white p-4 ${CARD_RING[i % CARD_RING.length]}`}
            >
              <h3 className="font-display text-xl">{p.commonName}</h3>
              <p className="text-sm italic text-muted">{p.scientificName}</p>
              <p className="mt-2 text-sm">{p.botanicalOrigin}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl">Songs for the whole family</h2>
          <Link to="/sing" className="text-sm font-semibold text-primary">
            Sing
          </Link>
        </div>
        <p className="max-w-2xl text-muted">
          Original nursery rhymes with a child question, an adult answer, and a grandparent line.
          Easy chorus. Optional karaoke.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {songs.map((s, i) => (
            <li key={s.slug}>
              <Link
                to="/sing/$slug"
                params={{ slug: s.slug }}
                className={`flex min-h-24 items-center justify-between rounded-[20px] border-4 bg-white px-5 py-4 ${CARD_RING[i % CARD_RING.length]}`}
              >
                <span>
                  <span className="block font-display text-xl">{s.title}</span>
                  <span className="text-sm text-muted">{s.learningObjective}</span>
                </span>
                <Music2 className="size-5 text-primary" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-3xl">Maths, science, weather and money</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <LearnCard
            icon={Sprout}
            title="Science"
            text="Germination, soil, light and water — with sourced plant records."
            to="/watch"
          />
          <LearnCard
            icon={BookOpen}
            title="Maths"
            text="Count mangoes, keep a beat, and practise number without rushing."
            to="/family"
          />
          <LearnCard
            icon={CloudSun}
            title="Weather"
            text="Rain, sun and grow: plants need gifts in the right amount."
            to="/sing"
          />
          <LearnCard
            icon={Leaf}
            title="Money"
            text="Pretend markets only. Needs versus wants. No gambling."
            to="/family"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-3xl">Languages, writing and cultures</h2>
        <p className="mt-3 max-w-2xl text-muted">
          English sits beside other names and scripts. No alphabet is “the alphabet of the world.”
          Pronunciations wait for native-speaker review.
        </p>
        <Link
          to="/languages"
          className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-primary"
        >
          <Languages className="size-4" aria-hidden />
          See plant names in more than one language
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-display text-3xl">Soil, roots, rain, sunlight</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Grandma Soil, Wally Water Drop and Ray of Sunshine teach the hidden helpers: roots that
          hold hands, rain that visits, and light that is patient.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {["grandma-soil", "wally-water", "ray-sunshine", "little-seed"].map((slug) => {
            const c = characters.find((x) => x.slug === slug);
            return c ? (
              <Link
                key={slug}
                to="/crew/$slug"
                params={{ slug }}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-bg-elevated px-4"
              >
                {c.name}
              </Link>
            ) : null;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl">Family time away from the screen</h2>
          <Link to="/family" className="text-sm font-semibold text-primary">
            Activities
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-muted">
          Jar beans, counting walks, rain dances, and a pretend market. Grown-ups and grandparents
          belong in the circle.
        </p>
        <Button asChild className="mt-5" variant="secondary">
          <Link to="/family">
            <Users className="size-4" /> Start a family challenge
          </Link>
        </Button>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[28px] border-4 border-lagoon bg-white p-6 shadow-[0_10px_0_#00b4d8] sm:p-8">
          <Shield className="size-6 text-primary" aria-hidden />
          <h2 className="mt-3 font-display text-3xl">For parents and educators</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Original songs, stories and adventures that turn screen time into family learning. No
            child-to-child chat. No ads. No products sold to children here.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/parents">Parent and safety notes</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/studio">CapCut production board</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function LearnCard({
  icon: Icon,
  title,
  text,
  to,
}: {
  icon: typeof Globe2;
  title: string;
  text: string;
  to: "/watch" | "/family" | "/sing";
}) {
  return (
    <Link to={to} className="rounded-[20px] border-4 border-mango bg-white p-5 shadow-[0_8px_0_#ff8a00]">
      <Icon className="size-5 text-hibiscus" aria-hidden />
      <h3 className="mt-3 font-display text-xl">{title}</h3>
      <p className="mt-1 text-sm text-muted">{text}</p>
    </Link>
  );
}
