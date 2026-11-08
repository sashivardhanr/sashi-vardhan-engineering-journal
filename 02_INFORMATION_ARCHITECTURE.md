# 02 — Information Architecture

## 1. IA objectives

The information architecture must serve four main audiences—recruiters, open-source maintainers, researchers and engineering peers—without creating a different website for each. The homepage should orient quickly, while detailed pages provide technical depth.

Primary model:
- **Identity:** Home, About, Now.
- **Evidence:** Work, Open Source, Résumé.
- **Knowledge:** Engineering Notes.
- **Connection:** Contact.

The Internship Sprint and GSoC campaign are distinct evidence streams within the site, not the entire site identity.

## 2. Sitemap and route plan

| Route | Page | Launch priority | Purpose |
|---|---|---:|---|
| `/` | Home | P0 | Identity and entry point |
| `/about/` | About | P0 | Human and academic context |
| `/work/` | Work index | P0 | Selected projects |
| `/work/[slug]/` | Project case study | P0 | Deep project evidence |
| `/open-source/` | Open Source index | P0 | External contribution record |
| `/open-source/gsoc-2027/` | GSoC 2027 journey | P1 | Publicly document relevant preparation and contributions |
| `/notes/` | Engineering Notes index | P0 | Technical writing and experiments |
| `/notes/[slug]/` | Note/article | P0 | Individual technical article |
| `/now/` | Now | P0 | Current focus and updates |
| `/resume/` | Résumé | P0 | Web résumé and PDF access |
| `/contact/` | Contact | P0 | Professional contact route |
| `/404/` | Not found | P0 | Helpful recovery route |
| `/rss.xml` | RSS feed | P1 | Subscription to technical writing |
| `/uses/` | Uses/tooling | P2 | Tools and development environment, if useful |
| `/lab/` | Engineering Lab | P2 | Interactive experiments and simulations |
| `/archive/` | Archive | P2 | Older work and historical records |

Do not build all P2 routes at launch. The architecture should leave room for them.

## 3. Global navigation

### Desktop primary navigation

- Home (wordmark links here; no need for a separate menu item if space is constrained)
- Work
- Open Source
- Notes
- Now
- About

Right-side utility actions:
- Résumé (clear text action)
- Theme toggle
- Contact (may be a footer and homepage CTA instead of a persistent nav item)

### Mobile navigation

- Compact wordmark.
- Menu button with accessible name and `aria-expanded` state.
- Menu items in a clear vertical list.
- Theme toggle remains accessible.
- Menu closes after navigation and on Escape.

### Active navigation

- Current route is indicated visually and programmatically (e.g. `aria-current="page"`).
- Avoid animated underlines that are the only active indicator.

## 4. Page specifications

## Home `/`

### Goal
Give a useful first impression in approximately 5–10 seconds, then offer clear paths to inspect evidence.

### Content order
1. Small identity eyebrow: name / ECE / location at broad city-country level only if owner wants it public.
2. Main statement: who the owner is and what domains they are exploring.
3. Short supporting paragraph: approach to engineering and learning.
4. Primary CTAs: Explore Work, View Résumé.
5. Current focus strip: one active engineering focus and one open-source focus, each linked to detail.
6. Selected work: maximum 2–3 projects, only when they meet publication criteria.
7. Open-source activity: a small number of verifiable contributions or “currently learning the contribution workflow” until real contributions exist.
8. Latest notes: maximum 3 entries.
9. Brief About section.
10. Contact CTA and footer.

### Do not put on homepage
- Full chronological life story.
- Complete technology keyword list.
- Empty project cards.
- Unverified GitHub statistics.
- Private internship applications.
- Countdown to unannounced GSoC dates.
- Large auto-playing hero video or decorative 3D object.

## About `/about/`

Sections:
1. Introduction and current academic context.
2. Why engineering / what kinds of problems attract the owner.
3. Areas currently explored (labelled as interests, not expertise).
4. Working principles: investigate, build, test, document, improve.
5. Education.
6. Selected professional/social links.

Keep the prose direct and personal. The page should not read like a formal résumé rewritten in paragraphs.

## Work `/work/`

### Index
- Introductory paragraph explaining what qualifies as published work.
- Optional domain filters: Embedded, Software/Systems, Digital Design, AI/Signal Processing, Robotics, Other.
- Optional status filter: Exploring, In Development, Prototype, Validated, Released, Archived.
- Cards show: title, concise problem/goal, status, domain, last updated, one representative visual.
- Default sort: featured first, then recent meaningful update; do not let minor metadata edits reorder everything.

### Detail `/work/[slug]/`
Required sections:
1. Project title, summary, status and dates.
2. Problem and motivation.
3. Requirements / scope.
4. Owner's role and collaborators.
5. Architecture and design.
6. Implementation and technical choices.
7. Engineering challenges and debugging.
8. Validation: tests, measurement methods, data, waveforms or simulation.
9. Results and interpretation.
10. Limitations and known issues.
11. Future work.
12. Links: repository, demo, documentation, references.

A project may omit irrelevant sections, but should not omit role, validation status or limitations.

## Open Source `/open-source/`

### Index structure
1. Intro: contribution philosophy and relevant ecosystems.
2. Contribution status summary based on verified records only.
3. Contribution list/timeline.
4. Organizations and repositories explored.
5. Selected contribution case studies (when available).
6. Link to GSoC 2027 journey.

### Contribution status vocabulary
- `investigating` — reading/building/understanding; not an upstream contribution.
- `issue-reported` — a public issue was filed.
- `discussion` — a public technical discussion took place.
- `pr-open` — PR submitted and awaiting review.
- `changes-requested` — maintainer requested revisions.
- `merged` — PR merged.
- `closed` — closed without merge.

Do not group all of these as “contributions”. Label each clearly.

### GSoC journey `/open-source/gsoc-2027/`
- Explain the goal and selected programme year.
- Show current status and last update.
- Publish public exploration notes, target-project selection rationale and technical work when useful.
- List actual public issues/PRs/discussions.
- Link to proposal only if it is intentionally public and contains no restricted material.
- Record selection outcome truthfully if/when known.
- Never publish private mentor conversations or confidential application material.

## Engineering Notes `/notes/`

### Index
- Introduction to the notebook.
- Categories and tags.
- Featured notes, then newest published notes.
- Search can be introduced once there is enough content to need it.

### Article page
- Title, subtitle, category, publication/update dates, tags.
- Estimated reading time only if generated accurately.
- Table of contents for longer articles.
- Main content with code blocks, diagrams, tables and citations.
- References / further reading.
- Related projects and articles.
- Previous/next or back-to-index navigation.

Categories may include Embedded, Systems, Digital Design, Software Engineering, Signal Processing & AI, Robotics, Engineering Methods and Learning Notes.

## Now `/now/`

Sections:
- Last updated date.
- Currently building.
- Currently contributing / open-source focus.
- Currently learning.
- Current questions or experiments.
- What changed since the previous update (optional short changelog).

Update monthly or when there is a meaningful change. Do not auto-update based on GitHub commit timestamps.

## Résumé `/resume/`

- Brief explanation that the page links to the latest reviewed résumé.
- Download current PDF.
- Web-readable résumé summary.
- Versions may be archived privately; do not publish outdated copies unless there is a clear reason.
- Ensure the embedded or linked file is accessible, current and named professionally.

## Contact `/contact/`

- Short invitation for internship, research, engineering collaboration and open-source discussions.
- Dedicated public contact address or mailto action.
- GitHub and other professional profiles.
- No public home address or personal phone number by default.
- A server-backed form is deferred; a simple mailto/contact link is sufficient for launch.

## 404 `/404/`

- Plain language message.
- Link to Home, Work and Notes.
- No gimmicky error animation.

## 5. Footer architecture

Footer should contain:
- Name / short identity.
- Main navigation links.
- GitHub and selected professional links.
- Résumé / Contact.
- Copyright year generated from current build year.
- Optional RSS link once the feed exists.
- Optional compact “Built with…” disclosure, without turning the footer into a technology badge wall.

## 6. Cross-linking rules

- Project pages may link to related notes and open-source contributions.
- Open-source contribution pages may link to technical notes explaining the subsystem.
- Notes may link back to projects and relevant repositories.
- The homepage features only a small selection, not every content item.
- The Now page links to active work and current notes.
- The résumé points to the same canonical project and contribution pages.

## 7. Navigation and content hierarchy rules

- Maximum of six primary navigation entries at desktop sizes.
- Important actions (Work, Résumé, Contact) should not be hidden in nested menus.
- Use descriptive link labels; avoid “click here”.
- Page headings must form a logical hierarchy.
- Use breadcrumbs on deeper project/notes pages if needed.
- Keep URLs short, stable, lowercase and hyphen-separated.
- Once published, avoid changing a slug; if changed, add a redirect.
