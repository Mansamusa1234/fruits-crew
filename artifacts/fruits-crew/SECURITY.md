# Security

## Principles

- Never trust the frontend for authorization.
- Service role key stays on the server only.
- Row Level Security on all user-owned data.
- Minimal personal data for children.
- No behavioural advertising directed at children.

## Authentication

- Parents: email/password, magic link, Apple, Google.
- Children operate through parent-controlled profiles — not independent adult-style accounts.

## Environment

See `.env.example`. Secrets are never committed.

## Upcoming

- Rate limiting
- CSRF where relevant
- Input validation (Zod)
- Secure uploads
- Dependency & secret scanning in CI
- Database backups (Supabase)
