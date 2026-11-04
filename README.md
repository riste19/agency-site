# Northbound Studio — Agency Website

A fast, accessible, conversion-optimized one-page marketing site for a web
development company. Built to look like a top-tier agency made it.

> **Aesthetic:** Refined premium (warm ivory, deep forest green + antique gold, Fraunces display serif).
> **Stack:** React + Vite. **Hosting:** any free static host (Cloudflare Pages recommended).

---

## Why this stack

Vite compiles React into a tiny, fully static `dist/` folder (plain HTML/CSS/JS).
That means **zero server, zero runtime cost, and free hosting anywhere** —
plus fast load times and great Lighthouse scores out of the box. The only
runtime dependency is `motion` (animations), kept intentionally lean.

---

## Quick start (run locally)

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd agency-site
npm install        # install dependencies
npm run dev        # start the dev server (hot reload)
```

Open the printed URL (usually http://localhost:5173).

To preview the real production build:

```bash
npm run build      # outputs static files to dist/
npm run preview    # serves dist/ locally to check it
```

---

## 🔧 Before you go live — replace these placeholders

Everything you need to personalize is centralized. **Most edits happen in one file:**
`src/data/content.js`. Search the project for `[REPLACE]` to find them all.

| What | Where |
| --- | --- |
| **Company name** | `src/data/content.js` → `brand.name` (also `index.html`, `public/favicon.svg`) |
| **Tagline / one-liner** | `src/data/content.js` → `brand.tagline` |
| **Contact email** | `src/data/content.js` → `brand.email` |
| **⭐ Formspree form endpoint** | `src/data/content.js` → `brand.formEndpoint` (see "Contact form" below) |
| **Social links** | `src/data/content.js` → `brand.socials` (also `index.html` JSON-LD) |
| **Hero headline & copy** | `src/data/content.js` → `hero` |
| **Trust logos & stats** | `src/data/content.js` → `trust` |
| **Services copy** | `src/data/content.js` → `services` |
| **Portfolio projects** | `src/data/content.js` → `work.projects` (swap gradients for real case studies) |
| **Testimonials** | `src/data/content.js` → `testimonials` (get permission to use real quotes) |
| **SEO title / description / OG tags** | `index.html` (`<title>`, meta tags, JSON-LD) |
| **Canonical & OG URLs** | `index.html` → replace `https://your-domain.com/` |
| **Favicon monogram** | `public/favicon.svg` |
| **Social share image** | `public/og-image.svg` (optionally export to a 1200×630 PNG) |
| **robots.txt sitemap URL** | `public/robots.txt` |

The site works and looks complete with the placeholders in place — swap them
at your own pace.

---

## ✉️ Contact form (Formspree)

The form is wired to **Formspree** so it works on a static host with no backend.

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form; point its notifications at your real inbox.
3. Copy the form's endpoint (looks like `https://formspree.io/f/abcdwxyz`).
4. Paste it into `src/data/content.js` → `brand.formEndpoint`.
5. Submit a test message to confirm it lands in your inbox.

Until you add a real endpoint, the form will show a friendly error state and
point visitors at your email address. A honeypot field is included for basic
spam protection.

---

## 🚀 Deploy for free

### Option A — Cloudflare Pages (recommended)

Generous free tier, fast global CDN.

**Via GitHub (auto-deploys on every push):**
1. Push this project to a GitHub repository.
2. Go to the [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select your repo, then set:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Your site goes live at `your-project.pages.dev`.
5. (Optional) Add your custom domain under the project's **Custom domains** tab.

**Via direct upload (no GitHub needed):**
1. Run `npm run build` locally.
2. Cloudflare dashboard → **Pages** → **Create** → **Upload assets**.
3. Drag in the **`dist/`** folder → **Deploy**.

### Option B — Netlify

1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag in the
   **`dist/`** folder. Done — you get a live URL instantly.

**Or connect Git:** New site → pick repo → build command `npm run build`,
publish directory `dist`. The included `public/_redirects` file is already set up.

### Option C — GitHub Pages

1. In `vite.config.js`, add `base: "/<your-repo-name>/"` (Pages serves from a subpath).
2. Run `npm run build`, then publish the `dist/` folder to a `gh-pages` branch
   (e.g. with the `gh-pages` npm package) and enable Pages in repo settings.

> Cloudflare Pages / Netlify are simpler because they serve from the root — no
> `base` path tweaking needed.

---

## Project structure

```
agency-site/
├─ index.html                 # SEO meta, OG/Twitter tags, JSON-LD, fonts
├─ public/                    # static assets copied as-is
│  ├─ favicon.svg
│  ├─ og-image.svg
│  ├─ robots.txt
│  └─ _redirects              # SPA fallback (Netlify/Cloudflare)
├─ src/
│  ├─ main.jsx                # React entry
│  ├─ App.jsx                 # assembles all sections
│  ├─ index.css               # design tokens + base + utilities
│  ├─ data/content.js         # ⭐ ALL copy & placeholders live here
│  └─ components/
│     ├─ Nav, Hero, TrustStrip, Services, WhyUs, Process,
│     ├─ Portfolio, Testimonials, FinalCTA, Contact, Footer
│     ├─ ui/                  # Section, Reveal, Button, CountUp
│     └─ atmosphere/          # GradientMesh, Grain
└─ vite.config.js
```

---

## Customizing the look

- **Colors:** edit the CSS variables at the top of `src/index.css` (`:root`).
  Change `--forest`, `--gold`, `--canvas` and the whole site re-themes.
- **Fonts:** swap the Google Fonts `<link>` in `index.html` and update
  `--font-display` / `--font-body` in `src/index.css`.
- **Sections:** reorder or remove them in `src/App.jsx`.

---

## Accessibility & performance notes

- Semantic landmarks, a skip link, visible focus rings, and `prefers-reduced-motion`
  support are built in.
- Visuals use CSS/SVG (gradients, grain) instead of heavy images — fast and
  nothing to break.
- For the absolute best Lighthouse score you can self-host fonts with
  [`@fontsource`](https://fontsource.org) instead of the Google Fonts CDN —
  optional, the CDN with `display=swap` already performs well.
