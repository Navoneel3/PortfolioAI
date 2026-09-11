## Portfolio AI

FastAPI serves the portfolio frontend and the AI chat API from one service.

### Run locally

From this directory:

```powershell
uv run uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

Open `http://127.0.0.1:8000`.

### Deploy free on Render

1. Push this repository to GitHub, including `render.yaml` and `requirements.txt`.
2. In Render, choose **New > Blueprint** and select the GitHub repository.
3. When prompted, set `GROQ_API_KEY` to the value from your local `.env` file. Never commit `.env`.
4. Deploy. Render uses the included blueprint and serves the app at its generated `onrender.com` URL.

The production process is:

```text
uvicorn backend.main:app --host 0.0.0.0 --port $PORT
```
