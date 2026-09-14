import type { FamilyActivity } from "./schema";

export const activities: FamilyActivity[] = [
  {
    slug: "jar-bean",
    title: "The jar bean watch",
    ageBands: ["2-4", "5-7", "family"],
    minutes: 15,
    whatYouNeed: ["Clear jar", "Paper towel", "Dried beans (food beans, not mystery seeds)", "Water"],
    steps: [
      "An adult folds a damp — not dripping — towel in the jar.",
      "Tuck two beans against the glass.",
      "Place in bright indoor light, not a hot windowsill.",
      "Each day, one person draws what they see. Do not open and poke the roots.",
    ],
    why: "Makes germination visible: root down, shoot up.",
    safety: "Adult handles water and glass. Do not eat sprouted experiment beans unless you know they are a food type meant for sprouting.",
    modes: ["grow", "family", "watch"],
  },
  {
    slug: "count-mango-walk",
    title: "Count-the-mango walk (or any fruit)",
    ageBands: ["2-4", "5-7"],
    minutes: 10,
    whatYouNeed: ["Kitchen fruits or pictures"],
    steps: [
      "Line up 1 to 10 fruits or spoons.",
      "Clap as you count.",
      "Mix them and count again.",
      "Ask: did the number change when the order changed?",
    ],
    why: "Counting is conservation of number, not a race.",
    safety: "No choking hazards for under-threes. Sit to eat.",
    modes: ["count", "family"],
  },
  {
    slug: "needs-wants-market",
    title: "Pretend market: needs and wants",
    ageBands: ["5-7", "8-10", "family"],
    minutes: 20,
    whatYouNeed: ["Paper coins", "Toy fruit or drawings", "A small basket"],
    steps: [
      "Each child gets ten paper coins. This is pretend money, never real payments.",
      "Some items are needs (water, a simple meal). Some are wants (an extra sweet).",
      "Shop once. Talk about what is left.",
      "Try again with a ‘rainy week’ of fewer coins.",
    ],
    why: "Budgeting and fair exchange without gambling or real-money trading.",
    safety: "Keep this clearly pretend. No scores that shame. No real purchases in child mode.",
    modes: ["family", "quiz"],
  },
  {
    slug: "rain-dance",
    title: "Rain, sun, grow dance",
    ageBands: ["2-4", "family"],
    minutes: 8,
    whatYouNeed: ["Open floor space", "Optional: the in-app song"],
    steps: [
      "Wiggle fingers for rain.",
      "Stretch arms for sun.",
      "Rise on toes for grow.",
      "Freeze and wait — growing is not rushing.",
    ],
    why: "Links weather words to movement.",
    safety: "Clear the floor. Keep volume comfortable. Rest if dizzy.",
    modes: ["dance", "sing", "family"],
  },
];

export function getActivity(slug: string) {
  return activities.find((a) => a.slug === slug);
}
