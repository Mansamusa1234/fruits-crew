/** Admin-ready content schema for Fruits Crew. Editorial status is required on factual records. */

export type AgeBand = "2-4" | "5-7" | "8-10" | "11-13" | "family";

export type EvidenceLevel =
  | "verified"
  | "strong_evidence"
  | "plausible"
  | "traditional_claim"
  | "historical_record"
  | "pending_review"
  | "disputed";

export type EditorialStatus =
  | "draft"
  | "in_review"
  | "approved"
  | "needs_native_speaker_review"
  | "published";

export type ContentMode =
  | "watch"
  | "sing"
  | "dance"
  | "karaoke"
  | "count"
  | "speak"
  | "grow"
  | "cook"
  | "travel"
  | "respect"
  | "protect"
  | "quiz"
  | "family";

export interface SourceCitation {
  title: string;
  publisher: string;
  url?: string;
  accessed: string;
  notes?: string;
}

export interface ClaimRecord {
  id: string;
  text: string;
  category: "botany" | "nutrition" | "history" | "culture" | "agriculture" | "safety";
  evidence: EvidenceLevel;
  sources: SourceCitation[];
  editorialStatus: EditorialStatus;
}

export interface CharacterRecord {
  slug: string;
  name: string;
  speciesOrElement: string;
  region: string;
  botanicalOrigin: string;
  personality: string;
  voiceDirection: string;
  learningSpeciality: string;
  colours: { primary: string; secondary: string; accent: string };
  textures: string;
  visualPrompt: string;
  catchphrase: string;
  story: string;
  relationships: Record<string, string>;
  accessibilityDescription: string;
  animationStates: string[];
  portrait: string;
  ageBands: AgeBand[];
}

export type PlantKind =
  | "fruit"
  | "vegetable"
  | "herb"
  | "grain"
  | "nut"
  | "legume"
  | "spice"
  | "wild";

export interface PlantRecord {
  slug: string;
  commonName: string;
  scientificName: string;
  kind: PlantKind;
  indigenousAndHistoricalNames: string[];
  botanicalOrigin: string;
  presentGrowingRegions: string[];
  climate: string;
  soilRequirements: string;
  seedAndGrowingCycle: string;
  seasons: string;
  growersAndCommunities: string;
  harvestingMethod: string;
  farmToFamily: string;
  transportAndFoodMiles: string;
  traditionalRecipes: string[];
  culturalHistory: string;
  historicalMovement: string;
  nutrition: string;
  safetyAndAllergies: string;
  languages: { language: string; name: string; note?: string }[];
  mapRegion: string;
  claims: ClaimRecord[];
  editorialStatus: EditorialStatus;
  relatedSongs: string[];
  relatedEpisodes: string[];
}

export interface LyricLine {
  t: number;
  text: string;
  role: "child" | "adult" | "chorus" | "grandparent";
}

export interface SongRecord {
  slug: string;
  title: string;
  learningObjective: string;
  chorus: string;
  childQuestion: string;
  adultResponse: string;
  grandparentWisdom: string;
  physicalAction: string;
  offlineActivity: string;
  ageBands: AgeBand[];
  languages: string[];
  tuningNote: string;
  lyrics: LyricLine[];
  danceSteps: string[];
  durationSec: number;
  relatedEpisode?: string;
  audioUrl?: string;
  poster?: string;
  videoUrl?: string;
}

export interface EpisodeRecord {
  slug: string;
  title: string;
  synopsis: string;
  mystery: string;
  predictionQuestion: string;
  natureExplanation: string;
  cooperationBeat: string;
  songSlug: string;
  offlineActivity: string;
  parentGuide: string;
  ageBands: AgeBand[];
  characters: string[];
  sources: SourceCitation[];
  marketing: MarketingPack;
}

export interface MarketingPack {
  youtubeTitle: string;
  description: string;
  thumbnailConcept: string;
  learningObjective: string;
  ageRange: string;
  keywords: string[];
  parentCta: string;
  safetyNotes: string;
  languages: string[];
  copyrightOwner: string;
  musicOwner: string;
  sources: string[];
}

export interface FamilyActivity {
  slug: string;
  title: string;
  ageBands: AgeBand[];
  minutes: number;
  whatYouNeed: string[];
  steps: string[];
  why: string;
  safety: string;
  modes: ContentMode[];
}
