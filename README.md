# Bruna — Photography & Videography Portfolio

Static portfolio site built with Astro 6, Tailwind CSS v4, PhotoSwipe v5, and Lenis. Hosted on Firebase Hosting (free tier).

---

## Dev

```bash
npm run dev       # start dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

---

## Deploy to Firebase

### First-time setup

1. Log in and initialize:
   ```bash
   npx firebase login
   npx firebase init hosting
   # Public dir: dist  /  Single-page app: No  /  Overwrite dist/index.html: No
   ```
2. Update `.firebaserc` with your actual Firebase project ID.
3. Build and deploy:
   ```bash
   npm run build && npx firebase deploy
   ```

### Custom domain

Firebase Console → Hosting → Add custom domain. Free SSL auto-provisioned.

---

## How to add a new photo

1. Drop the image into `src/assets/photos/` — name it `037.jpg`.
2. Create `src/content/photos/037.json`:
   ```json
   {
     "src": "../../assets/photos/037.jpg",
     "alt": "Describe the photo for screen readers",
     "aspectRatio": "3/4",
     "order": 37
   }
   ```
   `aspectRatio` options: `"3/4"` (portrait), `"4/3"` (landscape), `"1/1"` (square).
3. `npm run build && npx firebase deploy`

Astro handles resizing, WebP conversion, and responsive srcset automatically.

---

## Before going live — replace placeholder content

- `src/data/site.json` — real email, Instagram handle, city
- `src/assets/portrait.jpg` — Bruna's actual portrait
- `src/assets/photos/` — real photography work
- `src/components/About.astro` — bio text and client list
- `src/content/videos/reel.json` — real Vimeo ID

---

## Tech stack

| Tool | Purpose |
|---|---|
| Astro 6 | Static site generator |
| Tailwind CSS 4 | Utility-first styles |
| PhotoSwipe 5 | Lightbox |
| Lenis 1 | Smooth scroll |
| @fontsource/anton + inter | Self-hosted fonts |
| Firebase Hosting (free) | CDN + hosting |
