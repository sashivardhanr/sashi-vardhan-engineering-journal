# Phase 2 implementation and verification report

Status: homepage implementation and rendered browser validation complete within the limits below. Owner visual approval remains pending. Browser access was restored on 2026-11-08.

## Changes by file

| File | Purpose |
|---|---|
| `package.json` | Minimal Astro 7.4.7, checker 0.9.12 and compatible TypeScript 6.0.3; local scripts. TypeScript latest was 7, outside checker's declared peer range, so 6.0.3 was chosen deliberately. |
| `package-lock.json` | Reproducible npm dependency resolution. |
| `.gitignore` | Excludes dependencies, generated outputs, caches and local secrets. |
| `astro.config.mjs` | Static production build, no toolbar or unapproved canonical domain. |
| `astro.review.config.mjs` | Separate fixture source root and `.review-dist` output. |
| `tsconfig.json` | Strict Astro TypeScript config; excludes old prototype and outputs. |
| `src/pages/index.astro` | The sole production route; actual content controls section order. |
| `src/layouts/BaseLayout.astro` | Semantic document, metadata, local font preload, early theme initialization. |
| `src/data/profile.ts` | Approved identity/introduction. |
| `src/data/projects.ts` | Small typed view model, not a content collection/schema system; empty published records. |
| `src/components/HomePage.astro` | Shared composition and A/B order for both production and review. |
| `src/components/SiteHeader.astro` | Wordmark, in-page navigation, native mobile disclosure, theme control. |
| `src/components/Introduction.astro` | A1 editorial opening; fluid heading with natural wrapping, no forced line breaks. |
| `src/components/AreasOfExploration.astro` | Interest statements grounded in the owner's brief. |
| `src/components/SelectedWork.astro` | Work section and honest empty state. |
| `src/components/ProjectEntry.astro` | Image-optional project presentation; long title and optional metadata handling. |
| `src/components/EvidenceRecord.astro` | Reusable semantic definition list; role, validation, limitations and optional evidence. |
| `src/components/TechnicalFigure.astro` | Reserved image dimensions, caption/source, enlargement, HTML text equivalent. |
| `src/components/SiteFooter.astro` | Minimal identity and return link. |
| `src/styles/tokens.css` | Shared warm-paper/graphite colours, brass accent, space/type/target tokens. |
| `src/styles/global.css` | Local font, base typography, focus, skip link and reduced-motion styles. |
| `src/scripts/theme-init.js` | Validated saved preference before paint; graceful blocked-storage fallback. |
| `src/scripts/preferences.ts` | Theme control, storage changes, menu Escape and focus handoff. |
| `public/fonts/source-serif-4-latin.woff2` | Locally hosted regular Latin font subset; 48,704 bytes. |
| `public/fonts/OFL.txt` | Font license. |
| `tests/fixtures/projects.ts` | Figure, text-only and long-title review fixtures, clearly labelled. |
| `tests/fixtures/architecture-excerpt.svg` | Phase 1 source-plan excerpt, never copied into public production assets. |
| `tests/review/pages/[variant].astro` | Four noindex review routes compiled only by separate review config. |
| `tests/build.test.mjs` | Production exclusion, real fragment/asset references, A/B order, optional fields, no-script output. |
| `tests/theme.test.mjs` | Saved theme handling, invalid choices and storage failures. |
| `tests/contrast.test.mjs` | Actual palette token contrast checks. |
| `scripts/preview-review.mjs` | Dependency-free loopback review server supporting simultaneous production preview. |
| `README.md` | Setup, commands, scope, content provenance and verification limits. |
| `validation/phase2/*` | Check/build/test logs, HTTP checks, asset sizes and this report. |

All original specification files and the Phase 1 prototype were retained unchanged. This directory is not a Git repository, so no Git diff or commit is claimed.

## Section orders

A: Introduction → Areas of exploration → Selected work. Best for the current production state because there are no verified projects and the interests section provides useful substance before the empty work message.

B: Introduction → Selected work → Areas of exploration. Recommended once real cases exist: visitors encounter the engineering question, role and evidence earlier. Both variants use the exact same components and fixture data in review, with actual DOM order changed (not CSS visual reordering).

Rendered comparison supports this recommendation: order B brings evidence above the exploration strip, especially valuable on mobile. Order A gives the currently sparse production homepage useful context before its empty work section. Both retain the same typography and editorial identity.

## Commands and outcomes

The host did not expose node/npm on PATH. Existing bundled Node 24.22.1 was used, with official npm 12.2.2 unpacked in `/private/tmp/sashi-phase2-npm/`. Nothing was installed globally. The commands below were run through that npm executable with the bundled Node directory added to PATH and `ASTRO_TELEMETRY_DISABLED=1`.

| Command | Result |
|---|---|
| `npm install --cache /private/tmp/sashi-phase2-npm/cache --no-fund --no-audit` | Installed 267 packages and generated lockfile. npm blocked the optional fsevents install script; no override granted, and checks/builds succeeded. |
| `npm run check` | PASS: 18 Astro files, 0 errors, 0 warnings, 0 hints. |
| `npm run build` | PASS: exactly one production HTML page. |
| `npm run build:review` | PASS: four isolated review pages. |
| `npm test` | PASS: 15 tests, 0 failures/skips. |
| `npm run preview -- --port 4321` | Started production preview daemon. |
| Initial Astro-based `preview:review` | Did not start a separate server; reused workspace production daemon. Fixed by changing command to the separate Node server. |
| `node scripts/preview-review.mjs` | Started on port 4322; all four review URLs returned 200. |
| HTTP fetch of production `/` | 200; 6,070-byte document. |
| Lint | Not run: no pre-existing or added lint configuration/script. |
| Browser open | Initially blocked by settings; access restored and rendered validation performed on 2026-11-08. |
| Final `npm run build:review`, `npm run check`, `npm test` | PASS after fixing the fixture SVG enlargement URL; checker 0 errors/warnings/hints and all 15 tests pass. |

One initial shell write to the bracketed review filename failed due to zsh glob expansion. The filename was quoted, the file created, then check/build/test were run successfully. No unresolved build failures remain.

## Accessibility and responsive evidence

Performed:
- Static production: one H1, valid fragment targets, existing local asset references.
- Tests confirm native details navigation and figure text remain present with zero script elements in the no-script review.
- Both palettes: primary/secondary/accent/notice text on page background >=4.5:1; control boundary >=3:1.
- Initial theme execution tested with light, dark, system/invalid values, absent storage and blocked storage.
- Fixture exclusion verified against production HTML and asset tree.
- Optional fields omitted without empty image/date/metadata placeholders in generated review HTML.

Browser validation performed on 2026-11-08:
- Production homepage and both fixture orders: 320, 390, 768, 1024 and 1440 CSS-pixel widths, light and dark. All 30 combinations had document scrollWidth equal to viewport width. Raw observations: `browser-matrix.json`.
- Inspected desktop, tablet and narrow screenshots; natural headline and long-title wrapping, image-optional case studies and missing metadata render without empty placeholders. Evidence text and captions computed at 14px; ordinary prose is 16–18px.
- Mobile menu Enter opens; Escape closes and focuses summary with visible 2px brass outline. Selecting work closes the menu and focuses `#work`. Resizing an open menu to desktop closes it and transfers focus to the corresponding desktop link.
- Skip link focuses main. Native production navigation was exercised with script execution disabled; selected-work link reached `#work`. The script-free fixture has zero script elements, hidden theme control, functioning menu and figure-text disclosures.
- Dark selection survived reload. System selection removes the override and follows emulated light/dark preferences (verified computed background colours).
- Reduced-motion media emulation was active with no document overflow. There are no decorative animations. Media/script overrides were reset after testing.
- Figure text opens at 320px without document overflow. The preformatted transcript scrolls locally. The SVG enlargement initially failed because the bundler emitted a data URL; the fixture now uses `?url&no-inline`, and the real standalone SVG URL opens successfully. Production remains free of fixture assets.
- Forced Georgia fallback renders at 320px without overflow. The normal font reported loaded. This is a fallback layout test, not a simulated network outage or CLS measurement.
- Accessibility tree inspected: H1/H2/H3 hierarchy, labelled navigation, theme selector, native expanded/collapsed controls, image description and evidence definition lists. This is not a real screen-reader session.

Actual Phase 2 screenshots (not reused Phase 1 previews):
- `homepage-1440-light.jpg`, `homepage-1440-dark.jpg`, `homepage-390-light.jpg`, `homepage-390-dark.jpg` — actual sparse production content.
- `order-a-{1440,390}-{light,dark}.jpg` and `order-b-{1440,390}-{light,dark}.jpg` — clearly labelled isolated case-study fixtures. Recaptured after the SVG fix.
- `figure-transcript-320.jpg` and `fallback-320.jpg` — narrow diagnostic views.

Outstanding limitations:
- Native 200% browser zoom was not exercised. Narrow-width reflow was tested at 320px; it is not claimed as an exact substitute for browser zoom.
- No VoiceOver/NVDA session or cross-engine browser matrix.
- No throttled font-loading test, measured layout shift, Lighthouse or field performance measurements.
- Owner independent visual sign-off is still required.

## Font and payload evaluation

The original TTF was roughly 190 KB. The local Latin WOFF2 is 48,704 bytes (approximately 75% smaller). One regular editorial font is preloaded; body/UI use installed Arial/Helvetica and code labels use system monospace. `font-display: swap` allows readable fallbacks; Georgia/Times are specified, with a separate fallback review variant. The subset suits the approved English copy; wider future language requirements need additional subsets.

Measured build sizes (not network or Core Web Vitals measurements):
- HTML: 6,070 bytes (2,120 gzip).
- CSS: 10,998 bytes (2,747 gzip).
- WOFF2: 48,704 bytes.
- Client behaviour is inlined into the small HTML output by Astro; no client framework or external runtime request.

Image dimensions are explicit and natural aspect ratios preserved. This does not establish CLS compliance. No Lighthouse score, field CWV, performance budget compliance or accessibility conformance is claimed.

## Remaining approval gates

1. Owner independently reviews the rendered screenshots and approves final visuals.
2. Complete native 200% zoom and assistive-technology checks before claiming full accessibility acceptance.
3. Supply reviewed real project content before publishing any case study. Production currently remains intentionally empty of project claims.

Stop at this homepage vertical slice. Other pages remain out of scope.
