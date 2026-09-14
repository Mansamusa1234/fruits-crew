# Fruits Crew

**Back to Nature — Everything Is Connected**

Created by Darren-neil

Fruits Crew is a global children’s educational entertainment universe centred on reconnecting children with nature.

> Everything Is Connected. Each One Teach One.

## Vision

Friendly fruit characters expand into the entire living world. Children discover plants, animals, ecosystems, mathematics, music, cultures and stewardship — learning constantly without feeling lectured.

## Monorepo Structure

```
fruits-crew/
├── apps/
│   ├── web/          # Next.js web app (primary)
│   ├── mobile/       # React Native + Expo (Phase 8)
│   ├── admin/        # Admin CMS dashboard
│   └── api/          # Dedicated API services (if needed)
├── packages/
│   ├── ui/           # Shared design system
│   ├── database/     # Schema, migrations, seeds
│   ├── auth/         # Auth utilities
│   ├── ai/           # Safe AI Nature Guide
│   ├── curriculum/   # Learning paths & content
│   ├── game-engine/  # Educational games
│   ├── analytics/    # Learning analytics
│   ├── types/        # Shared TypeScript types
│   └── config/       # Shared configs (eslint, tsconfig)
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── ...
```

## Tech Stack

| Layer        | Choice                          |
|--------------|---------------------------------|
| Web          | Next.js 15, React 19, TypeScript |
| Mobile       | React Native + Expo             |
| Styling      | Tailwind CSS                    |
| Database     | PostgreSQL via Supabase         |
| Auth         | Supabase Auth                   |
| Storage      | Supabase Storage                |
| Hosting      | Vercel (web) + Supabase         |
| Monorepo     | pnpm + Turborepo                |
| Testing      | Vitest + Playwright             |

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- Supabase account (free tier is fine for development)

### Setup

```bash
# Clone (or work in this repo)
cd fruits-crew

# Install dependencies
pnpm install

# Copy environment
cp .env.example .env.local
# Edit .env.local with your Supabase keys

# Start development
pnpm dev
```

Web app runs at http://localhost:3000

### Database

```bash
# Generate types / run migrations (once Supabase linked)
pnpm db:migrate
pnpm db:seed
```

## Development Phases

1. **Foundation** — monorepo, homepage, auth, characters, plants, admin
2. **Content** — encyclopedia, episodes, music, search
3. **Learning** — maths, quizzes, curriculum, progress
4. **Play** — games, achievements, virtual garden
5. **World** — interactive map, ecosystems
6. **AI** — safe Nature Guide
7. **Community** — adult community, fact-checking
8. **Mobile** — iOS & Android
9. **Global** — languages, schools, books, merchandise

## Core Values

- 1ness / Oneness
- Each One Teach One
- Compassion, Curiosity, Evidence
- Nature, Culture, Stewardship
- Cooperation, Creativity

## Child Safety

Built for UK Age Appropriate Design Code, COPPA, GDPR and app-store child policies. Minimal data, parental controls, no behavioural advertising to children, no unrestricted messaging.

## License

Proprietary — All rights reserved. Created by Darren-neil.
