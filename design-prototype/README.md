# Phase 1 — isolated visual validation

Status: review materials only. Direction A approved conditionally; neither composition has final visual approval.

## Review

Open `review.html` in a browser for all 16 full-resolution captures: A1/A2 × populated-fixture/sparse × light/dark × 1440/390 CSS pixels. Click images to open originals. `board-a1.html` and `board-a2.html` pair the light desktop and mobile captures.

Open `index.html` for interactive compositions. All assets are local; no install or build is needed to view them. The theme select follows System initially, with explicit Light/Dark overrides. It does not persist a preference. The preview bar is review tooling, not proposed public UI.

If a local server is preferred, from this directory run:

    python3 -m http.server 8765 --bind 127.0.0.1

Then open http://127.0.0.1:8765/review.html . The temporary server used during validation was stopped after captures.

## Scope and removal

The original workspace contains ten specification documents, not a Git repository or an implemented application. No Astro project, production routes, schemas, package manifest or architecture was added or changed. Everything created in this phase lives in `design-prototype/`. Removing that directory removes the entire prototype and its captures.

No dependencies were installed. One Source Serif 4 regular TTF was downloaded and stored locally with its OFL license. Arial/Helvetica and system monospace use installed fonts. No runtime network requests are required.

`build.py` uses Python's standard library to generate four static composition pages and an SVG excerpt from the existing architecture specification. It is design tooling, not proposed site architecture. `preview.js` only enhances theme selection and menu dismissal. `qa-no-script.html` omits that script for progressive-enhancement validation.

## Content provenance

- Owner-supplied facts: name, second-year ECE status and stated interest areas.
- Proposed identity copy: “At the meeting point of software and hardware.” Introductory wording remains subject to owner review.
- Both case-study entries: explicitly labelled layout fixtures, not portfolio work.
- Figure: faithful text excerpt from section 2 of `05_TECHNICAL_ARCHITECTURE.md`, rendered into an SVG for image/caption/responsive testing. It describes a proposed architecture, not an implementation or validated engineering project.
- No project results, measurements, contribution history, résumé, contact address or external profile was invented.
- Sparse pages contain no case-study fixtures; optional public sections and their navigation entries are omitted.

## Design decision

Recommend A1 for the current stage: personal identity, prose and image-independent case studies hold together with sparse content. Carry A2's clear artifact caption, enlargement/text alternative and explicit evidence metadata into future detailed case studies. A2 is a viable future homepage if there is a strong original artifact to lead with; its fixed left identity column should not become a persistent sidebar.

See `DESIGN_REVIEW.md` for tokens, comparison, measured checks and remaining limitations.
