---
name: snapshot
description: Takes Playwright screenshots of every page of the website (desktop + mobile, plus interactive states) and saves them to previous-versions/YYYY-MM-DD/.
---

# Snapshot Skill

When this skill is invoked, capture the current visual state of the entire website.

## What it does

- Auto-discovers every `.html` file in the repo (skips `node_modules`, `.git`, `previous-versions`, etc.)
- Starts a local HTTP server so fonts, CSS, and assets load correctly
- Takes a **full-page screenshot** of each page at two viewports:
  - Desktop: 1440 × 900
  - Mobile: 390 × 844
- Clicks through every Bootstrap interactive component (navbar toggler, dropdowns, collapses, modals, tabs, accordions, `<details>`) and screenshots each opened state
- Saves all images to `previous-versions/YYYY-MM-DD/` (date of the snapshot)

## Steps to run

### 1. Check Playwright browsers are installed
Run this once if you haven't already (or if browser launch fails):
```
npx playwright install chromium
```

### 2. Run the snapshot script
```
node .agents/skills/snapshot/snapshot.js
```

### 3. Report results
After the script finishes, tell the user:
- Which pages were captured
- How many interactive states were found per page
- The folder path where screenshots were saved (e.g. `previous-versions/2026-05-16/`)
- Whether they want to commit the snapshots to git

## Output folder structure

```
previous-versions/
└── 2026-05-16/
    ├── index-desktop.png
    ├── index-mobile.png
    ├── index-desktop-interact-0.png   ← navbar open state
    ├── about-desktop.png
    ├── about-mobile.png
    ├── blog-desktop.png
    ├── blog-mobile.png
    └── ...
```

## Notes

- The script serves the site on `localhost:8787`. If that port is in use, the script will fail — ask the user to free it or edit `PORT` in `snapshot.js`.
- Hoverable states (CSS `:hover`) are not captured — only click-triggered states.
- If a new page is added to the repo, it is picked up automatically on the next snapshot.
- Snapshots can be large. Recommend adding `previous-versions/` to `.gitignore` if the user doesn't want them committed, or committing selectively.
