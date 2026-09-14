export const DAY_PARTS = ["dawn", "morning", "noon", "golden", "dusk", "night"] as const;
export type DayPart = (typeof DAY_PARTS)[number];

export type SceneWash = {
  name: string;
  overlay: string;
  multiply: string;
  accent: string;
  ink: string;
};

const TIME_SHIFT: Record<DayPart, { overlay: string; multiply: string; ink: string; label: string }> = {
  dawn: {
    overlay: "linear-gradient(180deg, #ffb3a0 0%, #ffd6a8 42%, #7ec8c9 100%)",
    multiply: "rgb(255 180 140 / 0.28)",
    ink: "#3a2418",
    label: "Dawn",
  },
  morning: {
    overlay: "linear-gradient(180deg, #9ad7ff 0%, #fff1b8 55%, #b8e986 100%)",
    multiply: "rgb(255 245 200 / 0.18)",
    ink: "#243018",
    label: "Morning",
  },
  noon: {
    overlay: "linear-gradient(180deg, #7ec8ff 0%, #fffbe6 50%, #d4f0a8 100%)",
    multiply: "transparent",
    ink: "#1c2414",
    label: "High sun",
  },
  golden: {
    overlay: "linear-gradient(180deg, #ffb347 0%, #ff6f3c 40%, #7a2f45 100%)",
    multiply: "rgb(255 140 60 / 0.32)",
    ink: "#2a140c",
    label: "Golden hour",
  },
  dusk: {
    overlay: "linear-gradient(180deg, #7b2cbf 0%, #e05780 45%, #2b1b4a 100%)",
    multiply: "rgb(80 30 90 / 0.38)",
    ink: "#f7f0ff",
    label: "Dusk",
  },
  night: {
    overlay: "linear-gradient(180deg, #0b132b 0%, #1c2541 40%, #3a0ca3 100%)",
    multiply: "rgb(8 12 40 / 0.55)",
    ink: "#e8f0ff",
    label: "Night",
  },
};

type RegionLook = { accent: string; spice: string; label: string };

export const REGION_LOOK: Record<string, RegionLook> = {
  caribbean: { accent: "#ff4d6d", spice: "#00c2cb", label: "Caribbean — hibiscus & lagoon" },
  "west-africa": { accent: "#e07a3d", spice: "#2f9e44", label: "West Africa — laterite & canopy" },
  "horn-of-africa": { accent: "#d4a017", spice: "#c45c26", label: "Horn of Africa — teff gold" },
  "south-asia": { accent: "#ff6b35", spice: "#2a9d8f", label: "South Asia — monsoon mango" },
  "southeast-asia": { accent: "#e9c46a", spice: "#0a9396", label: "Southeast Asia — banana light" },
  pacific: { accent: "#48cae4", spice: "#ff85a1", label: "Pacific — lagoon & frangipani" },
  amazon: { accent: "#2d6a4f", spice: "#bc4749", label: "Amazon — cacao shade" },
  andes: { accent: "#7b2cbf", spice: "#f4a261", label: "Andes — mountain potato dusk" },
  "north-america": { accent: "#e8b923", spice: "#3d5a80", label: "North America — sunflower prairie" },
  britain: { accent: "#6b8f71", spice: "#c9a227", label: "Britain — meadow & hedgerow" },
  "central-asia": { accent: "#c44536", spice: "#7cb518", label: "Central Asia — wild apple" },
};

export function dayPartFromHour(hour: number): DayPart {
  if (hour < 6) return "night";
  if (hour < 8) return "dawn";
  if (hour < 11) return "morning";
  if (hour < 15) return "noon";
  if (hour < 18) return "golden";
  if (hour < 21) return "dusk";
  return "night";
}

export function sceneWash(regionId: string, part: DayPart, weather: "clear" | "rain" | "sun"): SceneWash {
  const region = REGION_LOOK[regionId] ?? REGION_LOOK.caribbean;
  const time = TIME_SHIFT[part];
  const rainOverlay =
    weather === "rain" ? "linear-gradient(180deg, #4a6d7a 0%, #7fa3aa 55%, #1d3557 100%)" : time.overlay;
  const sunBoost = weather === "sun" ? "rgb(255 210 80 / 0.28)" : time.multiply;
  return {
    name: `${region.label} · ${time.label}`,
    overlay: rainOverlay,
    multiply: weather === "rain" ? "rgb(40 70 90 / 0.35)" : sunBoost,
    accent: region.accent,
    ink: time.ink,
  };
}

export const SCENE_CHIPS: { id: DayPart | "auto"; label: string }[] = [
  { id: "auto", label: "Now" },
  { id: "dawn", label: "Dawn" },
  { id: "morning", label: "Morning" },
  { id: "noon", label: "Noon" },
  { id: "golden", label: "Golden" },
  { id: "dusk", label: "Dusk" },
  { id: "night", label: "Night" },
];
