# 06 — Implementation Backlog

## 1. Delivery philosophy

Build manually in short vertical slices. Every phase should leave the site in a working state. The owner should understand the code being written, not blindly copy a generated project.

Priority labels:
- **P0:** required for launch.
- **P1:** important, but can follow the first useful release.
- **P2:** future enhancement.

Effort labels:
- **S:** small.
- **M:** medium.
- **L:** large.

## 2. Epic list

| Epic | Name | Priority |
|---|---|---:|
| E0 | Product and content preparation | P0 |
| E1 | Development environment and Astro foundation | P0 |
| E2 | Design tokens and global shell | P0 |
| E3 | Homepage and identity pages | P0 |
| E4 | Content model and project pages | P0 |
| E5 | Open-source and GSoC stream | P0 |
| E6 | Engineering Notes | P0 |
| E7 | Résumé and Contact | P0 |
| E8 | Accessibility, SEO and performance | P0 |
| E9 | Testing, deployment and launch | P0 |
| E10 | Content discovery and richer lab features | P1/P2 |

## 3. Backlog items

## E0 — Product and content preparation

### WEB-001 — Confirm public identity copy (S)
- Draft name treatment, one-line positioning and short biography.
- Avoid claims of mastery.
- **Acceptance:** copy accurately reflects current student status, interests and the evolving nature of the site.

### WEB-002 — Confirm public profile links (S)
- Verify GitHub and other professional links.
- Choose which links should be public.
- **Acceptance:** no stale or private account links; every destination opens correctly.

### WEB-003 — Create initial content inventory (M)
- List candidate projects, notes, contributions and résumé assets.
- Mark each as publishable, needs evidence, private or omit.
- **Acceptance:** no project is included solely because time has been invested in it.

### WEB-004 — Choose domain and public contact method (S)
- Evaluate domain options and a dedicated public email alias.
- Do not expose personal login email.
- **Acceptance:** owner explicitly approves chosen domain/contact before production configuration.

## E1 — Development environment and Astro foundation

### WEB-010 — Install and verify the web development toolchain (S)
- Install supported Node.js LTS, npm and Git.
- Create a clean VS Code workspace.
- Verify local server and build.
- **Acceptance:** versions are documented and the local starter builds successfully.

### WEB-011 — Scaffold Astro + TypeScript project (S)
- Use current stable Astro release.
- Select strict TypeScript settings.
- Commit package lockfile.
- **Acceptance:** clean clone + dependency install + build works on the documented environment.

### WEB-012 — Create repository structure and README (M)
- Add only needed folders and scripts.
- Document setup, development, validation and build commands.
- **Acceptance:** another developer can run the site using README instructions.

### WEB-013 — Configure static output (S)
- Use static output for v1.
- Leave site URL unset until domain is selected.
- **Acceptance:** build produces static output and no server adapter is required.

## E2 — Design tokens and global shell

### WEB-020 — Implement design tokens (M)
- Add light/dark semantic CSS custom properties.
- Add typography, spacing, widths, border and radius tokens.
- Test contrast.
- **Acceptance:** components use tokens; theme pairs are measured and adjusted to meet intended contrast.

### WEB-021 — Build BaseLayout and semantic landmarks (M)
- Implement document shell, metadata slots, header, main and footer.
- **Acceptance:** all pages use the shared layout and have logical landmarks/headings.

### WEB-022 — Build responsive header and navigation (M)
- Desktop nav, mobile menu and active route state.
- **Acceptance:** keyboard and touch operation; Escape closes menu; current page is exposed semantically.

### WEB-023 — Build theme control (M)
- Respect system preference and allow manual selection.
- Keep theme usable without persistent storage if user declines.
- **Acceptance:** theme state is readable, accessible and does not produce a severe flash.

### WEB-024 — Build footer and shared metadata components (S)
- Name, navigation, selected links and copyright.
- **Acceptance:** consistent on every route; no empty social links.

## E3 — Homepage and identity pages

### WEB-030 — Build homepage hero and first-screen hierarchy (M)
- Name, positioning, concise statement, Work and Résumé actions.
- **Acceptance:** a first-time visitor can understand the site purpose quickly at desktop and mobile widths.

### WEB-031 — Build current focus strip (S)
- Link internship/professional development and GSoC/open-source tracks separately.
- **Acceptance:** shows actual current focus; no private application or unsupported status.

### WEB-032 — Build selected work section (M)
- Display up to 2–3 published project records.
- **Acceptance:** drafts/unverified projects never appear; each card links to a useful detail page.

### WEB-033 — Build recent notes section (S)
- Display latest published notes.
- **Acceptance:** empty state is editorially appropriate; no fake example posts.

### WEB-034 — Build About page (M)
- Background, motivation, interests and engineering approach.
- **Acceptance:** human and specific; no inflated biography or empty skills wall.

### WEB-035 — Build Now page (S)
- Dated manually maintained focus content.
- **Acceptance:** clear last-updated date and no unapproved private details.

## E4 — Content model and project pages

### WEB-040 — Define project collection schema (M)
- Use typed schema for project metadata.
- Validate status, dates, technologies and links.
- **Acceptance:** invalid project metadata fails content validation/build.

### WEB-041 — Build Work index (M)
- Query published projects; add categories/status labels.
- **Acceptance:** projects are sorted predictably and empty states are handled.

### WEB-042 — Build project detail template (L)
- Overview, problem, requirements, architecture, decisions, implementation, validation, results, limitations and future work.
- **Acceptance:** page adapts to optional sections without showing empty headings.

### WEB-043 — Build technical evidence components (M)
- Figure, caption, code block, measurement table and evidence list.
- **Acceptance:** readable, responsive and accessible; images include correct alt handling.

### WEB-044 — Prepare first publishable case study (L)
- Select a genuinely completed and defensible piece of work after audit.
- **Acceptance:** every technical claim has evidence or is clearly marked as an intention/limitation.

## E5 — Open-source and GSoC stream

### WEB-050 — Define contribution schema (M)
- Include organization, repository, issue/PR URLs, status, dates and role.
- **Acceptance:** status enum prevents ambiguous wording; invalid/missing evidence is caught.

### WEB-051 — Build Open Source index (M)
- List verified contribution records and repositories.
- **Acceptance:** investigating vs PR open vs merged is visually and semantically distinct.

### WEB-052 — Build GSoC 2027 journey page (M)
- Purpose, dated progress, public contributions and technical learnings.
- **Acceptance:** does not claim selection or participation unless verified; private mentor/application information is excluded.

### WEB-053 — Add contribution detail template (M)
- What changed, why, role, tests, review state and links.
- **Acceptance:** each record has an authoritative external evidence link where one exists.

## E6 — Engineering Notes

### WEB-060 — Define notes schema (M)
- Title, description, date, status, category, tags, references and related content.
- **Acceptance:** drafts excluded from production; required metadata validated.

### WEB-061 — Build Notes index and article layout (L)
- Category listing, metadata, content, references and related content.
- **Acceptance:** long-form text is readable and typography works on all screen widths.

### WEB-062 — Publish first original technical note (M)
- Topic chosen from real learning or project work.
- **Acceptance:** includes original explanation, references, limitations and reproducible details where applicable.

### WEB-063 — Add RSS feed (S, P1)
- Generate RSS from published notes.
- **Acceptance:** feed validates and includes only public posts.

## E7 — Résumé and Contact

### WEB-070 — Build Résumé page (M)
- Web-readable summary and current PDF download.
- **Acceptance:** current approved PDF opens/downloads; file is accessible and version date is shown.

### WEB-071 — Build Contact page (S)
- Public email alias/mailto and approved profiles.
- **Acceptance:** no private contact data exposed; all links checked.

## E8 — Accessibility, SEO and performance

### WEB-080 — Add page metadata and canonical handling (M)
- Per-page titles/descriptions, OG tags and canonical URLs.
- **Acceptance:** no duplicate generic metadata; production URLs are correct after domain selection.

### WEB-081 — Add sitemap and robots.txt (S)
- Use official Astro sitemap integration if selected.
- **Acceptance:** sitemap contains published canonical pages, not drafts.

### WEB-082 — Accessibility review (M)
- Keyboard, focus, contrast, headings, landmarks, labels, reduced motion and zoom.
- **Acceptance:** no critical keyboard/navigation issue; audit findings documented.

### WEB-083 — Performance review (M)
- Image sizing, JavaScript review, fonts, layout shifts and build output.
- **Acceptance:** no avoidable large assets or unnecessary scripts; performance results documented.

## E9 — Testing, deployment and launch

### WEB-090 — Add build/type/content validation scripts (M)
- `check`, `build` and any required format/lint commands.
- **Acceptance:** scripts run locally and in CI.

### WEB-091 — Add CI build workflow (M)
- Run checks and build for pull requests and main branch.
- **Acceptance:** failed checks block merge/deploy process.

### WEB-092 — Add browser smoke tests (M)
- Homepage, navigation, project, note, résumé, contact and 404.
- **Acceptance:** critical route flows pass.

### WEB-093 — Select hosting and connect domain (M)
- Compare providers and configure previews/deploys.
- **Acceptance:** a successful deployment is reproducible and domain ownership is confirmed.

### WEB-094 — Launch review and v1 release (M)
- Content audit, privacy check, responsive check, link check and release notes.
- **Acceptance:** every P0 issue is done or explicitly accepted as a documented post-launch item.

## E10 — Future enhancements

### WEB-100 — Search and filtering (P1/M)
- Add only when content volume makes navigation difficult.
- Acceptance: accessible, client-light and works with keyboard.

### WEB-101 — Rich project timelines (P1/M)
- Display milestone history where it helps explain the engineering work.
- Acceptance: dates are accurate and content is curated, not automatically inflated from commits.

### WEB-102 — Engineering Lab experiments (P2/L)
- Add interactive simulations/visualisations that teach a real technical concept.
- Acceptance: interaction is useful, accessible and has a static explanation/fallback.

### WEB-103 — Selective public data integrations (P2/L)
- Consider GitHub API integrations only if there is a real need.
- Acceptance: rate limits, privacy, stale data, errors and accessibility are addressed; no core content depends on live API availability.

### WEB-104 — Content editing workflow (P2/L)
- Consider CMS or editorial preview only if Markdown workflow becomes a bottleneck.
- Acceptance: reduces actual maintenance friction without adding unnecessary backend complexity.

## 4. Suggested implementation sequence

1. Complete E0: content and public identity decisions.
2. E1: create the smallest Astro app and understand the file structure.
3. E2: add the global shell and design tokens.
4. E3: publish Home, About and Now with only verified content.
5. E4: add the content schema and one defensible project page.
6. E5: add Open Source and GSoC stream, initially showing honest preparation status.
7. E6: add Notes and publish the first original note when ready.
8. E7: add Résumé and Contact.
9. E8/E9: accessibility, SEO, performance, tests and deployment.
10. E10: future enhancements only after real need emerges.

## 5. Definition of Done

A backlog item is done only when:
- Its acceptance criteria are met.
- Code is understood and reviewed by the owner.
- It works at mobile and desktop sizes where relevant.
- Keyboard/accessibility behaviour is considered.
- Tests/checks that apply have actually been run.
- No unrelated files or secrets were introduced.
- Documentation is updated where needed.
- Git diff has been reviewed.
- The change is committed with a meaningful message.

## 6. Initial manual milestone

The first coding milestone should be deliberately small:

**Milestone 1: A working Astro shell with one route, responsive header, footer, design tokens and a light/dark theme.**

Do not start with all eight pages, a full content system, or elaborate animation. Build one accessible vertical slice, understand it, test it, and then extend it.
