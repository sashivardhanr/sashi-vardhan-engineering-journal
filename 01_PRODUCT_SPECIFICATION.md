# 01 — Product Specification

## 1. Product summary

**Working title:** Sashi Vardhan — Personal Engineering Platform  
**Product type:** Personal website, engineering portfolio, technical publication and evolving public work archive.  
**Primary owner:** Sashi Vardhan.  
**Version:** 1.0.

The product combines three identities into one coherent website:

1. **Personal identity:** the individual, background, interests, values and direction.
2. **Engineering identity:** demonstrated projects, technical skills, engineering decisions, testing and outcomes.
3. **Personal laboratory:** experiments, research notes, prototypes, open-source contributions and a living record of learning.

It is not a conventional student portfolio, a social network, a SaaS product, a résumé dump or a real-time dashboard. It is a carefully curated and continuously evolving professional home.

## 2. Product vision

Create a long-lived website that makes it easy for a visitor to understand who Sashi Vardhan is, inspect what he has actually built or contributed, understand how he approaches technical problems, and see what he is working on now.

The site should remain useful as the owner moves from undergraduate study into internships, open-source work, research, engineering roles, products and potentially entrepreneurship. New content should be added through structured records and reusable templates rather than requiring a redesign.

### Product promise

**An evolving record of engineering work, ideas and exploration.**

### Suggested homepage positioning

> Building systems where software meets hardware.
>
> An Electronics and Communication Engineering student exploring embedded systems, open-source software, digital hardware and intelligent systems. I build, investigate, test and document engineering systems — including the decisions, failures and lessons behind them.

This is positioning copy, not a claim of mastery. It must be revised as evidence and career direction develop.

## 3. Goals

### Primary goals

- Establish a memorable, credible personal and engineering identity.
- Present selected projects as engineering case studies, not just cards with screenshots.
- Document external open-source work accurately, including the GSoC 2027 preparation journey.
- Present learning and exploration without misrepresenting proficiency.
- Publish useful technical notes and experiments over time.
- Make the latest résumé and professional contact route easy to find.
- Allow the site to grow through content records and reusable layouts.
- Keep the site fast, accessible, secure, responsive and maintainable.

### Secondary goals

- Support internship and research applications with a credible public portfolio.
- Support open-source introductions by providing project, contribution and technical-writing evidence.
- Give future collaborators a clear route to understand interests and contact the owner.
- Build the owner's practical web engineering skills through manual implementation.

## 4. Non-goals

Version one will not:

- Function as a social network or community platform.
- Require visitor accounts, authentication or user profiles.
- Include comments, likes, follows or a public activity feed.
- Store private internship applications, recruiter communications or confidential research notes.
- Display a fabricated GitHub activity graph or unverified contribution statistics.
- Automatically claim or infer skill proficiency from repository activity.
- Include an elaborate backend, database, CMS or admin panel.
- Be a copy of another engineer's personal website.
- Use decorative animations or 3D scenes that harm readability or performance.
- Require a visitor to understand the owner's entire life story before seeing useful engineering evidence.

## 5. Target audiences and their needs

### A. Engineering recruiter / hiring manager

Needs to answer within a short visit:
- Who is this candidate and what is their current academic/professional context?
- What roles or technical domains are relevant?
- What is the strongest evidence of practical engineering ability?
- Can I inspect code, tests, a demo or a technical write-up?
- Can I download a résumé or contact the candidate?

### B. Open-source maintainer / GSoC mentor

Needs to understand:
- What projects and technical areas interest the candidate?
- Has the candidate engaged with real repositories?
- Which issues, pull requests, code reviews or discussions are verifiable?
- Can the candidate explain a technical problem and implementation decision?
- Is the candidate honest about contribution status and experience?

### C. Researcher / faculty member

Needs to understand:
- What is the candidate studying and exploring?
- Which technical topics are of genuine interest?
- Are there engineering experiments, measurements, papers or technical notes?
- Can the candidate communicate methods, limitations and results clearly?

### D. Engineer / peer / collaborator

Needs to understand:
- What is the person building now?
- Are repositories and instructions usable?
- Are technical notes useful?
- Is there a reasonable way to collaborate or provide feedback?

### E. General visitor

Needs a clear human introduction, accessible navigation and a concise explanation of what the site contains.

## 6. Product principles

1. **Evidence before adjectives.** Prefer a test report, commit, schematic, benchmark, demo or technical explanation over claims like “expert”, “innovative” or “world-class”.
2. **Depth before volume.** Two deeply documented projects are better than fifteen shallow cards.
3. **Honest evolution.** Show exploration and incomplete work with appropriate status labels; do not pretend every experiment is a finished product.
4. **Editorial first.** The site must be easy to read before it is visually clever.
5. **Technical details on demand.** Visitors get a clear summary first, with architecture, code and validation available deeper in the page.
6. **Progressive enhancement.** Core content and navigation must work without client-side JavaScript.
7. **Low maintenance.** New projects and notes should be added through content files and known schemas.
8. **Privacy by default.** Only deliberately selected public information appears.
9. **No stale claims.** Current-focus information must be dated; time-sensitive pages must have update dates.
10. **Manual understanding.** The owner should understand the code, layout, styles, content model, build and deployment process.

## 7. Core user journeys

### Journey 1: Recruiter evaluating the candidate

Home → selected project → project case study → repository/demo → résumé → contact.

Success: the visitor can assess the candidate's actual role, engineering method, validation and limitations without searching elsewhere.

### Journey 2: GSoC mentor investigating the candidate

Home → Open Source → contribution detail → repository/PR → technical note → contact.

Success: every displayed contribution can be verified, and the page distinguishes issue investigation, PR submitted, PR merged and programme selection.

### Journey 3: Researcher assessing technical interests

Home → About → Engineering Notes / Experiments → relevant project → contact.

Success: the visitor sees a coherent interest area and evidence of careful technical communication.

### Journey 4: Returning visitor checking progress

Home → Now → latest notes / work updates.

Success: the visitor can see current focus and recent meaningful changes, with a visible update date.

### Journey 5: Engineer finding technical material

Engineering Notes → category/tag/search → article → references and related work.

Success: the article is readable, attributable and useful without requiring an account.

## 8. Functional requirements

### FR-01 — Global navigation
- Provide consistent primary navigation across all pages.
- Provide a clear homepage/identity link.
- On small screens, provide a keyboard-accessible navigation menu.
- Clearly identify the current page.

### FR-02 — Homepage
- Display name, concise positioning statement and current academic context.
- Feature selected work only when it passes publication criteria.
- Show the two active development streams in a restrained way: professional engineering/internship development and open-source/GSoC preparation.
- Show recent published notes and the current-focus summary.
- Provide résumé and contact entry points.

### FR-03 — Work catalogue
- List projects with title, summary, domain, status, date and selected technology tags.
- Support filtering or category navigation when the number of projects justifies it.
- Hide unpublished/draft records from public output.

### FR-04 — Project case study
- Present problem, requirements, contribution/role, architecture, design decisions, implementation, validation, results, limitations and next steps.
- Show repository/demo/documentation links where available.
- Distinguish measured results from estimates and simulation.
- Show status and last-updated date.

### FR-05 — Open Source
- List verifiable organizations, repositories, issues, pull requests, reviews and contributions.
- Record contribution status accurately.
- Provide a dedicated GSoC 2027 journey page or subsection that tracks only public, relevant milestones.
- Never present GSoC applicant or participant status inaccurately.

### FR-06 — Engineering Notes
- Publish dated Markdown/MDX articles.
- Support categories, tags, references, related projects and reading metadata.
- Provide an article index and category navigation.
- Provide RSS once there is enough regular public writing to justify it.

### FR-07 — Now page
- Show current focus, current learning and active work.
- Display a visible last-updated date.
- Keep content manually maintained and deliberately public.

### FR-08 — About
- Explain background, motivation, current interests and approach to engineering.
- Avoid inflated claims or an unnecessarily long biography.

### FR-09 — Résumé
- Provide a readable HTML résumé or a résumé landing page.
- Provide a link to the latest reviewed PDF.
- Keep PDF and web résumé details consistent.
- Do not publish personal details beyond those deliberately chosen for professional use.

### FR-10 — Contact
- Provide a professional contact route, preferably a dedicated public email alias or a simple mailto link.
- Provide selected public profiles such as GitHub and LinkedIn only after confirming they are current.
- Do not expose the account sign-in email or private phone/address details by default.

### FR-11 — Theme
- Support dark and light themes.
- Respect the operating-system preference initially.
- Provide a keyboard-accessible theme control.
- Persist only the theme preference locally if persistence is implemented.

### FR-12 — Discovery and metadata
- Unique title/description per page.
- Canonical URL once domain is confirmed.
- Sitemap, robots.txt and Open Graph metadata.
- Structured data appropriate to the content, without inventing job titles or credentials.

### FR-13 — Responsive and accessible experience
- Work on mobile, tablet and desktop.
- Keyboard navigable with visible focus.
- Semantic headings and landmarks.
- Images have meaningful alt text or empty alt when decorative.
- Contrast and motion preferences are respected.

### FR-14 — Content validation
- Content records use a typed schema.
- Invalid dates, statuses or required fields fail the build or are caught in validation.
- Draft content is excluded from production builds.

## 9. Non-functional requirements

### Performance
- Static-first delivery.
- Minimise JavaScript and third-party dependencies.
- Optimise and size images appropriately.
- Avoid large hero videos, unnecessary animation and external font blocking.
- Target Core Web Vitals at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, while treating real-user field data as the authoritative measure.

### Accessibility
- Target WCAG 2.2 AA practices.
- Semantic HTML, keyboard access, visible focus, sufficient contrast, useful labels and reduced-motion support.
- Do not communicate status using color alone.

### Reliability
- Build must pass before deployment.
- Broken internal links and missing assets must be caught during review/testing.
- Site should remain readable when client-side scripts fail.

### Security and privacy
- No backend or secrets in the initial version.
- No API keys or private tokens in source control.
- No personal application tracker, private correspondence or sensitive documents in public content.
- Third-party embeds and analytics require explicit review.

### Maintainability
- Reusable layouts and components.
- Typed content models.
- Clear repository structure and setup documentation.
- Pin dependencies via lockfile.
- Automated build checks.

## 10. Content quality gates

A project may be published when:
- Its status is accurate.
- The problem and actual scope are explained.
- The owner's role is stated honestly.
- Technology labels reflect actual use.
- At least one concrete artifact exists, such as code, a demo, test output, schematic, experiment log or detailed design note.
- Results are measured or explicitly labelled as unmeasured.
- Known limitations are acknowledged.

An open-source contribution may be published when:
- The target repository and contribution URL are correct.
- The status is accurate (investigating, issue reported, PR opened, changes requested, merged, closed without merge).
- The date and author's actual role are clear.
- Any description is consistent with the linked public record.

A technical article may be published when:
- It contains the owner's explanation or analysis.
- External sources are credited.
- Code and measurement claims are reproducible or their limitations are disclosed.
- It is not merely copied documentation or generated filler.

## 11. Success measures

Measure product usefulness, not vanity metrics.

### Launch measures
- All launch routes exist and pass content/route checks.
- A visitor can reach a project, résumé and contact route from the homepage.
- All published technical claims link to evidence where applicable.
- Site works on mobile and keyboard-only navigation.
- Build and deployment are reproducible.

### Ongoing measures
- Number of substantial, well-documented projects (not total cards).
- Number of technical notes with original explanation and references.
- Number of externally verifiable contributions and their actual statuses.
- Frequency of meaningful updates to the Now page.
- External feedback from engineers, maintainers, faculty or recruiters.
- Real user performance and accessibility results.

Do not treat page views, GitHub stars, follower counts or a high Lighthouse score as proof of engineering quality.

## 12. Launch scope

### Launch / v1
- Home, About, Work index/detail, Open Source, Engineering Notes index/detail, Now, Résumé and Contact.
- Dark/light theme.
- Structured content collections.
- Responsive design, accessibility basics, SEO metadata, sitemap and static deployment.
- No database or admin dashboard.

### Post-launch / v1.x
- RSS feed.
- Basic search or filters once content volume justifies them.
- More advanced contribution timeline.
- Project comparison/experiment visualisations.

### Future / v2+
- Interactive lab and simulations.
- Carefully scoped live data integrations.
- A content editing workflow if manual Markdown becomes a genuine bottleneck.
- Richer research/publication records.

## 13. Product risks and mitigations

| Risk | Mitigation |
|---|---|
| Site looks impressive but contains little evidence | Launch only useful content; prioritize case studies and artifacts |
| Scope expands indefinitely | Use the launch scope and explicit backlog priorities |
| Website maintenance steals engineering time | Keep publishing static and content-driven; update in batches |
| Overstated skills or achievements | Evidence and status rules; review each public claim |
| Too many frameworks or dependencies | Astro + TypeScript + CSS first; add integrations only when justified |
| Private information leaks | Privacy checklist and public-content review before deployment |
| Visual effects harm accessibility/performance | Reduced motion, progressive enhancement and performance budget |
| GSoC or internship details become stale | Date and source time-sensitive information; update or archive it |
