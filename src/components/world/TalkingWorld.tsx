import { useEffect, useState } from "react";

const LINES = [
  { who: "Bee", say: "I visit the flower so fruit can grow!", href: "/animals/honeybee", img: "/world/bee.jpg?v=hq1" },
  { who: "Butterfly", say: "I was a caterpillar. I changed!", href: "/animals/monarch", img: "/world/butterfly.jpg?v=hq1" },
  { who: "Worm", say: "I turn the soil for Little Seed!", href: "/animals/earthworm", img: "/world/worm.jpg?v=hq1" },
  { who: "Fish", say: "I clean the river!", href: "/animals/clownfish", img: "/world/clownfish.jpg?v=hq1" },
  { who: "Little Seed", say: "God put a tomorrow inside me!", href: "/from-a-seed", img: "/characters/little-seed.jpg?v=hq1" },
] as const;

export function TalkingWorld() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % LINES.length), 3200);
    return () => window.clearInterval(t);
  }, []);
  const line = LINES[i];

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8">
      <div className="overflow-hidden rounded-[32px] bg-lagoon px-5 py-8 text-white shadow-soft sm:px-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-banana">
          Everything talks
        </p>
        <img
          key={line.who}
          src={line.img}
          alt=""
          className="bob mx-auto mt-5 h-28 w-28 rounded-full object-cover shadow-lg sm:h-36 sm:w-36"
        />
        <p className="talk-bubble mx-auto mt-4 max-w-2xl text-center font-display text-3xl sm:text-4xl">
          “{line.say}”
        </p>
        <p className="mt-3 text-center text-lg">— {line.who}</p>
        <p className="mt-5 text-center">
          <a href={line.href} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-leaf">
            Meet {line.who}
          </a>
        </p>
      </div>
    </section>
  );
}
