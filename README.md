# Pipeline Copilot

**Turn meetings into pipeline. Turn milestones into committed progress.**

Pipeline Copilot is an AI-powered prototype for Sales Specialists that automates two critical CRM workflows:

1. **Meeting → Pipeline** — Select a customer meeting transcript, and the Create Agent generates an opportunity draft with suggested milestones, stages, and revenue estimates.

2. **U2C / Hygiene Queue** — View all uncommitted milestones due by quarter-end. Select milestones and auto-paste structured comments (Next Step, Expected Outcome, Customer Status, Owner, Confidence) with a single click.

## Live Demo

👉 **[https://rorezend.github.io/pipeline-copilot/](https://rorezend.github.io/pipeline-copilot/)**

> Uses mock data only — no real MSX/D365 connections. State is stored in your browser's localStorage.

## Key Features

- **Create Agent** — Analyzes meeting transcripts to propose opportunities + milestones
- **Commit Prep Agent** — Generates structured milestone comments with readiness checklists
- **Confidence Scoring** — Heuristic-based High/Med/Low confidence per milestone
- **Before/After Diff** — Visual diff of existing vs. generated milestone comments
- **Simulated MSX Writeback** — One-click "paste to MSX" writes to local state
- **Reset Demo** — Clear all generated data and start fresh (button in navbar)

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- Client-side mock data (no backend)
- GitHub Pages deployment via Actions

## Getting Started (Local)

`ash
cd web
npm install
npm run dev
`

Open [http://localhost:5173](http://localhost:5173).

## Feedback

Open an [Issue](https://github.com/rorezend/pipeline-copilot/issues) or start a [Discussion](https://github.com/rorezend/pipeline-copilot/discussions) to share feedback.
