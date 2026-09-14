import { createContext, createElement, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const LOCALES = ["en", "es", "fr", "jam"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<
  Locale,
  { label: string; native: string; htmlLang: string; note?: string }
> = {
  en: { label: "English", native: "English", htmlLang: "en" },
  es: { label: "Spanish", native: "Español", htmlLang: "es" },
  fr: { label: "French", native: "Français", htmlLang: "fr" },
  jam: {
    label: "Jamaican Patois",
    native: "Jamiekan",
    htmlLang: "en-JM",
    note: "Voice is still an English storyteller. Native-speaker review welcome.",
  },
};

const UI: Record<Locale, Record<string, string>> = {
  en: {
    pickLanguage: "Pick your language",
    play: "Play the story",
    pause: "Pause",
    karaoke: "Story song",
    allSongs: "All songs",
    speakerHint: "Turn speakers up. Tap Play the story, or the triangle on the grey bar.",
    navStart: "Start here",
    navFarm: "Farm",
    navCrew: "Meet the Crew",
    navPlants: "Plants",
    navLanguages: "Languages",
    navWatch: "Watch",
    navSing: "Sing",
    navMap: "Map",
    navFamily: "Family",
    navParents: "Parents",
  },
  es: {
    pickLanguage: "Elige tu idioma",
    play: "Escuchar el cuento",
    pause: "Pausa",
    karaoke: "Canción-cuento",
    allSongs: "Todas las canciones",
    speakerHint: "Sube el volumen. Pulsa Escuchar el cuento, o el triángulo de la barra gris.",
    navStart: "Empieza aquí",
    navFarm: "Granja",
    navCrew: "La tripulación",
    navPlants: "Plantas",
    navLanguages: "Idiomas",
    navWatch: "Ver",
    navSing: "Cantar",
    navMap: "Mapa",
    navFamily: "Familia",
    navParents: "Familias",
  },
  fr: {
    pickLanguage: "Choisis ta langue",
    play: "Écouter l’histoire",
    pause: "Pause",
    karaoke: "Chanson-histoire",
    allSongs: "Toutes les chansons",
    speakerHint: "Monte le son. Appuie sur Écouter l’histoire, ou sur le triangle de la barre grise.",
    navStart: "Commencer",
    navFarm: "Ferme",
    navCrew: "L’équipage",
    navPlants: "Plantes",
    navLanguages: "Langues",
    navWatch: "Regarder",
    navSing: "Chanter",
    navMap: "Carte",
    navFamily: "Famille",
    navParents: "Parents",
  },
  jam: {
    pickLanguage: "Pick yu language",
    play: "Play di story",
    pause: "Hold on",
    karaoke: "Story song",
    allSongs: "All di songs",
    speakerHint: "Turn up di speaker. Tap Play di story, or di triangle pon di grey bar.",
    navStart: "Start yah",
    navFarm: "Farm",
    navCrew: "Meet di Crew",
    navPlants: "Plants",
    navLanguages: "Languages",
    navWatch: "Watch",
    navSing: "Sing",
    navMap: "Map",
    navFamily: "Family",
    navParents: "Parents",
  },
};

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (key: string) => string };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("fruits-crew-lang");
    if (saved && LOCALES.includes(saved as Locale)) setLocaleState(saved as Locale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      setLocale: (l) => {
        setLocaleState(l);
        window.localStorage.setItem("fruits-crew-lang", l);
      },
      t: (key) => UI[locale][key] ?? UI.en[key] ?? key,
    }),
    [locale],
  );

  return createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("LanguageProvider missing");
  return ctx;
}
