# Mehul Kumawat — Portfolio Site Plan

**Repo:** `git@mak:mehul4mak/ml_vercel_site.git`
**Local path:** `/home/mehul/portfolio`
**Hosting:** Vercel (auto-deploys on push to `main`)
**Stack:** Next.js 15 · Tailwind CSS · TypeScript · React 19

---

## Phase 1 — Foundation ✅ Done

**Commit:** `d4d07f4`

### What was built
- [x] Migrated from Expo/React Native to Next.js 15 + Tailwind CSS
- [x] `app/layout.tsx` — Root layout with Inter font, SEO metadata, dark background
- [x] `components/Navbar.tsx` — Fixed frosted-glass navbar, mobile hamburger menu, scroll-aware styling
- [x] `app/page.tsx` — Home page combining Hero + About + Skills sections
- [x] `components/Hero.tsx` — Profile photo (from mehul4mak.github.io), gradient name, role, bio, CTA buttons, social icons, floating badge, scroll indicator
- [x] `components/About.tsx` — Bio paragraphs + 4 stat cards (6+ yrs, 3 companies, 2 countries, 10+ projects)
- [x] `components/Skills.tsx` — 6 skill groups with colored tag pills (CV, Sensor Fusion, LLMs, MLOps, Languages, Cloud)
- [x] `components/Footer.tsx` — Links + built-with note
- [x] `app/projects/page.tsx` — 8 project cards (1 live MNIST, 7 coming soon)
- [x] `app/experience/page.tsx` — Full work timeline (Sentics → Stellantis Lead → Stellantis Senior → Hanover) + Education section
- [x] `app/contact/page.tsx` — Contact info cards (email, LinkedIn, GitHub, phone)
- [x] `app/globals.css` — Custom scrollbar, gradient-text utility, glassmorphism card styles, animations

### Design system
- **Background:** `#050507`
- **Accent gradient:** `#818cf8` (indigo) → `#22d3ee` (cyan)
- **Cards:** `rgba(255,255,255,0.03)` + `rgba(255,255,255,0.07)` border
- **Font:** Inter (Google Fonts)

---

## Phase 2 — Projects & Demos 🔲 Todo

> Branch: `phase-2-projects` (create when starting)

- [ ] Port MNIST digit upload demo → `/projects/mnist` (from old Expo app)
- [ ] Port MNIST drawing canvas demo → `/projects/mnist-draw`
- [ ] Add individual project detail pages `/projects/[slug]`
- [ ] Wire up a real contact form (Resend or Formspree for email delivery)
- [ ] Add resume PDF to `public/resume.pdf` and update download button in Hero
- [ ] Replace placeholder resume download link in `components/Hero.tsx`

---

## Phase 3 — Polish 🔲 Todo

- [ ] SEO: add `og:image` per page, sitemap, robots.txt
- [ ] Add scroll-triggered fade-in animations (Intersection Observer)
- [ ] GitHub activity / repo stats widget on projects page
- [ ] Blog/notes section (optional — MDX-based)
- [ ] Certifications section on Experience page (MLOps, Sensor Fusion, GenAI Nanodegrees)
- [ ] Add `public/favicon.ico` and app icons
- [ ] Performance audit (Lighthouse)

---

## Key File Locations

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page — imports Hero, About, Skills |
| `components/Hero.tsx` | Hero section — update photo, bio, resume link here |
| `components/Skills.tsx` | Skill tags — add/remove skills here |
| `app/projects/page.tsx` | Projects grid — add new projects here |
| `app/experience/page.tsx` | Work timeline — update roles here |
| `app/contact/page.tsx` | Contact info |
| `app/globals.css` | Global styles + design tokens |
| `tailwind.config.ts` | Tailwind theme (colors, animations) |
| `next.config.ts` | Next.js config (image domains, etc.) |

---

## Resume
Located at: `/mnt/c/Users/Asus/Downloads/Mehul_Kumawat_AI.pdf`
Copy to `public/resume.pdf` to enable the download button in the Hero.
