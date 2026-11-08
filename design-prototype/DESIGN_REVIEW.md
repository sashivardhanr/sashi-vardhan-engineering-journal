# Design review — 8 November 2026

## What is resolved for this proposal

Both compositions share Source Serif 4 regular for editorial headings, Arial/Helvetica for body and UI, and system monospace for short labels and code. One serif face is enough; body emphasis uses system-font weights. The 190 KB TTF is a prototype asset; production should evaluate a licensed WOFF2 subset and fallback metrics before approving the font delivery budget.

The opening deliberately uses owner-supplied context immediately below the heading:

> At the meeting point of software and hardware.
>
> I’m Sashi, a second-year Electronics and Communication Engineering student.
>
> Exploring embedded systems, software engineering, digital hardware, AI and robotics.

This is proposed public wording, not a new achievement claim. No date is shown as a current-focus update because no reviewed current-focus record was supplied. “Areas of exploration” describes interests instead. Résumé/contact actions require real approved destinations and are intentionally absent from this bounded preview. About is an in-page anchor here; it is not a built About route.

## Composition comparison

| Concern | A1 Editorial Journal | A2 Evidence-Led Journal |
|---|---|---|
| Desktop structure | Broad typographic opening; marginal note; full-width focus strip; paired case-study text/figure below | Compact identity in a 360px left column; artifact and case-study record in the main right column |
| Opening type | 64px serif at 1440px | 49px serif at 1440px |
| Mobile | 43px heading; focus before work; question and record before figure | 43px heading; figure follows introduction directly; record follows figure |
| Text-only entry | Independent ruled editorial row; no empty thumbnail area | Ruled entry in the evidence column, preserving the same title/summary language |
| Sparse content | Short editorial homepage with an interests strip and journal-purpose statement | Balanced two-column identity/interests composition on desktop; linear on mobile |
| Best quality | Personal presence and room for explanation | Evidence becomes visible sooner |
| Trade-off | Longer path to the first artifact, especially on mobile | Artifact quality disproportionately controls the first impression; narrow left headline wraps more |

Recommendation: A1 at the current content stage. Carry over A2's artifact documentation principles rather than its entire spatial arrangement. At real-content review, consider moving A1's interests strip below selected work to shorten the mobile evidence journey; this is a future review option, not represented as approved or already implemented.

## Visual rules

- Main content width: 1152px within a 1200px padded wrapper.
- Outer gutters: 24px desktop, 20px mobile, 16px at the narrowest width.
- A1 opening space: 56px above / 48px below on desktop; 36px mobile.
- Major content separations: 40–64px; intra-record rhythm: 8–24px.
- Body: 15–19px depending on role; ordinary prose line height about 1.65.
- Fixture labels/captions: 12px. Uppercase micro-labels use modest tracking and remain secondary.
- No rounded card grid, shadow system, gradients, simulated terminal, animated background or reveal animation.
- A genuine figure keeps its original colours in both themes. The light source specimen is not inverted in dark mode.
- The figure is intentionally not cropped. Enlargement and an HTML text transcript remain available at 390px.
- Native details/summary navigation expands in document flow. With enhancement, Escape closes and returns focus; choosing a link closes it. Without script it remains a usable native disclosure; theme follows system CSS and the inactive selector is hidden.
- Reduced-motion CSS removes transitions. Only short colour/border transitions otherwise exist.

## Token palette and measured contrast

Contrast was calculated from sRGB relative luminance for the actual prototype values. These are specific pair measurements, not an accessibility-conformance claim.

| Role | Light | Ratio on light page | Dark | Ratio on dark page |
|---|---|---:|---|---:|
| Page | #F5F4F0 | — | #151A17 | — |
| Primary text | #202722 | 13.88:1 | #ECEEE6 | 15.05:1 |
| Secondary text | #5A625B | 5.73:1 | #AAB5AA | 8.30:1 |
| Accent/focus | #805222 | 6.06:1 | #DDBB83 | 9.66:1 |
| Fixture notice | #853E32 | 6.98:1 | #E7A99A | 8.84:1 |
| Control boundary | #737C71 | 3.93:1 | #8D9B8E | 6.05:1 |

Decorative dividers are #C9CDC4 / #465247; they are not relied upon to communicate controls or status. Inverted action labels use page/text token pairs. The 2px focus outline has a 4px offset.

## Validation performed

- Captured all four variants at 1440 and 390 CSS-pixel widths in light and dark themes (16 images).
- Read rendered compositions and corrected small labels, broken word spacing and heading wrapping.
- Confirmed Source Serif 4 loaded in the browser.
- No document-level horizontal overflow in all four variants at 320, 390, 768, 1024 and 1440 CSS pixels.
- Keyboard Enter opens the mobile menu; Escape closes it and returns focus to SUMMARY in the enhanced preview.
- Theme select changes the rendered theme.
- Script-free copy: zero script elements; native menu and figure transcript open by keyboard; page stays within 390px; nonfunctional theme control is hidden.
- One H1 per composition; checked static local file references and fragment destinations, with no missing targets.
- Figure has a source caption, honest provenance, alternative text, full-size link and expandable text equivalent.
- Saved raw width/font/contrast results in previews/*.json and menu screenshots.

## Known limits / approval gate

- No authentic project photograph, measurement or schematic was supplied. The source figure is a genuine planning-document excerpt used inside a labelled fixture; it does not validate the layout against real portfolio evidence. That review remains necessary when the first artifact arrives.
- This is browser visual QA, not a screen-reader, cross-browser or WCAG conformance audit. Actual 200% browser zoom, custom text-spacing overrides and reduced-motion emulation were not performed. Reduced-motion handling was inspected in source.
- No field performance data, Lighthouse audit or production font-loading measurement was collected. Image dimensions are reserved, but production CLS and LCP are not claimed.
- Navigation is deliberately local to the prototype. No résumé, PDF, contact workflow, live contribution stream, publishing system or full content route was implemented.
- Long-form article/detail-page design remains outside this homepage validation.
- The review strip and all fixture disclaimers are review scaffolding, not proposed portfolio content.
- Stop here: explicit owner approval is required before full implementation.
