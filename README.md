# MedMatch AI

> AI-powered medical records management for patients, doctors, pharmacies, and families.

## Monorepo layout

```
MedMatchAI/
  frontend/          Next.js 16 · TypeScript · Tailwind v4
  backend/           FastAPI · Python · Supabase · Redis
  launch.md          Local setup guide
```

## Local Hosting & Deployment

MedMatch AI can be fully hosted locally on your own machine or private network using Supabase Local and Docker. You do not need to rely on cloud services if privacy and local hosting are a strict requirement. See `launch.md` for complete details.

## Quick links

| | |
|--|--|
| Local setup | [`launch.md`](launch.md) |
| Frontend README | [`frontend/README.md`](frontend/README.md) |
| Backend README | [`backend/README.md`](backend/README.md) |


## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |
| Backend | FastAPI, Python, Pydantic v2, uvicorn |
| Database | Supabase PostgreSQL, pgvector, Row Level Security |
| Storage | Supabase Storage (private buckets) |
| Queue | Redis + background worker |
| AI/ML | TrOCR, Florence-2, RAG with pgvector |
| Auth | Supabase Auth (JWT, email, phone OTP) |
