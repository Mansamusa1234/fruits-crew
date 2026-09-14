-- =============================================================================
-- Fruits Crew — Initial Schema
-- PostgreSQL / Supabase
-- =============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================================================
-- ENUMS
-- =============================================================================

CREATE TYPE age_band AS ENUM ('sprouts', 'seedlings', 'explorers', 'investigators');
CREATE TYPE evidence_level AS ENUM (
  'verified',
  'strong_evidence',
  'plausible',
  'traditional_claim',
  'disputed',
  'unverified',
  'false'
);
CREATE TYPE verification_status AS ENUM (
  'verified',
  'good_evidence',
  'traditional_knowledge',
  'disputed',
  'unverified',
  'false_misleading'
);
CREATE TYPE user_role AS ENUM (
  'super_admin',
  'editor',
  'researcher',
  'fact_checker',
  'teacher',
  'moderator',
  'creator',
  'support',
  'parent'
);
CREATE TYPE character_category AS ENUM (
  'fruits_crew',
  'wild_plant',
  'root',
  'seed_grain',
  'tree',
  'flower',
  'pollinator',
  'soil',
  'animal',
  'ocean',
  'elemental'
);

-- =============================================================================
-- USERS & PROFILES
-- =============================================================================

CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  role user_role NOT NULL DEFAULT 'parent',
  avatar_url TEXT,
  preferred_language TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE TABLE children (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  age_band age_band NOT NULL DEFAULT 'seedlings',
  birth_year INT, -- optional, for age calculation only
  avatar_character_id UUID, -- will FK later
  preferred_language TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE INDEX idx_children_parent ON children(parent_id);

-- =============================================================================
-- CHARACTERS
-- =============================================================================

CREATE TABLE characters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  species TEXT NOT NULL,
  category character_category NOT NULL,
  age_personality TEXT,
  voice_style TEXT,
  accent TEXT,
  strengths TEXT[],
  weaknesses TEXT[],
  catchphrase TEXT,
  learning_role TEXT,
  colour_palette JSONB,
  physical_description TEXT,
  expressions JSONB,
  relationships JSONB,
  backstory TEXT,
  is_core BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_characters_slug ON characters(slug);
CREATE INDEX idx_characters_category ON characters(category);

-- =============================================================================
-- PLANTS
-- =============================================================================

CREATE TABLE plants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  common_name TEXT NOT NULL,
  scientific_name TEXT,
  other_names TEXT[],
  plant_family TEXT,
  native_region TEXT[],
  current_distribution TEXT[],
  description TEXT,
  growth_habit TEXT,
  edible_parts TEXT[],
  traditional_uses TEXT,
  documented_nutrients JSONB,
  warnings TEXT,
  toxic_parts TEXT[],
  allergens TEXT[],
  historical_notes TEXT,
  cultural_notes TEXT,
  verification_status verification_status DEFAULT 'unverified',
  character_id UUID REFERENCES characters(id),
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_plants_slug ON plants(slug);
CREATE INDEX idx_plants_common_name ON plants(common_name);

-- =============================================================================
-- CLAIMS (evidence-based knowledge)
-- =============================================================================

CREATE TABLE claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  claim_text TEXT NOT NULL,
  category TEXT, -- e.g. 'history', 'nutrition', 'traditional_medicine'
  source TEXT,
  source_type TEXT, -- 'peer_reviewed', 'museum', 'oral_tradition', 'government', etc.
  source_date DATE,
  evidence_level evidence_level NOT NULL DEFAULT 'unverified',
  reviewer_id UUID REFERENCES profiles(id),
  status verification_status DEFAULT 'unverified',
  notes TEXT,
  plant_id UUID REFERENCES plants(id),
  character_id UUID REFERENCES characters(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- REGIONS / GEOGRAPHY
-- =============================================================================

CREATE TABLE regions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  ecosystem_types TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE countries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code CHAR(2) UNIQUE, -- ISO 3166-1 alpha-2
  name TEXT NOT NULL,
  region_id UUID REFERENCES regions(id),
  languages TEXT[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- EPISODES & CONTENT
-- =============================================================================

CREATE TABLE seasons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  number INT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE episodes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  season_id UUID REFERENCES seasons(id),
  number INT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  synopsis TEXT,
  age_bands age_band[],
  duration_seconds INT,
  video_url TEXT,
  thumbnail_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- LESSONS & CURRICULUM
-- =============================================================================

CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT
);

CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subject_id UUID REFERENCES subjects(id),
  age_band age_band NOT NULL,
  description TEXT,
  content JSONB, -- structured lesson content
  duration_minutes INT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE lesson_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id),
  status TEXT NOT NULL DEFAULT 'started', -- started, completed
  progress_percent INT DEFAULT 0,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(child_id, lesson_id)
);

-- =============================================================================
-- GAMES & ACHIEVEMENTS
-- =============================================================================

CREATE TABLE games (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  age_bands age_band[],
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE game_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  game_id UUID NOT NULL REFERENCES games(id),
  score INT,
  completed BOOLEAN DEFAULT FALSE,
  data JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID NOT NULL REFERENCES children(id) ON DELETE CASCADE,
  achievement_id UUID NOT NULL REFERENCES achievements(id),
  earned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(child_id, achievement_id)
);

-- =============================================================================
-- VIRTUAL GARDEN
-- =============================================================================

CREATE TABLE gardens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID NOT NULL UNIQUE REFERENCES children(id) ON DELETE CASCADE,
  name TEXT DEFAULT 'My Garden',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE garden_plants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  garden_id UUID NOT NULL REFERENCES gardens(id) ON DELETE CASCADE,
  plant_id UUID REFERENCES plants(id),
  stage TEXT NOT NULL DEFAULT 'seed', -- seed, sprout, growing, mature, harvested
  planted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_watered_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================================
-- LANGUAGES
-- =============================================================================

CREATE TABLE languages (
  code TEXT PRIMARY KEY, -- en, es, fr, pt, jam (patois), etc.
  name TEXT NOT NULL,
  native_name TEXT,
  is_active BOOLEAN DEFAULT FALSE
);

-- =============================================================================
-- UPDATED_AT TRIGGER
-- =============================================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER children_updated_at BEFORE UPDATE ON children
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER characters_updated_at BEFORE UPDATE ON characters
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER plants_updated_at BEFORE UPDATE ON plants
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER claims_updated_at BEFORE UPDATE ON claims
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER episodes_updated_at BEFORE UPDATE ON episodes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER lessons_updated_at BEFORE UPDATE ON lessons
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER gardens_updated_at BEFORE UPDATE ON gardens
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- =============================================================================
-- ROW LEVEL SECURITY (basic policies — expand in later migrations)
-- =============================================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE children ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE gardens ENABLE ROW LEVEL SECURITY;
ALTER TABLE garden_plants ENABLE ROW LEVEL SECURITY;

-- Profiles: users can read/update own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Children: parents manage their own children
CREATE POLICY "Parents can view own children"
  ON children FOR SELECT
  USING (auth.uid() = parent_id);

CREATE POLICY "Parents can insert own children"
  ON children FOR INSERT
  WITH CHECK (auth.uid() = parent_id);

CREATE POLICY "Parents can update own children"
  ON children FOR UPDATE
  USING (auth.uid() = parent_id);

-- Public read for published content (characters, plants, etc.)
-- These tables do not enable RLS for public encyclopedia data in MVP;
-- access controlled at application layer + later policies if needed.

-- =============================================================================
-- INDEXES for performance
-- =============================================================================

CREATE INDEX idx_claims_plant ON claims(plant_id);
CREATE INDEX idx_claims_evidence ON claims(evidence_level);
CREATE INDEX idx_episodes_season ON episodes(season_id);
CREATE INDEX idx_lessons_age ON lessons(age_band);
CREATE INDEX idx_lesson_progress_child ON lesson_progress(child_id);
