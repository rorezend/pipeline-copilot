# Pipeline Copilot — Web Prototype

A mock prototype demonstrating the Meeting → Pipeline and U2C / Hygiene Queue workflows.

## Getting Started

```bash
cd web
npm install
npm run dev
```

Then open http://localhost:5173

## Pages

- / — Hero page with project overview
- /meetings — Select a meeting, generate pipeline draft
- /u2c — Uncommitted milestone queue with auto-paste comments
- /milestones/:id — Milestone detail with before/after comment diff
