# MedMatch AI — Frontend

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Supabase Auth

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
# Create a .env.local and fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/           # Next.js App Router pages and layouts
  lib/
    supabase.ts  # Supabase browser client (anon key, RLS-scoped)
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon (public) key — safe in the browser |
| `NEXT_PUBLIC_API_URL` | FastAPI backend URL (default: `http://localhost:8000`) |

Create `.env.local` and fill in the values. **Never commit `.env.local`.**

## Architecture

```
Browser (Next.js)
      │  HTTPS / JWT
      ▼
FastAPI backend  ──► Supabase PostgreSQL (RLS)
      │               Supabase Storage (private buckets)
      ▼
    Redis (background job queue)
      │
      ▼
  Worker (OCR / AI / embeddings)
```

The browser **never** receives the Supabase service-role key. All privileged writes go through the FastAPI backend.

## Related

- [`../backend/`](../backend) — FastAPI Python backend
- [`../launch.md`](../launch.md) — Full local setup guide
