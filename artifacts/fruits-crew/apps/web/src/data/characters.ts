/**
 * Core 8 Fruits Crew characters — web app data layer
 * Mirrors packages/database/seed/characters.ts for client use
 */

export type CharacterCategory =
  | "fruits_crew"
  | "wild_plant"
  | "root"
  | "seed_grain"
  | "tree"
  | "flower"
  | "pollinator"
  | "soil"
  | "animal"
  | "ocean"
  | "elemental";

export interface Character {
  slug: string;
  name: string;
  species: string;
  category: CharacterCategory;
  emoji: string;
  age_personality: string;
  voice_style: string;
  accent: string;
  strengths: string[];
  weaknesses: string[];
  catchphrase: string;
  learning_role: string;
  colour_palette: {
    primary: string;
    secondary: string;
    accent: string;
    skin: string;
  };
  physical_description: string;
  expressions: string[];
  relationships: Record<string, string | string[]>;
  backstory: string;
  is_core: boolean;
  sort_order: number;
}

export const coreCharacters: Character[] = [
  {
    slug: "soursop",
    name: "Soursop",
    species: "Annona muricata",
    category: "fruits_crew",
    emoji: "🟢",
    age_personality: "Calm, curious, observant — feels like a wise older sibling",
    voice_style: "Warm, measured, slightly deep",
    accent: "Caribbean-influenced English",
    strengths: ["investigation", "nature knowledge", "history", "calm leadership"],
    weaknesses: ["can overthink", "sometimes too serious"],
    catchphrase: "Let’s look beneath the surface.",
    learning_role: "Wise investigator — teaches careful observation and evidence",
    colour_palette: {
      primary: "#2F5D3A",
      secondary: "#A8D5A2",
      accent: "#F4E8C1",
      skin: "#3A6B45",
    },
    physical_description:
      "Soft green spiky exterior with gentle eyes. Leafy crown. Expressive hands. Stands upright with quiet dignity. Recognisably a soursop fruit with subtle human proportions.",
    expressions: ["curious", "thoughtful", "surprised", "gentle-smile", "investigating"],
    relationships: {
      closest: ["fig", "little-seed"],
      mentor_to: ["little-seed"],
    },
    backstory:
      "Soursop has always been drawn to the quiet spaces under trees and the stories roots tell. The crew turns to Soursop when a mystery needs careful looking.",
    is_core: true,
    sort_order: 1,
  },
  {
    slug: "banana",
    name: "Banana",
    species: "Musa",
    category: "fruits_crew",
    emoji: "🍌",
    age_personality: "Funny, energetic, slightly impulsive — the comic heart",
    voice_style: "Bright, quick, playful",
    accent: "Caribbean-influenced English with bounce",
    strengths: ["counting", "sequencing", "movement", "making everyone laugh"],
    weaknesses: ["rushes ahead", "sometimes forgets details"],
    catchphrase: "One, two, peel-a-boo!",
    learning_role: "Comic heart — teaches counting, sequencing and joyful movement",
    colour_palette: {
      primary: "#F4D03F",
      secondary: "#F9E79F",
      accent: "#27AE60",
      skin: "#F7DC6F",
    },
    physical_description:
      "Classic curved yellow banana form with big expressive eyes, springy legs and a peel that occasionally slips for comic effect. Always ready to bounce.",
    expressions: ["laughing", "excited", "oops", "counting", "determined"],
    relationships: {
      closest: ["mango", "pineapple"],
      rivals_friendly: ["coconut"],
    },
    backstory:
      "Banana never sits still. From the moment the bunch was ready, Banana has been counting steps, counting friends, and counting the ways to make everyone smile.",
    is_core: true,
    sort_order: 2,
  },
  {
    slug: "mango",
    name: "Mango",
    species: "Mangifera indica",
    category: "fruits_crew",
    emoji: "🥭",
    age_personality: "Bold and adventurous — the explorer",
    voice_style: "Confident, warm, storytelling",
    accent: "Caribbean / global mix",
    strengths: ["geography", "cultures", "travel stories", "courage"],
    weaknesses: ["can be restless", "sometimes underestimates local knowledge"],
    catchphrase: "The world is one big orchard — let’s explore!",
    learning_role: "Explorer — teaches geography, cultures and how plants travel",
    colour_palette: {
      primary: "#E67E22",
      secondary: "#F5B041",
      accent: "#1ABC9C",
      skin: "#E59866",
    },
    physical_description:
      "Golden-orange mango shape with a soft blush, adventurous eyes, and a little explorer’s satchel made of leaf. Always looking toward the horizon.",
    expressions: ["excited-discovery", "curious", "proud", "listening", "mapping"],
    relationships: {
      closest: ["banana", "coconut"],
      admires: ["fig"],
    },
    backstory:
      "Mango’s family came from far away and settled in many lands. Mango loves tracing the journeys of seeds and people across the Earth.",
    is_core: true,
    sort_order: 3,
  },
  {
    slug: "coconut",
    name: "Coconut",
    species: "Cocos nucifera",
    category: "fruits_crew",
    emoji: "🥥",
    age_personality: "Practical, clever, mechanically minded — the inventor",
    voice_style: "Steady, clear, problem-solving tone",
    accent: "Caribbean-influenced English",
    strengths: ["engineering", "problem solving", "building", "practical science"],
    weaknesses: ["can get lost in gadgets", "sometimes forgets to play"],
    catchphrase: "If we can grow it, we can figure it out.",
    learning_role: "Inventor — teaches engineering thinking and practical problem solving",
    colour_palette: {
      primary: "#6D4C41",
      secondary: "#A1887F",
      accent: "#4CAF50",
      skin: "#8D6E63",
    },
    physical_description:
      "Hard brown shell with a friendly face, fibrous hair tuft, and clever hands that love tools made from natural materials. Often carries a small workshop kit.",
    expressions: ["concentrating", "aha", "proud-of-invention", "puzzled", "helpful"],
    relationships: {
      closest: ["pineapple", "mango"],
      rivals_friendly: ["banana"],
    },
    backstory:
      "Coconut washed ashore long ago and never stopped asking how things work. The crew’s best inventor and fixer of broken plans.",
    is_core: true,
    sort_order: 4,
  },
  {
    slug: "pineapple",
    name: "Pineapple",
    species: "Ananas comosus",
    category: "fruits_crew",
    emoji: "🍍",
    age_personality: "Confident and musical — the creative performer",
    voice_style: "Rhythmic, expressive, stage-ready",
    accent: "Caribbean with musical lilt",
    strengths: ["music", "rhythm", "patterns", "performance", "encouragement"],
    weaknesses: ["loves the spotlight", "can be dramatic"],
    catchphrase: "Feel the rhythm of the leaves!",
    learning_role: "Creative performer — teaches music, rhythm and natural patterns",
    colour_palette: {
      primary: "#F4A261",
      secondary: "#E76F51",
      accent: "#2A9D8F",
      skin: "#E9C46A",
    },
    physical_description:
      "Spiky golden crown and textured body, bright eyes, and a natural sense of stage presence. Moves with rhythm even when standing still.",
    expressions: ["singing", "dancing", "proud", "encouraging", "surprised"],
    relationships: {
      closest: ["banana", "coconut"],
      performs_with: ["all"],
    },
    backstory:
      "Pineapple grew up listening to the wind in the leaves and the rain on the soil. Music was never separate from nature — it was the same song.",
    is_core: true,
    sort_order: 5,
  },
  {
    slug: "fig",
    name: "Fig",
    species: "Ficus",
    category: "fruits_crew",
    emoji: "🟣",
    age_personality: "Thoughtful and ancient-feeling — keeper of stories",
    voice_style: "Soft, measured, storytelling cadence",
    accent: "Warm, slightly formal Caribbean English",
    strengths: ["history", "archaeology", "storytelling", "patience", "memory"],
    weaknesses: ["can wander into long stories", "sometimes too quiet"],
    catchphrase: "Every seed carries a story older than we know.",
    learning_role: "Keeper of stories — teaches history, archaeology and the power of narrative",
    colour_palette: {
      primary: "#6B4226",
      secondary: "#A67C52",
      accent: "#C4A484",
      skin: "#8B5E3C",
    },
    physical_description:
      "Soft purple-brown fig form with gentle wrinkles of age, wise eyes, and a leaf cloak. Feels both ancient and kind.",
    expressions: ["storytelling", "remembering", "gentle-smile", "curious", "solemn"],
    relationships: {
      closest: ["soursop", "little-seed"],
      mentor_to: ["all"],
    },
    backstory:
      "Fig has watched gardens grow and cities rise. The oldest stories of people and plants live in Fig’s quiet memory.",
    is_core: true,
    sort_order: 6,
  },
  {
    slug: "dandelion",
    name: "Dandelion",
    species: "Taraxacum officinale",
    category: "wild_plant",
    emoji: "🌼",
    age_personality: "Resilient and cheerful — the underestimated wild plant",
    voice_style: "Bright, hopeful, slightly breezy",
    accent: "British-influenced English with warmth",
    strengths: ["adaptation", "ecology", "resilience", "British nature knowledge"],
    weaknesses: ["sometimes feels overlooked", "can be stubborn"],
    catchphrase: "Something common can still be extraordinary.",
    learning_role: "Teaches resilience, adaptation and the value of ‘weeds’",
    colour_palette: {
      primary: "#F1C40F",
      secondary: "#F7DC6F",
      accent: "#27AE60",
      skin: "#F4D03F",
    },
    physical_description:
      "Bright yellow flower head that can become a fluffy seed clock. Cheerful face, sturdy stem, and a determination that survives pavement cracks.",
    expressions: ["cheerful", "determined", "seed-blowing", "proud", "curious"],
    relationships: {
      closest: ["little-seed", "soursop"],
      message: "Common can be extraordinary",
    },
    backstory:
      "Dandelion grows where others give up. From city cracks to open meadows, Dandelion shows that resilience is a superpower.",
    is_core: true,
    sort_order: 7,
  },
  {
    slug: "little-seed",
    name: "Little Seed",
    species: "Various",
    category: "seed_grain",
    emoji: "🌱",
    age_personality: "Youngest, endlessly curious — represents the child watching",
    voice_style: "Small, clear, full of wonder and questions",
    accent: "Neutral, clear children’s English",
    strengths: ["asking why", "noticing details", "learning from everyone"],
    weaknesses: ["impatient for answers", "sometimes scared of the unknown"],
    catchphrase: "Why? How? What happens next? How do we know?",
    learning_role: "The child’s proxy — models curiosity and good questions",
    colour_palette: {
      primary: "#8D6E63",
      secondary: "#A1887F",
      accent: "#81C784",
      skin: "#BCAAA4",
    },
    physical_description:
      "Tiny round seed with big curious eyes and a soft sprout beginning to show. Small enough to be carried, brave enough to ask the biggest questions.",
    expressions: ["wonder", "confused", "excited", "listening", "determined"],
    relationships: {
      closest: ["soursop", "fig", "dandelion"],
      looks_up_to: ["all"],
    },
    backstory:
      "Little Seed is just beginning. Every adventure starts with a question, and Little Seed never runs out of them.",
    is_core: true,
    sort_order: 8,
  },
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return coreCharacters.find((c) => c.slug === slug);
}

export function getCoreCharacters(): Character[] {
  return [...coreCharacters].sort((a, b) => a.sort_order - b.sort_order);
}
