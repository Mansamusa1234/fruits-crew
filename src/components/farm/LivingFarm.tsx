import { CloudRain, Sun, Sprout } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { getPlant, mapRegions } from "@/lib/content/plants";
import {
  plantable,
  plantSeed,
  sunPlot,
  tickPlot,
  waterPlot,
  stageLabel,
  PLANT_COLOURS,
  type FarmState,
  type Plot,
} from "@/lib/farm/engine";
import { dayPartFromHour, sceneWash, SCENE_CHIPS, type DayPart } from "@/lib/farm/scenes";
import { loadFarm, saveFarm } from "@/lib/farm/store";

export function LivingFarm() {
  const [farm, setFarm] = useState<FarmState>(() => loadFarm());
  const [seed, setSeed] = useState("mango");
  const [picked, setPicked] = useState(0);
  const [weather, setWeather] = useState<"clear" | "rain" | "sun">("clear");
  const [scene, setScene] = useState<DayPart | "auto">("auto");
  const [clock, setClock] = useState(() => new Date().getHours());
  const [shout, setShout] = useState("Welcome to your living farm.");
  const last = useRef(typeof performance === "undefined" ? 0 : performance.now());

  useEffect(() => {
    last.current = performance.now();
    let frame = 0;
    const loop = (now: number) => {
      const dt = Math.min(250, now - last.current);
      last.current = now;
      setFarm((prev) => {
        const plots = prev.plots.map((p) => tickPlot(p, dt));
        const grew = plots.some((p, i) => p.stage !== prev.plots[i].stage);
        if (grew) {
          const changed = plots.find((p, i) => p.stage !== prev.plots[i].stage);
          if (changed?.stage === "sprout") setShout("Little Seed: I am waking!");
          if (changed?.stage === "leaf") setShout("Ray: Drink the light!");
          if (changed?.stage === "flower") setShout("The bees found us!");
          if (changed?.stage === "fruit") setShout("Mama Soursop: Food for the family table.");
        }
        return { ...prev, plots };
      });
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => saveFarm(farm), 800);
    return () => window.clearTimeout(id);
  }, [farm]);

  useEffect(() => {
    const id = window.setInterval(() => setClock(new Date().getHours()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const part: DayPart = scene === "auto" ? dayPartFromHour(clock) : scene;
  const wash = sceneWash(farm.regionId, part, weather);
  const seeds = useMemo(() => plantable(farm.regionId), [farm.regionId]);
  const plot = farm.plots[picked];

  useEffect(() => {
    if (!seeds.some((s) => s.slug === seed)) setSeed(seeds[0]?.slug ?? "mango");
  }, [seeds, seed]);

  function update(mut: (f: FarmState) => FarmState) {
    setFarm((f) => mut(f));
  }

  function rain() {
    setWeather("rain");
    setShout("Wally Water Drop: A kind sip — not a flood!");
    update((f) => ({ ...f, plots: f.plots.map(waterPlot), coached: true }));
    window.setTimeout(() => setWeather("clear"), 2200);
  }

  function shine() {
    setWeather("sun");
    setShout("Ray of Sunshine: I share the day. You share the growing.");
    update((f) => ({ ...f, plots: f.plots.map(sunPlot), coached: true }));
    window.setTimeout(() => setWeather("clear"), 2200);
  }

  function plantOn(id: number) {
    update((f) => ({
      ...f,
      coached: true,
      plots: f.plots.map((p) => (p.id === id && p.stage === "empty" ? plantSeed(p, seed, Date.now()) : p)),
    }));
    const plant = getPlant(seed);
    setPicked(id);
    setShout(`Little Seed: ${plant?.commonName ?? "A seed"} is in Grandma Soil’s house.`);
  }

  function harvest(id: number) {
    const p = farm.plots[id];
    if (p.stage !== "fruit" || !p.plantSlug) return;
    const slug = p.plantSlug;
    update((f) => ({
      ...f,
      basket: [{ plantSlug: slug, at: Date.now() }, ...f.basket].slice(0, 24),
      plots: f.plots.map((x) =>
        x.id === id
          ? { ...x, plantSlug: null, stage: "empty", progress: 0, plantedAt: null }
          : x,
      ),
    }));
    setShout("Harvest for the family table — never a shop for children.");
  }

  function compost() {
    setShout("Grandma Soil: Living compost feeds the beds. What you cannot see still holds you.");
    update((f) => ({
      ...f,
      coached: true,
      plots: f.plots.map((p) => ({ ...p, water: Math.min(100, p.water + 8) })),
    }));
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-border bg-[#1c1710] shadow-soft">
      <div className="relative">
        <img
          src="/farm/overview.jpg"
          alt="Real family farm with raised beds, drip irrigation, greenhouse, rainwater tank, compost and paths"
          className="h-[min(52vh,560px)] w-full object-cover"
        />
        <div className="farm-wash" style={{ background: wash.overlay }} aria-hidden />
        <div className="farm-multiply" style={{ background: wash.multiply }} aria-hidden />
        {weather === "rain" ? <Rain /> : null}
        {weather === "sun" ? <div className="farm-sun" aria-hidden /> : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">Working farm</p>
          <label className="mt-1 block">
            <span className="sr-only">Farm name</span>
            <input
              value={farm.name}
              onChange={(e) => update((f) => ({ ...f, name: e.target.value.slice(0, 40) }))}
              className="w-full max-w-xl bg-transparent font-display text-4xl font-semibold text-white outline-none sm:text-5xl"
            />
          </label>
          <p className="mt-2 max-w-xl text-sm" style={{ color: wash.ink === "#f7f0ff" || wash.ink === "#e8f0ff" ? "#fff" : undefined }}>
            <span className="font-semibold">{wash.name}</span>
            <span className="block text-white/90">{shout}</span>
          </p>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {mapRegions.map((r) => (
              <button
                key={r.id}
                type="button"
                className="farm-chip whitespace-nowrap"
                aria-pressed={farm.regionId === r.id}
                onClick={() => {
                  update((f) => ({ ...f, regionId: r.id }));
                  setShout(`The light changes. We are in ${r.name}.`);
                }}
              >
                {r.name}
              </button>
            ))}
          </div>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {SCENE_CHIPS.map((s) => (
              <button
                key={s.id}
                type="button"
                className="farm-chip whitespace-nowrap"
                aria-pressed={scene === s.id}
                onClick={() => setScene(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-px bg-black/20 sm:grid-cols-4">
        <Infra
          src="/farm/water-tank.jpg"
          title="Rainwater harvest"
          text="Tank, downpipe, tap. Open the valve for a kind sip."
          action="Open the tap"
          onClick={rain}
        />
        <Infra
          src="/farm/greenhouse.jpg"
          title="Polytunnel"
          text="Seedlings, hose, trapped light. Call the sun into the tunnel."
          action="Open the tunnel"
          onClick={shine}
        />
        <Infra
          src="/farm/compost.jpg"
          title="Compost bays"
          text="Leaf mould and living soil. Grandma Soil’s kitchen."
          action="Turn the compost"
          onClick={compost}
        />
        <Infra
          src="/farm/harvest-table.jpg"
          title="Family table"
          text="Harvest is food to share. Never a shop for children."
          action="See harvest"
          onClick={() => setShout("Bring ripe plots to the family table.")}
        />
      </div>

      <div className="space-y-5 bg-[#f4efe4] p-4 sm:p-6">
        <div>
          <h2 className="font-display text-2xl">Raised beds and drip lines</h2>
          <p className="mt-1 text-sm text-muted">
            Six real beds. Wooden sides. Drip irrigation. Tap empty earth to plant. Water from the
            tank. Light from the tunnel. Feed from compost.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {farm.plots.map((p) => (
            <PlotBed
              key={p.id}
              plot={p}
              active={picked === p.id}
              onSelect={() => (p.stage === "empty" ? plantOn(p.id) : setPicked(p.id))}
              onHarvest={() => harvest(p.id)}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="button" size="lg" onClick={rain} style={{ background: wash.accent }}>
            <CloudRain className="size-4" /> Open the water tap
          </Button>
          <Button type="button" size="lg" variant="secondary" onClick={shine}>
            <Sun className="size-4" /> Open the polytunnel
          </Button>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Seed tray — then tap a bed</p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
            {seeds.map((pl) => (
              <button
                key={pl.slug}
                type="button"
                onClick={() => setSeed(pl.slug)}
                className={`min-w-28 rounded-2xl border px-3 py-3 text-left text-sm ${
                  seed === pl.slug ? "border-primary bg-bg-subtle" : "border-border bg-bg-elevated"
                }`}
              >
                <span className="block font-semibold">{pl.commonName}</span>
                <span className="text-xs text-muted">Seed</span>
              </button>
            ))}
          </div>
        </div>
        {plot ? (
          <p className="text-sm text-muted">
            Bed {plot.id + 1}: {stageLabel(plot.stage)}
            {plot.plantSlug ? ` · ${getPlant(plot.plantSlug)?.commonName}` : ""}. Moisture{" "}
            {Math.round(plot.water)} · Light {Math.round(plot.sun)}. Drip too little and growth
            pauses. Flood the line and roots slow down.
          </p>
        ) : null}
        <div className="overflow-hidden rounded-[20px] border border-border">
          <img src="/farm/harvest-table.jpg" alt="Outdoor family harvest table with real fruit" className="h-40 w-full object-cover" />
          <div className="bg-bg-elevated p-4">
            <h2 className="font-display text-2xl">Family table</h2>
            {farm.basket.length === 0 ? (
              <p className="mt-1 text-sm text-muted">Harvest ripe beds. Food for sharing, not a shop.</p>
            ) : (
              <ul className="mt-2 flex flex-wrap gap-2">
                {farm.basket.map((h, i) => (
                  <li key={`${h.at}-${i}`} className="rounded-full bg-bg-subtle px-3 py-1 text-sm">
                    {getPlant(h.plantSlug)?.commonName ?? h.plantSlug}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <p className="text-sm">
          <Link to="/sing/$slug" params={{ slug: "rain-sun-grow" }} className="font-semibold text-primary">
            Sing Rain, Sun, Grow
          </Link>
          {" · "}
          <Link to="/crew/$slug" params={{ slug: "little-seed" }} className="font-semibold text-primary">
            Meet Little Seed
          </Link>
        </p>
      </div>
    </div>
  );
}

function Infra({
  src,
  title,
  text,
  action,
  onClick,
}: {
  src: string;
  title: string;
  text: string;
  action: string;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="group relative min-h-36 overflow-hidden text-left">
      <img src={src} alt="" className="h-full min-h-36 w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 p-3 text-white">
        <span className="block font-display text-lg">{title}</span>
        <span className="mt-1 block text-xs text-white/80">{text}</span>
        <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide">{action}</span>
      </span>
    </button>
  );
}

function PlotBed({
  plot,
  active,
  onSelect,
  onHarvest,
}: {
  plot: Plot;
  active: boolean;
  onSelect: () => void;
  onHarvest: () => void;
}) {
  const plant = plot.plantSlug ? getPlant(plot.plantSlug) : null;
  const colour = plot.plantSlug ? PLANT_COLOURS[plot.plantSlug] ?? "#4f7d56" : "#4f7d56";
  return (
    <button
      type="button"
      onClick={plot.stage === "fruit" ? onHarvest : onSelect}
      className={`relative aspect-square overflow-hidden rounded-[18px] border-2 text-left shadow-soft ${
        active ? "border-primary" : "border-[#3d2c1e]/50"
      }`}
      aria-label={
        plot.stage === "empty"
          ? "Empty earth. Tap to plant."
          : `${plant?.commonName ?? "Plant"}, ${stageLabel(plot.stage)}`
      }
    >
      <img src="/farm/soil-bed.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <span className="absolute inset-x-0 top-[18%] h-1 bg-[#c4b8a4]/70 shadow" aria-hidden />
      <GrowingBody stage={plot.stage} progress={plot.progress} colour={colour} />
      {plot.stage === "flower" || plot.stage === "fruit" ? <span className="farm-bee" aria-hidden /> : null}
      <span className="absolute left-2 top-2 rounded-full bg-bg-elevated/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
        {plot.stage === "empty" ? "Plant" : plot.stage === "fruit" ? "Harvest" : stageLabel(plot.stage)}
      </span>
      {plot.stage !== "empty" ? (
        <span className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-primary-fg drop-shadow">
          {plant?.commonName}
        </span>
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-primary-fg/90">
          <Sprout className="size-7 opacity-70" />
        </span>
      )}
    </button>
  );
}

function GrowingBody({
  stage,
  progress,
  colour,
}: {
  stage: Plot["stage"];
  progress: number;
  colour: string;
}) {
  if (stage === "empty") return null;
  const rank = { seed: 0.18, sprout: 0.38, leaf: 0.58, flower: 0.78, fruit: 1 }[stage] + progress * 0.12;
  return (
    <svg viewBox="0 0 100 100" className="farm-grow absolute inset-0 h-full w-full" aria-hidden>
      {stage !== "seed" ? (
        <path d={`M50 92 L50 ${92 - rank * 55}`} stroke={colour} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      ) : null}
      {stage === "seed" || stage === "sprout" ? (
        <ellipse cx="50" cy="86" rx="7" ry="5" fill="#6b4b32" />
      ) : null}
      {["sprout", "leaf", "flower", "fruit"].includes(stage) ? (
        <>
          <ellipse cx="38" cy={70 - rank * 20} rx="12" ry="7" fill={colour} opacity="0.9" />
          <ellipse cx="62" cy={68 - rank * 22} rx="12" ry="7" fill={colour} />
        </>
      ) : null}
      {stage === "leaf" || stage === "flower" || stage === "fruit" ? (
        <>
          <ellipse cx="32" cy={58 - rank * 10} rx="10" ry="6" fill={colour} />
          <ellipse cx="68" cy={56 - rank * 12} rx="10" ry="6" fill={colour} />
        </>
      ) : null}
      {stage === "flower" || stage === "fruit" ? (
        <circle cx="50" cy={40 - rank * 6} r="8" fill="#f0c84a" />
      ) : null}
      {stage === "fruit" ? <circle cx="50" cy="36" r="11" fill={colour} stroke="#2c2416" strokeWidth="1" /> : null}
    </svg>
  );
}

function Rain() {
  return (
    <div className="farm-rain pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 18 }, (_, i) => (
        <span key={i} style={{ left: `${(i * 17) % 100}%`, animationDelay: `${i * 0.08}s` }} />
      ))}
    </div>
  );
}
