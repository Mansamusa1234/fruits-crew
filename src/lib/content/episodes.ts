import type { EpisodeRecord } from "./schema";

export const episodes: EpisodeRecord[] = [
  {
    slug: "wake-up-little-seed",
    title: "Wake Up, Little Seed!",
    synopsis:
      "Little Seed waits in the dark. Rain arrives, sunlight peeks, and the Crew learn that growing is teamwork — not rushing.",
    mystery: "Why won’t Little Seed come up today?",
    predictionQuestion: "What does a seed need before it can sprout?",
    natureExplanation:
      "A seed already holds a tiny plant. With moisture, a safe temperature, and time, a root goes down and a shoot goes up. Light matters more after the shoot reaches the air. We describe this as science; people have also told Creation stories about the same wonder. Both can be spoken with respect.",
    cooperationBeat:
      "Wally wants to pour a flood. Ray wants to shine all at once. Grandma Soil asks them to take turns. Together they wake Little Seed without washing the soil away.",
    songSlug: "wake-up-little-seed",
    offlineActivity:
      "With an adult, fold a paper towel in a jar, add a few dried beans, keep it just damp, and draw one picture a day.",
    parentGuide:
      "Ages 2–4: act the curl-and-grow. Ages 5–7: predict root vs shoot. Remind children not to eat unknown seeds. Talk about patience without shaming energy. If your family has a Creation story, you can tell it after the science sentence: ‘People have understood growing in different ways. Science helps us investigate how.’",
    ageBands: ["2-4", "5-7", "family"],
    characters: [
      "little-seed",
      "mama-soursop",
      "grandma-soil",
      "wally-water",
      "ray-sunshine",
      "benny-banana",
    ],
    sources: [
      {
        title: "Seed germination overview",
        publisher: "Royal Horticultural Society",
        url: "https://www.rhs.org.uk/advice",
        accessed: "2026-09-14",
        notes: "General germination teaching; not a lab protocol",
      },
    ],
    marketing: {
      youtubeTitle: "Wake Up, Little Seed! | Fruits Crew story and song",
      description:
        "A seed waits in the soil. Rain, sun and friends help — without rushing. Original story and song. Everything is connected. Each one teach one.",
      thumbnailConcept: "Little Seed’s sprout breaking soil, Crew watching, warm sunrise, no scare faces.",
      learningObjective: "Germination needs water, warmth and time; cooperation beats flooding.",
      ageRange: "2–7 with family",
      keywords: ["seed", "germination", "kids science", "original kids song", "Caribbean garden"],
      parentCta: "Plant a bean in a jar this week. Draw what changes.",
      safetyNotes: "Adult supervision for seeds, jars and water. Do not eat unknown seeds. Safe volume.",
      languages: ["English"],
      copyrightOwner: "Fruits Crew / Darren-neil",
      musicOwner: "Fruits Crew original (placeholder recording in-app)",
      sources: ["RHS germination advice (general)"],
    },
  },
  {
    slug: "jump-in-and-scrub",
    title: "Jump In and Scrub",
    synopsis:
      "Little Seed wants to be queen of the bubbles. Wally turns the tap. Mama Soursop keeps the water kind. They jump in, scrub, and wash their hands — an original Fruits Crew bath song, not copied from any other show.",
    mystery: "How do we fill the bath without making a flood?",
    predictionQuestion: "What do we do with our hands before we eat?",
    natureExplanation:
      "Warm water, a little soap, and rubbing takes dirt off skin. Rinse and dry. Never run a bath without an adult. Water is a gift, like rain in the garden — the right amount, not a flood.",
    cooperationBeat:
      "Wally wants to fill it to the top. Mama Soursop says stop at a safe line. Little Seed jumps in when an adult says yes. Ray dries the towels in the sun.",
    songSlug: "jump-in-and-scrub",
    offlineActivity:
      "Sing Jump In and Scrub at real bath time. Adult in the room. Towels ready. Hands washed after play.",
    parentGuide:
      "Ages 2–4: tap, jump, scrub, wash-hands actions. Never leave a child with standing water. This is an original Fruits Crew rhyme about hygiene and play — not a copy of another cartoon. Keep volume kind.",
    ageBands: ["2-4", "5-7", "family"],
    characters: ["little-seed", "mama-soursop", "wally-water", "grandma-soil", "ray-sunshine"],
    sources: [
      {
        title: "Handwashing for families",
        publisher: "NHS / public health hygiene teaching",
        url: "https://www.nhs.uk/",
        accessed: "2026-09-14",
        notes: "General handwashing teaching; not medical advice",
      },
    ],
    marketing: {
      youtubeTitle: "Jump In and Scrub | Original Fruits Crew bath song",
      description:
        "In the bath! I’ll be the queen! Fill it up, the tap, jump in the water and scrub, wash my hands. Original Fruits Crew. Not copied from any other show. Everything is connected.",
      thumbnailConcept: "Mama Soursop in a bubble crown, Little Seed jumping into a colourful garden tub, Wally at the tap.",
      learningObjective: "Bath-time sequence and handwashing with adult care.",
      ageRange: "2–7 with family",
      keywords: ["bath song", "wash your hands", "original kids song", "Fruits Crew", "bubbles"],
      parentCta: "Sing it at bath time. Adult stays in the room.",
      safetyNotes: "Adult supervision around water at all times. No copied cartoons. Safe volume.",
      languages: ["English", "Spanish", "French", "Jamaican Patois"],
      copyrightOwner: "Fruits Crew / Darren-neil",
      musicOwner: "Fruits Crew original",
      sources: ["NHS family handwashing guidance (general)"],
    },
  },
];

export function getEpisode(slug: string) {
  return episodes.find((e) => e.slug === slug);
}
