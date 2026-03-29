# Croak Webpage

Landing page for Croak, a smart water quality monitoring product.

This repository contains the current frontend for the Croak website, including:

- the main landing page
- the `/nosotros` page
- GitHub Pages deployment setup
- real product branding and prototype preview assets

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- GitHub Pages

## Requirements

- Node.js
- npm

Check your versions with:

`node -v`
`npm -v`

## Run Locally

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

Then open the local URL shown in the terminal, usually:

`http://localhost:5173`

## Build

Create a production build:

`npm run build`

## Deploy

This project is configured for GitHub Pages.

Publish the current `dist/` build with:

`npm run deploy`

Production URL:

[https://santiagocachoo.github.io/croak_webpage/](https://santiagocachoo.github.io/croak_webpage/)

About page URL:

[https://santiagocachoo.github.io/croak_webpage/#/nosotros](https://santiagocachoo.github.io/croak_webpage/#/nosotros)

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — generate production build into `dist/`
- `npm run predeploy` — build before deploy
- `npm run deploy` — publish `dist/` to GitHub Pages

## Project Structure

```text
croak_webpage/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── ProblemSolution.tsx
│   │       ├── AppPreview.tsx
│   │       ├── FAQ.tsx
│   │       ├── FinalCTA.tsx
│   │       └── Footer.tsx
│   ├── assets/
│   │   ├── croak_hero.png
│   │   ├── croak_logo.png
│   │   └── preview_app.png
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── AboutPage.tsx
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── postcss.config.mjs
├── .gitignore
└── README.md
```

## How the App Works

- `index.html` provides the root HTML container
- `src/main.tsx` mounts the React app and wraps it with `HashRouter`
- `src/app/App.tsx` defines the main routes
- `src/pages/HomePage.tsx` renders the landing page
- `src/pages/AboutPage.tsx` renders the `/nosotros` page
- `src/app/components/` contains the reusable sections used across pages
- `src/assets/` contains local image assets used by the UI
- `src/styles/` contains the global styling entry and theme files

## Routing

The project uses `HashRouter` because it is deployed on GitHub Pages.

Current routes:

- `/#/` — landing page
- `/#/nosotros` — about page

This avoids 404 issues on static hosting.

## Assets

Current local image assets:

- `croak_logo.png` — official Croak logo
- `croak_hero.png` — hero image
- `preview_app.png` — real prototype preview used in the app section

## Current Navigation Behavior

### Navbar

- `Producto` — goes to hero / landing start
- `Características` — goes to the benefits section
- `Cómo funciona` — opens the demo video or returns to the landing depending on page context
- `Preguntas` — goes to FAQ
- `Comprar ahora` — visible CTA, no purchase flow yet

### Footer

- product links mirror the landing sections
- `Nosotros` goes to `/#/nosotros`
- `Contacto` and `Soporte` use email
- legal placeholder links were removed for now

## Contact

Temporary contact and support email:

`croakfernando@gmail.com`

## Team Workflow

1. Pull latest changes
2. Create a branch
3. Make changes
4. Test locally
5. Commit clearly
6. Push branch
7. Open a PR or share the branch for review

Suggested branch names:

`feature/hero-animation`
`feature/about-page-copy`
`fix/github-pages-routing`
`refactor/footer-links`

Suggested commit messages:

`feat: add about page and routing`
`fix: correct GitHub Pages hash links`
`style: refine navbar spacing`
`docs: update project readme`

## Rules

- Do not commit `node_modules`
- Do not commit local editor junk
- `dist/` is generated output; deploy uses it, but source work should happen in `src/`
- Test locally before pushing
- Keep commits focused and descriptive
- Avoid adding dependencies unless they are actually needed
- Prefer improving existing components instead of duplicating sections

## Notes

- This project uses `HashRouter`, so internal page links should follow the GitHub Pages routing strategy
- Some Tailwind v4 CSS directives may show editor warnings in VS Code even when the project builds correctly
- If assets fail in production, prefer importing them into components instead of hardcoding string paths

## Recommended First Files to Learn

If you are new to the codebase, start with:

- `src/main.tsx`
- `src/app/App.tsx`
- `src/pages/HomePage.tsx`
- `src/pages/AboutPage.tsx`
- `src/app/components/Navbar.tsx`
- `src/app/components/Hero.tsx`
- `src/app/components/AppPreview.tsx`
- `src/app/components/Footer.tsx`
- `src/styles/theme.css`

## Typical Git Flow

Create a branch:

`git checkout -b feature/your-branch-name`

Commit changes:

`git add .`
`git commit -m "feat: describe your change"`

Push branch:

`git push -u origin feature/your-branch-name`

Deploy latest production build:

`npm run deploy`
