# Sashi Vardhan — Personal Engineering Platform

**Product specification:** v1.0  
**Status:** Approved direction; ready for manual implementation planning  
**Specification baseline:** 8 November 2026  
**Owner:** Sashi Vardhan  
**Working title:** Sashi Vardhan — Engineering, Exploration, Creation

## Product decisions

| Dimension | Decision |
|---|---|
| Identity | Hybrid: personal identity + engineering identity + personal laboratory |
| Visual direction | Hybrid: editorial foundation + technical laboratory + selective interaction |
| Development approach | Manual, learning-first; understand and review every major component |
| Framework | Astro + TypeScript |
| Content | Markdown/MDX plus structured, typed content collections |
| Rendering | Static-first; no backend in version one |
| Styling | Custom CSS and design tokens; no component framework required initially |
| Interactivity | Progressive enhancement with lightweight browser JavaScript only where it adds value |
| Main content streams | Work, Open Source/GSoC, Engineering Notes, Now, About, Résumé, Contact |

## Files in this specification

1. `01_PRODUCT_SPECIFICATION.md` — vision, audience, requirements, product boundaries, success measures.
2. `02_INFORMATION_ARCHITECTURE.md` — sitemap, navigation, page-by-page content hierarchy and journeys.
3. `03_DESIGN_SYSTEM.md` — visual principles, color tokens, typography, spacing, components, responsive and motion rules.
4. `04_CONTENT_MODEL.md` — content types, schemas, status and evidence rules, illustrative frontmatter.
5. `05_TECHNICAL_ARCHITECTURE.md` — recommended stack, repository structure, rendering, SEO, privacy, deployment and testing.
6. `06_IMPLEMENTATION_BACKLOG.md` — phased epics, priorities, dependencies, acceptance criteria and Definition of Done.
7. `07_CONTENT_GOVERNANCE.md` — editorial standards, public/private boundaries, update cadence and factual-integrity rules.
8. `08_MANUAL_LEARNING_PATH.md` — how to build the website manually while developing transferable web engineering skills.
9. `09_DECISIONS_AND_OPEN_ITEMS.md` — locked decisions, decisions deferred and assumptions to validate.

## How to use this pack

- Read the product specification and information architecture first.
- Treat the backlog as the implementation source of truth.
- Build the website in small vertical slices. Do not generate the entire site in one pass.
- Commit after each coherent milestone.
- Keep all content in source control and make publication a deliberate action.
- Do not publish personal information, private application status, credentials or unverified achievements.

## Core principle

The website is a public record of real engineering work and development. It must never become a substitute for doing that work. Build the content system for future scale, but publish only pages that contain useful, honest content.
