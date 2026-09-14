# Architecture

## Overview

Fruits Crew is a Turborepo monorepo with pnpm workspaces.

```
apps/web          → Public Next.js App Router site + child experience
apps/admin        → Internal CMS (role-based)
apps/mobile       → Expo React Native (later)
apps/api          → Optional dedicated services

packages/ui       → Design system (buttons, cards, characters, etc.)
packages/database → Supabase schema, migrations, seeds, typed client
packages/types    → Shared domain types
packages/config   → eslint, tsconfig, tailwind presets
packages/auth     → Auth helpers & session utilities
packages/curriculum → Lesson structures & age bands
packages/game-engine → Shared game logic
packages/ai       → Professor Fig / Nature Guide (Phase 6)
packages/analytics → Learning outcome events
```

## Data Flow

1. Child interacts via parent-controlled profile.
2. Progress written through RLS-protected Supabase tables.
3. Admin / researchers manage content via admin app + service role.
4. All factual claims live in a claims table with evidence levels.

## Security Model

- Row Level Security (RLS) on every table that holds user data.
- Service role key only on server / Edge Functions.
- Children never hold independent accounts; parents manage profiles.
- No behavioural ads directed at children.
- Input validation on every API route.

## Age Bands

| Band          | Ages  | Focus                              |
|---------------|-------|------------------------------------|
| Sprouts       | 2–4   | Colours, sounds, counting, shapes  |
| Seedlings     | 4–6   | Basic maths, phonics, simple science |
| Explorers     | 7–9   | Ecosystems, history, fractions     |
| Investigators | 10–12 | Deeper science, media literacy     |

## Deployment

- Web: Vercel
- Database / Auth / Storage: Supabase
- CI: GitHub Actions (lint → typecheck → test → build)
