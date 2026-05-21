# Build Coven

Women-led AI coding school — MVP course platform for **Pilot 001: Build Your First Website With AI**.

Runs on **Cloudflare Workers** (free tier) with **D1** (free SQLite database). No Supabase.

## Stack

- **Next.js 15** (App Router) on **Cloudflare Workers** via [OpenNext](https://opennext.js.org/cloudflare)
- **D1** — courses, applications, testimonials (free)
- **Tailwind CSS v4** + editorial design system
- Placeholders: **Stripe**, **Resend**

## Quick start (local)

```bash
npm install

# Create local D1 + schema + seed data
npm run db:migrate:local
npm run db:seed:local

# Dev with D1 bindings (recommended)
npm run dev
```

`next dev` uses `initOpenNextCloudflareForDev()` so D1 works locally via `wrangler.jsonc`.

Without D1 migrations, the app still runs using in-memory storage for applications and seed data for courses.

## Deploy to Cloudflare (free)

```bash
# One-time: create remote D1
npm run db:create
# Paste database_id into wrangler.jsonc under d1_databases

npm run db:migrate:remote
npm run db:seed:remote

npm run deploy
```

Login: `npx wrangler login`

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Next.js dev + local D1 |
| `npm run preview:cf` | Full Worker preview |
| `npm run deploy` | Build + deploy to Cloudflare |
| `npm run db:migrate:local` | Apply schema locally |
| `npm run db:seed:local` | Seed Pilot 001 locally |

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page |
| `/courses` | Course discovery |
| `/courses/build-your-first-website-with-ai` | Pilot 001 detail |
| `/apply` | Application form → D1 |
| `/thank-you` | Confirmation |
| `/faq` | FAQ |
| `/admin` | Applications table |

## Database (D1)

- Schema: `d1/migrations/0001_schema.sql`
- Seed: `d1/seed.sql`

Tables: `instructors`, `courses`, `modules`, `testimonials`, `applications`

## Production TODOs

- [ ] **Stripe** — set `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` for Pilot 001 ($597)
- [ ] **Resend** — set `RESEND_API_KEY` + `RESEND_FROM_EMAIL` (confirmation emails wired)
- [x] **Auth** — `ADMIN_SECRET` middleware + `/admin/login`
- [ ] Paste real `database_id` in `wrangler.jsonc` after `db:create`

### Secrets (Cloudflare)

```bash
npx wrangler secret put ADMIN_SECRET
npx wrangler secret put RESEND_API_KEY
```

Local dev: copy `.env.example` to `.env.local` or use `.dev.vars`.

## Why Cloudflare?

- **Workers**: 100k requests/day free
- **D1**: 5M rows read/day, 100k writes/day free
- No paid Postgres required

## Project structure

```
src/
  app/              # Next.js routes + API
  components/
  lib/db/           # D1 data access
  data/seed.ts      # Fallback mock data
d1/
  migrations/       # D1 schema
  seed.sql
wrangler.jsonc      # Worker + D1 config
open-next.config.ts
```
