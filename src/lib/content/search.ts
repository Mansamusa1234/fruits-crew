import { characters } from "./characters";
import { plants } from "./plants";
import { songs } from "./songs";
import { episodes } from "./episodes";
import { activities } from "./activities";

export interface SearchHit {
  kind: "character" | "plant" | "song" | "episode" | "activity";
  title: string;
  href: string;
  blurb: string;
}

export function searchContent(q: string): SearchHit[] {
  const needle = q.trim().toLowerCase();
  if (needle.length < 2) return [];

  const hits: SearchHit[] = [];

  for (const c of characters) {
    const blob = `${c.name} ${c.speciesOrElement} ${c.learningSpeciality} ${c.catchphrase}`.toLowerCase();
    if (blob.includes(needle)) {
      hits.push({
        kind: "character",
        title: c.name,
        href: `/crew/${c.slug}`,
        blurb: c.learningSpeciality,
      });
    }
  }
  for (const p of plants) {
    const blob = `${p.commonName} ${p.scientificName} ${p.botanicalOrigin} ${p.indigenousAndHistoricalNames.join(" ")}`.toLowerCase();
    if (blob.includes(needle)) {
      hits.push({
        kind: "plant",
        title: p.commonName,
        href: `/plants/${p.slug}`,
        blurb: p.scientificName,
      });
    }
  }
  for (const s of songs) {
    if (`${s.title} ${s.learningObjective}`.toLowerCase().includes(needle)) {
      hits.push({ kind: "song", title: s.title, href: `/sing/${s.slug}`, blurb: s.learningObjective });
    }
  }
  for (const e of episodes) {
    if (`${e.title} ${e.synopsis}`.toLowerCase().includes(needle)) {
      hits.push({ kind: "episode", title: e.title, href: `/watch/${e.slug}`, blurb: e.mystery });
    }
  }
  for (const a of activities) {
    if (`${a.title} ${a.why}`.toLowerCase().includes(needle)) {
      hits.push({ kind: "activity", title: a.title, href: `/family#${a.slug}`, blurb: a.why });
    }
  }
  return hits.slice(0, 12);
}
