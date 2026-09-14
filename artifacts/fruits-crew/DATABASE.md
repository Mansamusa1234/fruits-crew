# Database

## Platform

PostgreSQL via Supabase.

## Core Principles

- Every factual claim can become a structured `claims` row with an evidence level.
- Traditional knowledge is labelled as such — never automatically presented as clinical fact.
- Children data is isolated behind parent-controlled profiles and RLS.
- Soft deletion where appropriate.
- Timestamps and audit-friendly design.

## Schema Location

`packages/database/supabase/migrations/20240912000000_initial_schema.sql`

## Seed Data

- `packages/database/seed/characters.ts` — Core 8 characters
- `packages/database/seed/plants.ts` — ~50 plants (Caribbean, African heritage, British wild, global)

## Key Tables

| Table | Purpose |
|-------|---------|
| profiles | Parent / adult users |
| children | Child profiles (parent-owned) |
| characters | All character entities |
| plants | Plant encyclopedia |
| claims | Evidence-tagged statements |
| regions / countries | Geography |
| seasons / episodes | Animated content |
| subjects / lessons | Curriculum |
| lesson_progress | Learning tracking |
| games / game_sessions | Educational play |
| achievements / user_achievements | Seeds (not money) |
| gardens / garden_plants | Virtual garden |
| languages | i18n |

## Evidence Levels

`verified` · `strong_evidence` · `plausible` · `traditional_claim` · `disputed` · `unverified` · `false`

## Next Migrations

- Expand RLS policies
- Full content CMS tables
- Research submission workflow
- Creator programme tables
- Analytics events (privacy-respecting)
