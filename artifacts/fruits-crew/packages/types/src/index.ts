/**
 * Shared domain types for Fruits Crew
 */

export type AgeBand = "sprouts" | "seedlings" | "explorers" | "investigators";

export type EvidenceLevel =
  | "verified"
  | "strong_evidence"
  | "plausible"
  | "traditional_claim"
  | "disputed"
  | "unverified"
  | "false";

export type VerificationStatus =
  | "verified"
  | "good_evidence"
  | "traditional_knowledge"
  | "disputed"
  | "unverified"
  | "false_misleading";

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

export type UserRole =
  | "super_admin"
  | "editor"
  | "researcher"
  | "fact_checker"
  | "teacher"
  | "moderator"
  | "creator"
  | "support"
  | "parent";

export interface Character {
  id: string;
  slug: string;
  name: string;
  species: string;
  category: CharacterCategory;
  age_personality?: string;
  voice_style?: string;
  accent?: string;
  strengths?: string[];
  weaknesses?: string[];
  catchphrase?: string;
  learning_role?: string;
  colour_palette?: Record<string, string>;
  physical_description?: string;
  expressions?: string[];
  relationships?: Record<string, unknown>;
  backstory?: string;
  is_core?: boolean;
  sort_order?: number;
  image_url?: string;
}

export interface Plant {
  id: string;
  slug: string;
  common_name: string;
  scientific_name?: string;
  other_names?: string[];
  plant_family?: string;
  native_region?: string[];
  current_distribution?: string[];
  description?: string;
  growth_habit?: string;
  edible_parts?: string[];
  traditional_uses?: string;
  documented_nutrients?: Record<string, string>;
  warnings?: string;
  toxic_parts?: string[];
  allergens?: string[];
  historical_notes?: string;
  cultural_notes?: string;
  verification_status?: VerificationStatus;
  character_id?: string;
  image_url?: string;
}

export interface Claim {
  id: string;
  claim_text: string;
  category?: string;
  source?: string;
  source_type?: string;
  source_date?: string;
  evidence_level: EvidenceLevel;
  status?: VerificationStatus;
  notes?: string;
  plant_id?: string;
  character_id?: string;
}
