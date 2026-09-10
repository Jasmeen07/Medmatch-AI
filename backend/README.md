# MedMatch AI — Backend

FastAPI · Python 3.12+ · Pydantic v2 · Supabase · Redis

## Quick start

### Using `uv` (recommended — fast, no activation needed)

```bash
# Install uv if you haven't already
# Windows:   powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
# Mac/Linux: curl -LsSf https://astral.sh/uv/install.sh | sh

cd backend
uv run fastapi dev main.py
```

### Using classic venv

```bash
cd backend
python -m venv venv

# Windows
.\venv\Scripts\activate
# Mac / Linux
source venv/bin/activate

pip install -r requirements.txt
fastapi dev main.py
```

Backend runs on **http://localhost:8000**.  
Interactive API docs at **http://localhost:8000/docs**.

## Environment variables

Create a `.env` file and fill in `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, etc.

| Variable | Default | Description |
|----------|---------|-------------|
| `SUPABASE_URL` | — | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | — | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | — | Service-role key (backend only, never in browser) |
| `CORS_ALLOWED_ORIGINS` | `http://localhost:3000` | Comma-separated allowed frontend origins |
| `REDIS_URL` | `redis://localhost:6379` | Redis connection URL |
| `ENVIRONMENT` | `development` | `development` or `production` |

## Project structure

```
backend/
  main.py          FastAPI app + CORS middleware
  config.py        pydantic-settings Settings class
  requirements.txt Pinned dependencies
```

## Key design rules

- The **service-role key** must never leave this backend process.
- All requests from the browser arrive via the frontend → FastAPI → Supabase (service-role).
- All user-facing reads from the database run under the caller's JWT so RLS applies.
