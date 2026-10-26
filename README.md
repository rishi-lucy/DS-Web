# Mohan Babu University · Data Science Portal

A static, responsive learning portal for the MBU Data Science programme. It is built with vanilla HTML, CSS and JavaScript — no framework, bundler or backend is required.

## Run locally

From this folder:

```powershell
python -m http.server 8090 --bind 127.0.0.1
```

Open <http://127.0.0.1:8090>. The old Flask application and its SQLite database are not part of the running site.

## What is included

- **Student dashboard** — study streak, module/lab/resource KPIs, performance rings, quick actions and recent projects.
- **Modules** — five course modules with topic-level progress, a PDF reader/flip-book, and custom modules created in the browser.
- **Custom module materials** — attach a relative PDF path, an external learning-page URL, or a small local PDF/image (up to 1.5 MB). Local files stay in browser storage; nothing is uploaded to a server.
- **Lab experiments** — four-language code playground (Python, Java, C, C++) and per-sub-experiment code drafts that auto-save locally.
- **Tools and resources** — searchable toolkit and knowledge hub with saved bookmarks.
- **Projects** — project cards with a **Watch on YouTube** action that uses a saved project URL or a title/stack search.
- **AI Study Assistant** — a local, browser-only study guide grounded in this portal's modules, labs, tools and resources. It is not a live AI service.
- **Student profile** — personal details, portrait and module/experiment progress.
- **Light/dark theme** — sky-blue light palette and navy dark palette, restored before paint and persisted in `localStorage`.

## Browser storage keys

| Key | Purpose |
| --- | --- |
| `mbu_theme` | `light` or `dark` |
| `mbu_student` | Student profile details |
| `mbu_progress` | Module, lab and study progress |
| `mbu_resources` | User-added resources |
| `mbu_saved_res` | Saved resource bookmarks |
| `mbu_modules` | Custom modules and small attached files |
| `mbu_lab_drafts` | Auto-saved lab code drafts |
| `mbu_projects` | Project studio entries |
| `mbu_chat` | AI Study Assistant conversation history |
| `mbu_activity` | Recent activity feed |

## Project structure

```text
index.html, modules.html, module.html, experiments.html,
experiment.html, subexperiment.html, tools.html, resources.html,
projects.html, student.html, about.html, assistant.html
css/
  style.css, lab3d.css, premium.css
js/
  data.js, app.js, config.js, code-samples.js, lab3d.js, premium.js
assets/
  images/, modules/
```

## Important limitations

- This is a **static** site. Data is stored in the current browser only and does not sync across devices or visitors.
- Local module files are limited to **1.5 MB** so they can fit in `localStorage`. Larger files should be linked instead.
- The live code playground uses public execution services and Pyodide; an internet connection may be required. Configure endpoints in `js/config.js`.
- The PDF flip-book uses PDF.js from a CDN and needs internet access the first time.
- The Study Assistant is a deterministic local guide, not an LLM. To connect a real service, add a server endpoint and replace the local `assistantAnswer()` call in `js/app.js`; keep any API key on the server.
- The student portrait is a repository asset (`assets/images/profile.jpg`) and is served with the site, so it remains available after deployment. If the image cannot load, the avatar falls back to initials.

## Content and privacy

The portal does not send profile details, notes, drafts or uploaded module files to a server. External links (project repositories, YouTube, resources and compiler services) open directly in the browser.
