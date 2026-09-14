import { catchUp, emptyFarm, type FarmState } from "./engine";

const KEY = "fruits-crew-farm-v1";

export function loadFarm(): FarmState {
  if (typeof window === "undefined") return emptyFarm();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return emptyFarm();
    const parsed = JSON.parse(raw) as FarmState;
    if (!parsed?.plots?.length) return emptyFarm();
    return catchUp({ ...emptyFarm(), ...parsed, plots: parsed.plots.slice(0, 6) });
  } catch {
    return emptyFarm();
  }
}

export function saveFarm(farm: FarmState) {
  window.localStorage.setItem(KEY, JSON.stringify({ ...farm, lastSaved: Date.now() }));
}
