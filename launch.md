# MedMatch AI — Local Setup & Deployment Guide

## Architecture Overview

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |
| **Backend** | FastAPI, Python 3.12+, Pydantic v2, uvicorn |
| **Database & Auth** | Supabase (PostgreSQL, Auth, Storage) |
| **Queue** | Redis + background worker |

---

## Running Locally

### Prerequisites
- Node.js 20+
- Python 3.12+
- A Supabase project (cloud) **or** Docker for Supabase local

---

### 1. Supabase

**Cloud:** Create a project at [supabase.com](https://supabase.com), grab your URL and keys.

**Local (fully offline):**
```bash
supabase start
```
This spins up PostgreSQL, Auth, and Storage via Docker.

---

### 2. Backend (FastAPI)

```bash
cd backend
```

**Option A — `uv` (recommended, fastest, no activation needed):**
```bash
# Install uv if needed:
# Windows:   powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
# Mac/Linux: curl -LsSf https://astral.sh/uv/install.sh | sh

uv run fastapi dev main.py
```

**Option B — classic venv:**
```bash
python -m venv venv
# Windows:   .\\venv\\Scripts\\activate
# Mac/Linux: source venv/bin/activate

pip install -r requirements.txt
fastapi dev main.py
```

Create `backend/.env` with:
```env
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
CORS_ALLOWED_ORIGINS=http://localhost:3000
ENVIRONMENT=development
```

Backend runs at **http://localhost:8000** · Docs at **http://localhost:8000/docs**

---

### 3. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Create `frontend/.env.local` with:
```env
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<your-publishable-key>
```

Frontend runs at **http://localhost:3000**

---

## Running Tests

**Backend (pytest):**
```bash
cd backend
# Export env vars first so the test file can read them:
# Windows PowerShell:
$env:SUPABASE_URL="https://<project>.supabase.co"
$env:SUPABASE_ANON_KEY="<your-anon-key>"

pytest ../../tests/backend/
```

**Frontend (vitest):**
```bash
cd frontend
npx vitest run
```

---

## Production Deployment

### Frontend → Vercel
1. Push to GitHub.
2. Import the repo in Vercel.
3. Set **Root Directory** to `frontend/`.
4. Add env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.

### Backend → Render / Railway
Vercel serverless functions are unsuitable for long-running AI/OCR tasks. Use a persistent process:
- Set root directory to `backend/`.
- Start command: `uvicorn main:app --host 0.0.0.0 --port 10000`
- Set all backend env vars in the platform dashboard.

### Database → Supabase Cloud
- Create a project at [supabase.com](https://supabase.com).
- Run your schema SQL files via the SQL Editor.
- Copy the API URL and keys into your Vercel + Render env vars.
