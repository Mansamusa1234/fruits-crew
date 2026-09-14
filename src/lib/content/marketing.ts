import { episodes } from "./episodes";
import { songs } from "./songs";

export const BRAND = {
  name: "Fruits Crew",
  creator: "Darren-neil",
  tagline: "The whole living world is one family.",
  childMessage: "Come meet the world that talks!",
  parentMessage: "Original songs, stories and adventures that turn screen time into family learning.",
  core: [
    "Everything is connected.",
    "Each one teach one.",
    "Learn together. Grow together. Love one another.",
  ],
  description:
    "Fruits Crew is a joyful worldwide children’s learning and animation universe where fruits, vegetables, seeds, soil, roots, water, weather, plants, animals and the Earth can talk, sing and learn together.",
  cultures:
    "Caribbean culture is one part of a global family, alongside African, British, Asian, European, Middle Eastern, Pacific, Indigenous and other living cultures.",
  hashtags: [
    "#FruitsCrew",
    "#BackToNature",
    "#EverythingIsConnected",
    "#EachOneTeachOne",
    "#FamilyLearning",
  ],
  neverSay: [
    "Do not describe Fruits Crew as a Caribbean-only crew.",
    "Do not copy another children’s franchise look, melody or character.",
    "Do not sell products to children on the site.",
    "Do not claim a plant is safe to eat from a photo.",
  ],
} as const;

export const CHANNELS = [
  {
    name: "YouTube (family)",
    format: "6–8 min story + 2–3 min song",
    goal: "Searchable learning episodes parents can trust.",
  },
  {
    name: "YouTube Shorts / Reels / TikTok",
    format: "20–45 sec chorus + call-and-response",
    goal: "Share one hook, then send families to the full story.",
  },
  {
    name: "Website",
    format: "Watch, sing, plants, family activities",
    goal: "The home for the universe. No ads. No child chat.",
  },
  {
    name: "CapCut studio",
    format: "One timeline → story, song, vertical clips, bedtime cut",
    goal: "Original production only.",
  },
  {
    name: "Schools and libraries",
    format: "Lesson cards + offline activity",
    goal: "Circle time and family homework, not a test mill.",
  },
] as const;

export function youtubeDescription(title: string, body: string, cta: string) {
  return [
    `${title}`,
    "",
    body,
    "",
    BRAND.core.join(" "),
    "",
    `Try this at home: ${cta}`,
    "",
    "Original story and song by Fruits Crew. Created by Darren-neil.",
    "Not a copy of any other children’s brand.",
    "",
    "Chapters",
    "00:00 Hello from the garden",
    "00:20 Story",
    "04:00 Song",
    "06:30 Family question",
    "",
    BRAND.hashtags.join(" "),
  ].join("\n");
}

export const youtubePacks = [
  {
    slug: episodes[0].slug,
    title: episodes[0].marketing.youtubeTitle,
    description: youtubeDescription(
      episodes[0].title,
      episodes[0].marketing.description,
      episodes[0].marketing.parentCta,
    ),
    tags: [
      "Fruits Crew",
      "kids songs original",
      "seed germination for kids",
      "family learning",
      "nature songs for children",
      "nursery rhyme original",
      "science for toddlers",
    ],
    thumbnail: episodes[0].marketing.thumbnailConcept,
    endScreen: "Subscribe for more original Fruits Crew stories. Next: Count the Mangoes.",
  },
  ...songs.map((s) => ({
    slug: s.slug,
    title: `${s.title} | Fruits Crew original song`,
    description: youtubeDescription(s.title, s.learningObjective, s.offlineActivity),
    tags: ["Fruits Crew", "original kids song", s.title, "family karaoke"],
    thumbnail: `Warm garden still of the Crew, title “${s.title}”, no scare faces.`,
    endScreen: "Sing again or open the family activity on Fruits Crew.",
  })),
];

export const socialPosts = [
  {
    platform: "Instagram / Facebook (parents)",
    text: "Come meet the world that talks. Original songs that turn screen time into family learning. Everything is connected. Each one teach one. — Fruits Crew, created by Darren-neil",
  },
  {
    platform: "TikTok / Shorts (family)",
    text: "Little Seed: Why does the rain need the root? Mama Soursop: Because water travels, and roots hold out their hands. #FruitsCrew #EverythingIsConnected",
  },
  {
    platform: "X / press",
    text: "Fruits Crew is a worldwide children’s learning universe. Fruits, soil, rain and sunlight talk, sing and learn together. Original songs. Created by Darren-neil.",
  },
];

export const schoolLessons = [
  {
    title: "Circle: Wake Up, Little Seed",
    minutes: "15–20",
    ages: "Nursery–Year 2",
    steps: [
      "Listen to the story once.",
      "Children curl as seeds, then grow on the chorus.",
      "Ask: what does a seed need? Water, warmth, time.",
      "Send home the jar-bean drawing (adult help).",
    ],
  },
  {
    title: "Count the Mangoes",
    minutes: "10",
    ages: "Nursery–Year 1",
    steps: [
      "Clap 1 to 10 with the song.",
      "Count real fruit or spoons.",
      "Talk about not rushing the count.",
    ],
  },
  {
    title: "Roots Hold Hands",
    minutes: "15",
    ages: "Year 1–3",
    steps: [
      "Stand back-to-back and link fingers.",
      "Name hidden helpers: soil, water, roots.",
      "Do not pull plants up to “see roots.”",
    ],
  },
];

export const launchWeek = [
  { day: "Day 1", item: "Publish Wake Up, Little Seed! (long + Shorts chorus)." },
  { day: "Day 2", item: "Post parent carousel: jar-bean activity." },
  { day: "Day 3", item: "Upload Count the Mangoes karaoke." },
  { day: "Day 4", item: "School/library email with lesson cards." },
  { day: "Day 5", item: "Rain, Sun, Grow movement clip." },
  { day: "Day 6", item: "Family Sunday: Roots Hold Hands bedtime cut." },
  { day: "Day 7", item: "Review comments with an adult; no child-to-child replies." },
];

export const pressBoilerplate = `${BRAND.name} is a joyful worldwide children’s learning and animation universe created by ${BRAND.creator}. ${BRAND.description} ${BRAND.cultures} Child-facing message: ${BRAND.childMessage} Parent-facing message: ${BRAND.parentMessage}`;
