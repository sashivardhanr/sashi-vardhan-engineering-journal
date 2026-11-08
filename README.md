# Sashi Vardhan — homepage vertical slice

Phase 2 implements one static Astro homepage using the approved A1 direction. This workspace previously held specifications and the Phase 1 prototype only; there was no application configuration to replace. The specifications and `design-prototype/` remain unchanged.

## Run locally

Use Node.js 24 LTS (at least 24.15; tested with 24.22.1) and npm (tested with 12.2.2).

```sh
npm ci
npm run dev
```

Open the URL printed by Astro (normally http://127.0.0.1:4321).

```sh
npm run check
npm run build
npm run build:review
npm test
```

`npm test` checks generated outputs, so run both builds first. No lint configuration existed; no lint command is claimed to have run. There is no unnecessary formatter/linter dependency.

To inspect built production HTML:

```sh
npm run preview
```

To compare actual components with clearly labelled fixtures in a **separate, non-production output**:

```sh
npm run build:review
npm run preview:review
```

Open:
- http://127.0.0.1:4322/order-a/ — introduction → interests → work.
- http://127.0.0.1:4322/order-b/ — introduction → work → interests.
- http://127.0.0.1:4322/no-script/ — no script elements; native disclosure navigation.
- http://127.0.0.1:4322/font-fallback/ — Georgia fallback with no font preload.

The review server binds only to loopback. Stop it with Ctrl+C. Astro 7's production preview is a daemon: stop it with `npx astro preview stop`. Its daemon is shared per workspace, so the review command uses a small Node static server instead of a second Astro preview.

## Scope and content

Production routes are `/`, `/about/`, `/now/` and `/contact/`. Shared navigation links only to these existing routes. There is no CMS, search, analytics, contact form, résumé route or deployment configuration.

`src/data/profile.ts` contains only owner-supplied facts and the A1 introduction. `publishedProjects` is deliberately empty because no verified case study was supplied. The empty work section is omitted. The homepage instead presents the introduction, interests and journal purpose. Approved records will appear before interests when added.

Work components are implemented and exercised by test fixtures. This is not a claim that a genuine project case study has been published. The text-only fixture omits optional figure/date/status/domain/evidence fields. The long-title fixture stresses wrapping. The figure fixture reproduces an excerpt from the supplied architecture plan and explicitly does not claim implementation or test results.

Fixtures live outside `src/` and `public/`. Only the separate `astro.review.config.mjs` build imports them. Tests enforce their exclusion from production.

## Architecture

`index.astro` selects content/order → `BaseLayout` owns document, font and early theme initialization → `HomePage` composes header, introduction, exploration, work and footer. `ProjectEntry` delegates evidence metadata to `EvidenceRecord` and optional illustration to `TechnicalFigure`.

CSS tokens define colour, spacing, reading typography and targets. Component styles remain scoped; global CSS handles document/reset/accessibility primitives. Native HTML provides navigation without JavaScript. The small enhancement script adds saved System/Light/Dark selection, Escape dismissal, focus handoff and cross-tab preference synchronization. System mode removes the override and uses CSS OS preference. Storage failures do not stop rendering.

## Verification status

Automated checks and both static builds pass; all five preview URLs returned HTTP 200. Browser access was restored on 2026-11-08: production and both review orders were checked at five widths in both themes, with actual screenshots saved in `validation/phase2/`. Keyboard navigation, script-disabled navigation, theme persistence/system changes, figure text and enlargement were exercised. Native 200% zoom, a real screen-reader session and measured performance/CLS remain untested. See the report for the full scope.

See `validation/phase2/REPORT.md` for exact checks, limits, asset sizes and file-by-file changes. Final visual sign-off is still required. No remaining pages should be implemented without explicit approval.

## Current visual refinement

The owner rejected and reverted the Antigravity composition, then requested refined colours and typography with a fuller homepage. The current revision uses warmer paper, neutral graphite, system sans-serif body text, more open Source Serif 4 headings, expanded interest descriptions and a journal-purpose section. Theme selection remains visible outside the mobile menu. See `validation/phase2-refined/REPORT.md` and its actual desktop/mobile screenshots for the current state; earlier Phase 2.1 reports describe superseded work.

## Phase 3A — personal pages

About, Now and Contact reuse the approved visual system through `PersonalPage.astro`. Typed content and publication rules live in `src/data/personal.ts`. Contact destinations were explicitly approved by the owner. Now currently emits a noindex pending shell, excluding all unreviewed activity text. To publish an update, supply owner-reviewed sections, set status to `published` and provide a valid `reviewedAt` date. Do not treat preparation dates or broad interests as current activity.

See `validation/phase3a/REPORT.md` for the latest test results and file summary, `OWNER_REVIEW.md` for missing/optional personal details, and `index.html` in that directory for all twelve screenshots. Twenty tests pass. Native zoom, real screen-reader and performance measurements remain outstanding. This phase is not deployed and does not include Work, Notes or Open Source routes.

## Approved contact presentation

The owner selected simple text links: Email me, GitHub and LinkedIn. No email address, URL or handle is rendered as visible contact text. Destinations remain in link hrefs so the links function. Contact is restored from its temporary draft state. Type check, production build and all 20 tests pass; a focused assertion verifies labels and the absence of visible raw details. Contact screenshots were refreshed at 1440px and 390px in both themes.
