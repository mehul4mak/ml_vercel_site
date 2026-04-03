# Mehul Kumawat — Portfolio Site Plan

**Repo:** `git@mak:mehul4mak/ml_vercel_site.git`
**Local path:** `/home/mehul/portfolio`
**Hosting:** Vercel (auto-deploys on push to `main`)
**Stack:** Next.js 16 · Tailwind CSS · TypeScript · React 19

---

## Phase 1 — Foundation ✅ Done

- [x] Migrated from Expo/React Native to Next.js 16 + Tailwind CSS
- [x] `app/layout.tsx` — Root layout with Inter font, SEO metadata, dark background
- [x] `components/Navbar.tsx` — Fixed frosted-glass navbar, mobile hamburger menu, scroll-aware styling
- [x] `app/page.tsx` — Home page combining Hero + About + Skills sections
- [x] `components/Hero.tsx` — Profile photo, gradient name, role, bio, CTA buttons, social icons, floating badge, scroll indicator
- [x] `components/About.tsx` — Bio paragraphs + 4 stat cards (8+ yrs, 5 companies, 2 countries, 10+ projects)
- [x] `components/Skills.tsx` — 6 skill groups with colored tag pills (CV, Sensor Fusion, LLMs, MLOps, Languages, Cloud)
- [x] `components/Footer.tsx` — Links + built-with note
- [x] `app/globals.css` — Custom scrollbar, gradient-text utility, glassmorphism card styles, animations

---

## Phase 2 — Projects & Demos ✅ Done

- [x] `app/experience/page.tsx` — Full 8-role timeline (Sentics → Stellantis Lead → Stellantis Senior → Hanover → Upgrad/Byjus → CADD Center); Sentics in 5 grouped sections, all roles with full resume detail
- [x] `app/education/page.tsx` — Tabbed page: Education / Certifications / Languages
- [x] `app/projects/page.tsx` — 8 project cards with Production / Live / Completed status badges
- [x] `app/projects/[slug]/page.tsx` — Individual detail pages for all 8 projects
- [x] `app/projects/mnist/page.tsx` — MNIST demo: Upload image + Draw canvas tabs; Classify button ready for backend
- [x] `app/contact/page.tsx` — Contact form (Formspree) with name/email/message, success/error states + contact info cards
- [x] `public/resume.pdf` — Resume PDF with working Hero download button
- [x] `.gitignore` — node_modules, .next, .env excluded
- [x] Next.js upgraded 15.1.0 → 16.2.2 (CVE-2025-66478 fix)
- [x] Git author corrected to mehul4mak / mehul4mak@gmail.com across all commits

---

## Phase 3 — Polish 🔲 Todo

- [ ] Add `public/favicon.ico` and app icons
- [ ] SEO: `og:image` per page, `sitemap.xml`, `robots.txt`
- [ ] Scroll-triggered fade-in animations (Intersection Observer)
- [ ] GitHub activity / repo stats widget on projects page
- [ ] Performance audit (Lighthouse)
- [ ] Blog/notes section — optional, MDX-based

---

## Key File Locations

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page — imports Hero, About, Skills |
| `components/Hero.tsx` | Hero section — photo, bio, resume link |
| `components/Skills.tsx` | Skill tags — add/remove skills here |
| `app/projects/page.tsx` | Projects grid |
| `app/projects/[slug]/page.tsx` | Project detail pages |
| `app/projects/mnist/page.tsx` | MNIST demo — wire backend here |
| `app/experience/page.tsx` | Work timeline |
| `app/education/page.tsx` | Education, certifications, languages |
| `app/contact/page.tsx` | Contact form + info |
| `app/globals.css` | Global styles + design tokens |
| `tailwind.config.ts` | Tailwind theme |
| `next.config.ts` | Next.js config (image domains, etc.) |
| `vercel.json` | Vercel build config |

---

## Notes

- MNIST Classify button is disabled — wire up by setting the fetch URL in `app/projects/mnist/page.tsx` to your hosted backend endpoint
- Formspree form ID is hardcoded in `app/contact/page.tsx` — replace if needed
- Resume path: `public/resume.pdf`
