# 04 — Content Model

## 1. Content-model principles

- Content is authored and reviewed by the owner; no content is published automatically from external APIs.
- Structured records drive reusable pages and cards.
- Each collection has a documented schema and validation.
- Drafts are excluded from production output.
- Public status labels must reflect reality.
- Content should be portable Markdown/YAML/JSON wherever possible.
- Dates use ISO 8601 (`YYYY-MM-DD`) and timezone assumptions are explicit where timestamps matter.

Astro content collections support structured content and schemas, with type information inferred from the schema. This makes them a good fit for project records, articles and contribution records. See official docs: https://docs.astro.build/en/guides/content-collections/ and https://docs.astro.build/en/reference/modules/astro-content/.

## 2. Collections

Recommended launch collections:

1. `projects` — engineering project case studies.
2. `notes` — technical articles and experiments.
3. `contributions` — public open-source contribution records.
4. `experiments` — focused lab records if distinct from project case studies.

Recommended global data files:

- `site.ts` — site name, tagline, canonical URL, navigation and public links.
- `profile.ts` — approved public biography and education summary.
- `now.ts` — current focus sections and update date.
- `resume.ts` — current résumé file, version date and summary.

Keep global configuration small. Do not turn every paragraph into a CMS field.

## 3. Shared enums

### Project status

- `exploring`
- `in-development`
- `prototype`
- `validated`
- `released`
- `archived`

### Contribution status

- `investigating`
- `issue-reported`
- `discussion`
- `pr-open`
- `changes-requested`
- `merged`
- `closed`

### Publication status

- `draft`
- `published`
- `archived`

### Skill evidence level

Avoid a numeric proficiency rating. Use evidence labels only:
- `exploring` — learning the concept or tool.
- `used` — used in a specific activity or project.
- `demonstrated` — evidence exists in a public project, test, contribution or write-up.

A `demonstrated` label should link to evidence; it is not equivalent to professional mastery.

## 4. Project content schema

### Required fields

- `title`
- `description`
- `slug` or collection ID
- `status`
- `domain`
- `startedAt`
- `updatedAt`
- `published`
- `featured`
- `role`
- `technologies`

### Optional fields

- `completedAt`
- `coverImage`
- `repositoryUrl`
- `demoUrl`
- `documentationUrl`
- `team`
- `tags`
- `metrics`
- `relatedNotes`
- `relatedContributions`
- `visibilityNote`

### Project body sections

Use Markdown headings for:
- Problem
- Goals and requirements
- Scope
- Architecture
- Design decisions
- Implementation
- Challenges and debugging
- Validation and testing
- Results
- Limitations
- Future work
- References

Not every section needs to be forced into every project, but no project should claim validation or results without evidence.

### Illustrative frontmatter

```yaml
---
title: "Embedded Systems Validation Lab"
description: "An exploration into repeatable firmware testing and hardware-in-the-loop validation."
status: exploring
domain: embedded-systems
startedAt: 2026-11-17
updatedAt: 2026-11-17
published: false
featured: false
role: "Project direction under evaluation; implementation not yet claimed."
technologies:
  - C
  - Python
  - pytest
  - Microcontrollers
repositoryUrl: ""
demoUrl: ""
---
```

This is a placeholder example. It must remain unpublished until real implementation exists and its text is updated to reflect reality.

## 5. Engineering notes schema

### Fields

- `title`: required string.
- `description`: required concise summary.
- `publishedAt`: required date.
- `updatedAt`: optional date.
- `status`: draft/published/archived.
- `category`: required controlled category.
- `tags`: list of short labels.
- `featured`: boolean.
- `coverImage`: optional image reference.
- `relatedProjects`: list of project IDs/slugs.
- `references`: list of source title + URL + access date where useful.
- `series`: optional series identifier.

### Article body guidance

- State the question or problem.
- Explain assumptions and context.
- Show the method, code, measurement or reasoning.
- Separate observation from interpretation.
- Cite external documentation or sources.
- Explain limitations and unresolved questions.
- Link related work.

## 6. Open-source contribution schema

### Fields

- `title`: required.
- `organization`: required.
- `repositoryName`: required.
- `repositoryUrl`: required.
- `contributionType`: issue, discussion, documentation, tests, bug-fix, feature, review, other.
- `status`: required contribution status enum.
- `openedAt`: optional date.
- `updatedAt`: optional date.
- `issueUrl`: optional.
- `pullRequestUrl`: optional.
- `commitUrl`: optional.
- `summary`: required factual summary.
- `role`: specific description of what the owner did.
- `technicalNotes`: optional explanation.
- `evidenceLinks`: list of public URLs.
- `published`: boolean.

### Important publication rules

- A repository clone/build is not an upstream contribution; it belongs in a private learning log or a public exploration note if useful.
- An investigation is not an issue report.
- An open PR is not a merged contribution.
- A merged PR must link to the merged PR or commit.
- If a PR is closed without merge, state that accurately.
- Do not expose private maintainer messages or private application details.

### Example record

```yaml
---
title: "Investigating build configuration"
organization: "Example project"
repositoryName: "example/repository"
repositoryUrl: "https://github.com/example/repository"
contributionType: "issue"
status: "investigating"
openedAt: 2026-11-20
updatedAt: 2026-11-20
summary: "Reviewing the local build process and documenting a reproducible setup issue."
role: "Independent investigation; no upstream change submitted."
evidenceLinks: []
published: false
---
```

This is a schema illustration, not a real contribution.

## 7. Experiment schema

Use this for a self-contained technical investigation that is too small to be a full project and more structured than a short article.

Fields:
- `title`
- `question`
- `domain`
- `startedAt`
- `updatedAt`
- `status`
- `method`
- `tools`
- `resultSummary`
- `artifactLinks`
- `limitations`
- `published`

Body structure:
1. Question.
2. Hypothesis.
3. Setup.
4. Method.
5. Observations.
6. Interpretation.
7. Limitations.
8. Next experiment.

## 8. Global site settings

### Site identity

- Display name: `Sashi Vardhan`.
- Short positioning: `Building systems where software meets hardware.` (review after project direction becomes clearer).
- Description: concise statement that this is a personal engineering site and technical notebook.
- Canonical URL: unset until the domain is chosen.
- Default social image: create an original, simple typographic identity graphic.

### Public profile fields

- Full preferred public name.
- Education and expected graduation year (owner-approved).
- Short biography.
- Public city/country only if the owner explicitly approves it.
- Public email alias or contact route.
- Selected professional profile URLs.

Never automatically include DOB, home address, personal phone, account login email, student ID, family information or sensitive records.

## 9. Skills and technologies model

Do not add a skills bar with percentage values. Percentages imply measurement that does not exist.

A controlled skill record may contain:
- `name`
- `category`
- `evidenceLevel`: exploring / used / demonstrated
- `evidence`: related project, note or contribution slugs
- `lastReviewedAt`

If a skill cannot point to evidence, keep it in a private learning plan rather than presenting it as a public competency.

## 10. Career tracks as content streams

### Internship / professional development stream

Public site may show:
- Target technical domains.
- Published project evidence.
- Verified experience.
- Relevant public learning or engineering notes.
- Résumé.

Keep private:
- Application tracker and application status.
- Recruiter emails and private contact data.
- Rejected/offered status unless the owner intentionally decides to share it.
- Company-specific confidential assessments or interview material.

### GSoC / open-source stream

Public site may show:
- Target ecosystems and selection rationale.
- Public issues, discussions and PRs.
- Technical notes explaining repository work.
- Public project proposal only if deliberately released.
- Actual selection result when known.

Keep private:
- Private mentor conversations.
- Draft applications and confidential feedback.
- Personal ranking of mentors or organizations.
- Any information restricted by an organization or programme.

## 11. Media and asset model

Store project images under a consistent path, ideally grouped by project slug. Each image needs:
- filename describing its subject.
- alt text or an explicit decorative flag.
- caption where technical context is useful.
- credit/source if not original.
- dimensions/aspect ratio.

Do not use a screenshot or render to imply an implementation that does not exist.

## 12. Draft and publication workflow

1. Create a draft content file.
2. Validate its schema and links.
3. Review technical facts and evidence.
4. Review privacy and attribution.
5. Preview on mobile and desktop.
6. Set `published: true` or publication status to published.
7. Run the production build and link checks.
8. Commit and deploy.
9. Revisit time-sensitive content after a relevant change.

## 13. Schema implementation note

At implementation, define Astro collections in `src/content.config.ts` and use `astro/zod` schemas. Keep schemas minimal and strict enough to protect content integrity without creating unnecessary maintenance. Use the current stable Astro documentation at build time, as APIs may change between major versions.
