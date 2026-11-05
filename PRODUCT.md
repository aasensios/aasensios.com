# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers and recruiters evaluating Alejandro Asensio for a frontend or product engineering role. They arrive from LinkedIn, a CV or a referral, scan quickly, and decide whether to reach out.

Secondary: engineering peers and leads who want to gauge his craft and look at his work and GitHub.

## Product Purpose

aasensios.com is Alejandro Asensio's personal site: who he is, what he does, where he has worked, the tools he uses and his side projects. Success is a hiring decision-maker understanding his profile in one scan and taking the next step (LinkedIn, GitHub, contact); for peers, success is credibility.

## Positioning

A frontend-focused product engineer who cuts steps out of interfaces ("can't stand an extra click"). The site itself demonstrates range: the same content is rendered in three complete, switchable styles (Marketing, SaaS, Minimalist), which a static CV or a typical portfolio does not do.

## Operating Context

- Single page (`src/pages/index.astro`) with three style panels and a toggle. Marketing is the default on every load; the choice is deliberately not persisted.
- The toggle needs JavaScript and is shown only when JS runs (`html.js`).
- All content lives in `src/content/site.ts`; each style has its own copy block there.
- Deployed to GitHub Pages at the custom domain aasensios.com via `.github/workflows/deploy.yml` on push to `main`.

## Capabilities and Constraints

- Stack: Astro 7, Tailwind CSS 4, TypeScript 6, Vite+ toolchain (`vp`), pnpm. Static output only, no server runtime.
- The three-style toggle is a permanent feature, not an exploration. Every style must stay complete and on par; new content must land in all three.
- Light and dark color schemes are both supported (`color-scheme: light dark`, per-scheme favicons, `colorDark` per company).
- "N years shipping" is computed from the first job start (June 2019), never hard-coded.

## Brand Commitments

- Name: Alejandro Asensio. Role line: "Frontend-focused product engineer".
- Voice: first person, plain, warm and direct; values simplicity and an obvious next action.
- Assets: `public/avatar.jpg`, light/dark favicons, company and tool logos in `public/logos/`.
- README names inspiration sources: cbusquets.com, glenn.me, shadcn.com.

## Evidence on Hand

- Experience: TrustYou (Product Engineer, 2022–present), Cognizant for Inditex (Frontend Engineer, 2021–2022), Capitole for Ficosa (Fullstack Engineer, 2021), BSC (Fullstack Engineer, 2019–2021).
- Side projects with public repos: Google Forms clone, Gmail clone, Medical blog, Ocikitos.
- Metrics: "23% faster interactions at TrustYou" and "78% faster builds at Inditex" are real, but should be used with restraint, not as headline claims.
- No testimonials, client quotes, press or case studies exist. Do not invent any.

## Product Principles

1. Clarity in one scan: a hiring manager gets role, current company and seniority without scrolling or reading paragraphs.
2. Practice what it preaches: no extra clicks, an obvious next action, nothing that slows the page.
3. Range through the styles: each style is a fully realized take on the same truth, not a skin.
4. Understated proof: real work and real numbers, stated plainly, never inflated.

## Accessibility & Inclusion

Keyboard focus must survive style switches, and both color schemes must keep readable contrast (both were fixed in past commits). No further standard was specified.
