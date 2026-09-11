# Portfolio AI

An interactive AI-powered portfolio that answers questions about a candidate's experience, skills, projects, and education using information extracted from their resume.

## Live Demo

**[Open Portfolio AI](https://portfolio-ai-8lnc.onrender.com/)**

The live application is hosted on Render and serves the frontend and FastAPI backend from the same service.

## Features

- Conversational portfolio interface for recruiter and visitor questions
- Resume parsing from PDF using structured AI output
- Answers grounded in the candidate's resume
- Responsive, single-page frontend
- FastAPI backend with a same-origin chat API
- Render deployment configuration included

## Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Backend:** Python, FastAPI, Uvicorn
- **AI:** Groq API
- **Resume processing:** pypdf and Pydantic
- **Deployment:** Render

## Run Locally

From the project directory:

```powershell
uv run uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

### Environment Variables

Create a `.env` file outside version control:

```env
GROQ_API_KEY=your_groq_api_key
```

Never commit `.env` or expose API keys in source code, screenshots, issues, or documentation.

## Production Deployment

The repository includes `render.yaml` for deployment on Render.

1. Connect the GitHub repository to Render.
2. Create a new Blueprint from the repository.
3. Add `GROQ_API_KEY` as a Render environment variable.
4. Deploy the Blueprint.

Render runs the application with:

```text
uvicorn backend.main:app --host 0.0.0.0 --port $PORT
```

## Project Structure

```text
portfolioai/
├── backend/
│   ├── main.py
│   └── Navoneel Dey-Resume.pdf
├── frontend/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── render.yaml
├── requirements.txt
└── pyproject.toml
```

## License

This project is a personal portfolio application by Navoneel Dey.
