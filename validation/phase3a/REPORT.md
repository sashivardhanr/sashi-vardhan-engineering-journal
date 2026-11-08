# Phase 3A — Core personal pages

Status: implemented and locally verified; owner visual/copy review pending. Not deployed. Scope is Home plus About, Now and Contact only.

## Inspection and design precedence

Read all ten original specification documents, existing source, configuration, content, tests and previous validation context. The first combined document read truncated; the middle documents were then read separately in full. The current Astro 7.4.7 / TypeScript 6.0.3 / custom-CSS architecture was retained. No packages or schema framework were added.

Older specifications propose different initial palettes, fallback heading fonts, 12px metadata and a full-site navigation. The current approved warm-paper/graphite tokens, Source Serif 4, system body text and 14px metadata take precedence. Collections/MDX remain deferred until a collection-backed stream requires them. Small typed global records suit these three pages.

The homepage's typography, tokens, global styles, introduction, exploration and journal sections were preserved. SHA checks in homepage-before.sha pass. Only shared navigation changed to Home / About / Now / Contact, with active-route underlines and aria-current. Footer supports an optional heading target without changing the homepage default. No Work, Notes, Open Source, résumé or other routes were added.

## Architecture and file changes

| File | Change |
|---|---|
| src/data/personal.ts | Owner-approved public destinations, About prose, optional related links, explicit draft/published Now type, date and public-link validation, publication filtering |
| src/layouts/PersonalPage.astro | Secondary-page shell composed from existing BaseLayout, header and footer; title/description and noindex support |
| src/styles/personal-pages.css | Secondary editorial heading, reading, metadata and link primitives using existing tokens; does not apply to homepage |
| src/pages/about.astro | Biography reading column, academic sidebar, intent/interest sections, conditional reviewed work links and closing |
| src/pages/now.astro | Dated record layout, reviewed branch, clear pending shell when no update is approved; draft content never serialized |
| src/pages/contact.astro | Accessible direct email/profile rows, optional metadata and empty-state handling; no form |
| src/layouts/BaseLayout.astro | Per-page description prop, preserving homepage default |
| src/components/SiteHeader.astro | Global route links, home wordmark destination, visual/programmatic current-page state |
| src/components/SiteFooter.astro | Optional topId for valid secondary-page back-to-top links |
| src/scripts/preferences.ts | Native cross-route menu links; same-page fragment focus only when appropriate; resize focus matching uses full href |
| astro.config.mjs | Comment updated to reflect multiple routes; no configuration behaviour changed |
| tests/build.test.mjs | Four-route output expectation and route-aware local link checks |
| tests/personal-pages.test.mjs | Metadata, heading hierarchy, navigation/current-page, draft exclusion, invalid date/link, missing optional content and approved contact coverage |
| README.md | Current Phase 3A scope, content workflow and verification reference |
| validation/phase3a/ | Actual screenshots, raw width observations, baseline hashes, owner-review notes and this report |

## Content provenance and publication

Contact uses only the three destinations explicitly supplied in this session. GitHub opened successfully at https://github.com/sashivardhanr. LinkedIn returned 999 to the external fetch; not independently verified. Email syntax and rendered destination checked; delivery not tested and no message sent. External profile biography/location/graduation data were not imported.

About is based on confirmed second-year ECE context, interests and approved journal intent. New wording still needs editorial review. Institution, results, employment, personal anecdotes and unsupported project evidence are absent. Optional related-work records are empty and render no heading/list.

Now has no approved activity record. The route exists as an explicit pending/draft shell and is noindex,nofollow. Date label is Page prepared, not Last reviewed. Changing to published requires a real ISO review date and nonempty sections; draft sections are discarded before rendering. No active work, contributions or progress are inferred from broad interests.

OWNER_REVIEW.md lists the exact remaining content decisions. noindex is an indexing hint, not privacy protection: only the safe pending shell is emitted, never private draft text.

## Commands and results

npm is not on this host's PATH and the earlier temporary npm installation is absent. Ran the exact underlying existing package-script commands directly using bundled Node 24.22.1, with its bin directory added to PATH:

- node node_modules/astro/bin/astro.mjs check — PASS: 24 files, 0 errors/warnings/hints.
- node node_modules/astro/bin/astro.mjs build — PASS: exactly 4 production HTML pages.
- node node_modules/astro/bin/astro.mjs build --config astro.review.config.mjs — PASS: 4 isolated review pages.
- node --test tests/*.test.mjs — PASS: 20/20, 0 failures/skips.
- shasum -c validation/phase3a/homepage-before.sha — PASS for all five preserved design/content files.

No lint script exists. No dependency install or Git initialisation performed. Tests validate publication and optional-content helpers; populated future Now content and empty Contact are not claimed as separately browser-tested fixtures.

## Browser evidence

- All three pages at 320, 390, 768, 1024 and 1440 CSS pixels in both themes: 30 combinations, no horizontal document overflow. Raw readings: browser-matrix.json.
- Full-page desktop/mobile screenshots of every page in both themes: {about,now,contact}-{1440,390}-{light,dark}.jpg. index.html provides a local gallery.
- Visual inspection of About desktop/mobile, Now record and Contact desktop/mobile; homepage integration screenshot confirms original body composition.
- Mobile menu opens by keyboard; Escape closes and focuses summary with a visible 2px outline. Enter on Now navigates from Contact to Now, updates current-page semantics and preserves the dark theme. Menu is closed on destination.
- Skip to content focuses main. On mobile-to-desktop resize, focus moves to the matching desktop route link.
- System choice follows emulated light/dark backgrounds. Reduced-motion media preference verified.
- With script execution disabled, native menu opens and navigates Now to Contact. Theme control is hidden; content remains usable. Script/media overrides reset after checks.
- Accessibility tree inspected for headings, landmarks, labels and direct link names. Not a real screen-reader audit.
- Browser viewport reset and owned preview server stopped after review.

## Remaining limitations

Native 200% zoom, VoiceOver/NVDA, cross-engine testing, measured CLS/Lighthouse/CWV, email delivery and LinkedIn destination rendering are not verified. Canonical domain, sitemap/social metadata, CI and deployment remain deferred. No launch readiness or accessibility conformance claimed. About copy, Now activity content and final visuals need owner review. Stop after Phase 3A.

## Approved contact presentation

The owner selected simple text links: Email me, GitHub and LinkedIn. No email address, URL or handle is rendered as visible contact text. Destinations remain in link hrefs so the links function. Contact is restored from its temporary draft state. Type check, production build and all 20 tests pass; a focused assertion verifies labels and the absence of visible raw details. Contact screenshots were refreshed at 1440px and 390px in both themes.
