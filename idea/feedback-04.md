GOAL:
Deploy a Vite + React portfolio project to GitHub Pages using a USER PAGE repository.

CONTEXT:
- Repository name: PangeranSilaen.github.io
- Target URL: https://pangeransilaen.github.io
- Vite project located in /portfolio
- GitHub Pages source: main branch / (root)
- GitHub Pages serves STATIC FILES ONLY

STEP 1 — BUILD THE PROJECT
Run the following commands inside the portfolio folder:

cd portfolio
npm install
npm run build

This must produce:
portfolio/dist/

--------------------------------------------------

STEP 2 — DEPLOY BUILD OUTPUT TO ROOT REPOSITORY
Move ONLY the CONTENT of the dist folder (not the folder itself) to the root of the repository:

cd ..
rm -rf index.html assets
cp -r portfolio/dist/* .

After this, the root repository structure must look like:

PangeranSilaen.github.io/
├─ index.html
├─ assets/
├─ portfolio/
├─ idea/
└─ README.md

--------------------------------------------------

STEP 3 — COMMIT AND PUSH
Commit and push the static build output:

git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push origin main

--------------------------------------------------

STEP 4 — GITHUB PAGES SETTINGS (DO NOT CHANGE)
- Branch: main
- Folder: /(root)

The site must be served from:
https://pangeransilaen.github.io

--------------------------------------------------

STEP 5 — VITE CONFIG REQUIREMENT
Ensure vite.config.ts is configured for a USER PAGE:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})

--------------------------------------------------

STRICT RULES:
- Do NOT deploy source React files.
- Do NOT deploy node_modules.
- Do NOT set base path to /portfolio/.
- Do NOT configure GitHub Pages to serve from /portfolio or /docs.
- GitHub Pages must serve ONLY the built static files from root.

EXPECTED RESULT:
A fully functional portfolio website live at:
https://pangeransilaen.github.io
