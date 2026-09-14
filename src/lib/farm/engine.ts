import { plants } from "@/lib/content/plants";

export const STAGES = ["seed", "sprout", "leaf", "flower", "fruit"] as const;
export type GrowStage = (typeof STAGES)[number];

export type Plot = {
  id: number;
  plantSlug: string | null;
  stage: GrowStage | "empty";
  progress: number;
  water: number;
  sun: number;
  plantedAt: number | null;
};

export type Harvest = { plantSlug: string; at: number };
export type FarmState = {
  name: string;
  plots: Plot[];
  basket: Harvest[];
  coached: boolean;
  lastSaved: number;
  regionId: string;
};

export const STAGE_MS: Record<GrowStage, number> = {
  seed: 8000,
  sprout: 12000,
  leaf: 16000,
  flower: 16000,
  fruit: 0,
};

export const PLANT_COLOURS: Record<string, string> = {
  soursop: "#6aa56a",
  banana: "#e2c14a",
  mango: "#d9782a",
  coconut: "#cbb7a4",
  ackee: "#d35a3a",
  cacao: "#6b3a2a",
  yam: "#8d6b4a",
  teff: "#c4a574",
  dandelion: "#f0c84a",
  rice: "#c5d48a",
  potato: "#c9b48a",
  sunflower: "#e8b423",
  breadfruit: "#7da36a",
  apple: "#c6453a",
};

export function emptyFarm(): FarmState {
  return {
    name: "Our Living Farm",
    regionId: "caribbean",
    coached: false,
    lastSaved: Date.now(),
    basket: [],
    plots: Array.from({ length: 6 }, (_, i) => ({
      id: i,
      plantSlug: null,
      stage: "empty",
      progress: 0,
      water: 35,
      sun: 40,
      plantedAt: null,
    })),
  };
}

export function tickPlot(plot: Plot, dtMs: number): Plot {
  if (plot.stage === "empty" || plot.stage === "fruit" || !plot.plantSlug) {
    return {
      ...plot,
      water: clamp(plot.water - dtMs * 0.0012),
      sun: clamp(plot.sun - dtMs * 0.0009),
    };
  }
  const water = clamp(plot.water - dtMs * 0.0035);
  const sun = clamp(plot.sun - dtMs * 0.0028);
  const flood = water > 92;
  const thirsty = water < 22 || sun < 22;
  const factor = thirsty ? 0 : flood ? 0.35 : 0.55 + (water / 100) * 0.25 + (sun / 100) * 0.25;
  const need = STAGE_MS[plot.stage];
  let progress = plot.progress + (dtMs / need) * factor;
  let stage: Plot["stage"] = plot.stage;
  if (progress >= 1) {
    const i = STAGES.indexOf(plot.stage);
    if (i >= 0 && i < STAGES.length - 1) {
      stage = STAGES[i + 1];
      progress = 0;
    } else {
      stage = "fruit";
      progress = 1;
    }
  }
  return { ...plot, water, sun, progress, stage };
}

export function plantSeed(plot: Plot, slug: string, now: number): Plot {
  return {
    ...plot,
    plantSlug: slug,
    stage: "seed",
    progress: 0,
    plantedAt: now,
    water: Math.max(plot.water, 40),
    sun: Math.max(plot.sun, 40),
  };
}

export function waterPlot(plot: Plot): Plot {
  return { ...plot, water: clamp(plot.water + 38) };
}

export function sunPlot(plot: Plot): Plot {
  return { ...plot, sun: clamp(plot.sun + 38) };
}

export function catchUp(farm: FarmState, now = Date.now()): FarmState {
  const dt = Math.min(120_000, Math.max(0, now - (farm.lastSaved || now)));
  if (dt < 400) return farm;
  return { ...farm, lastSaved: now, plots: farm.plots.map((p) => tickPlot(p, dt)) };
}

export function plantable(regionId?: string) {
  if (!regionId) return plants.slice(0, 12);
  const local = plants.filter((p) => p.mapRegion === regionId);
  return local.length ? local : plants.slice(0, 12);
}

function clamp(n: number) {
  return Math.max(0, Math.min(100, n));
}

export function stageLabel(stage: Plot["stage"]) {
  return (
    {
      empty: "Empty earth",
      seed: "Seed in the dark",
      sprout: "A sprout!",
      leaf: "Leaves drinking light",
      flower: "The farm is flowering",
      fruit: "Ready for the family table",
    } as const
  )[stage];
}
