# CRED Masterpiece

Lightweight Vite + React demo reproducing a premium CRED-style landing page with a NeoPOP 3D aesthetic and an interactive credit score simulator.

Quick start

```bash
cd "c:\Users\91866\Downloads\cred-masterpiece"
npm install
npm run dev
```

Open http://localhost:5173/ to view the app.

Notes
- `src/index.css` intentionally contains only `@import "tailwindcss"` per request. If you want Tailwind utilities to work, I can add Tailwind config and PostCSS setup.
- The NeoPOP visuals are implemented in `src/styles/neopop.css` and components in `src/components/`.

Files of interest
- `src/App.jsx` — app composition
- `src/components/ScoreSimulator.jsx` — interactive slider (300–900)
- `src/styles/neopop.css` — visual styles and NeoPOP buttons

Next steps (optional)
- Add Tailwind official setup
- Add production build config and deploy instructions
