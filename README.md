# Build Coven — Vercel

Women-led AI coding school MVP. Deploys to **Vercel** (free hobby tier).

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deploy to Vercel

```bash
npx vercel link
npx vercel env pull .env.local
npx vercel --prod
```

Or connect [github.com/tropicgirlie/buildcoven](https://github.com/tropicgirlie/buildcoven) in the Vercel dashboard for automatic deploys.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `ADMIN_SECRET` | Protects `/admin` and application API |
| `RESEND_API_KEY` | Confirmation emails on apply |
| `RESEND_FROM_EMAIL` | Sender address |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` | Enrollment link for accepted applicants |

## Stack

- Next.js 15 App Router
- Tailwind CSS v4
- In-memory application storage (upgrade to Vercel Postgres/KV for persistence)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Pilot 001 landing (mockup layout) |
| `/courses` | Course discovery |
| `/apply` | Application form |
| `/admin` | Applications dashboard |
