# 08 — Manual Learning Path

## 1. Learning objective

The website is both a public product and a structured way to learn web engineering. The owner chose manual development because understanding the code matters as much as shipping the website.

The aim is not to avoid all AI assistance. The aim is to avoid blindly accepting generated code. Every major architectural or implementation decision should be understood, reviewed and tested by the owner.

## 2. Learning rules

1. Understand the requirement before writing code.
2. Build one small feature at a time.
3. Read the framework documentation relevant to the task.
4. Write or modify the code yourself first where possible.
5. Use an assistant for explanation, review and debugging, not as an unquestioned authority.
6. Ask for a line-by-line explanation when a concept is unfamiliar.
7. Run the code and inspect browser behaviour.
8. Make a commit after a coherent milestone.
9. Keep a learning journal of concepts that were confusing and how they were resolved.
10. Do not add a dependency unless you can explain what problem it solves.

## 3. Competency sequence

### Stage A — Web foundations

Learn and practise:
- HTML document structure and semantic elements.
- Forms and accessible labels (even if no form ships initially).
- CSS box model, cascade, specificity and custom properties.
- Flexbox and CSS Grid.
- Responsive layout and media queries.
- Typography and readable line lengths.
- JavaScript fundamentals and DOM events.
- Browser developer tools.
- HTTP, URLs, status codes and browser loading basics.

**Exercise:** create a semantic single-page profile with responsive header, content sections and footer using only HTML/CSS first.

### Stage B — Git and local development

Learn:
- Repository, working tree, staging and commits.
- Branches and merging.
- Pull requests and review.
- `.gitignore` and dependency lockfiles.
- Terminal navigation and package scripts.
- Debugging install/build errors.

**Exercise:** make a feature branch, implement a layout change, inspect the diff, commit and merge locally.

### Stage C — Astro and TypeScript

Learn:
- Astro project structure and page routing.
- Layouts and components.
- Props and slots.
- Static rendering and build output.
- TypeScript types and interfaces.
- Content collections and schema validation.
- Dynamic routes from content records.
- Markdown and MDX differences.

**Exercise:** build a project-card component from a typed project record and generate one detail route.

### Stage D — Design systems

Learn:
- Semantic design tokens.
- Color and contrast.
- Type scales.
- Spacing systems.
- Responsive components.
- Theme switching.
- Accessibility and reduced motion.

**Exercise:** implement one component in light and dark themes and verify keyboard/contrast behaviour.

### Stage E — Quality and deployment

Learn:
- Build checks and static analysis.
- Browser testing.
- Accessibility audits.
- Image optimisation.
- SEO basics and canonical URLs.
- Static hosting and DNS/custom domain basics.
- Continuous integration.

**Exercise:** build the site from a clean clone and deploy a preview using the chosen provider.

## 4. Manual build sequence

### Milestone 1 — Foundation
- Scaffold Astro with TypeScript.
- Run local dev server and build.
- Understand `src/pages`, `src/layouts`, `src/components`, `public` and config.
- Build one semantic page.

### Milestone 2 — Design system
- Write CSS variables for both themes.
- Build typography and spacing rules.
- Implement one responsive header.
- Test keyboard navigation.

### Milestone 3 — Homepage
- Build hero, current focus and CTA sections.
- Use real text; do not invent experience.
- Test desktop/mobile.

### Milestone 4 — One content record
- Define one content collection and schema.
- Add one project record.
- Generate a project index card and detail page.
- Validate the record and build.

### Milestone 5 — Remaining key pages
- About, Now, Open Source, Notes, Résumé and Contact.
- Reuse layouts and components.
- Add one real article and one verified project when ready.

### Milestone 6 — Quality and release
- Accessibility, SEO, performance and link checks.
- Build CI.
- Hosting and domain.
- Content/privacy review.
- Launch v1.

## 5. Suggested project learning log

For each session, record:
- Date.
- Feature or issue.
- Concept learned.
- Files changed.
- Commands run.
- What worked.
- What failed and why.
- What remains unclear.
- Commit hash if applicable.

## 6. Self-test questions

Before accepting a major component or architectural choice, the owner should be able to explain:
- Why is this component separate?
- What data does it receive?
- Which content owns the truth?
- Does it require JavaScript?
- How does it work on mobile?
- How does a keyboard user operate it?
- What happens if content is absent or malformed?
- How is it tested?
- What would make this design need to change?

## 7. AI assistance protocol

When using a coding assistant:
- Give it one clearly scoped task.
- Ask it to explain the intended changes before editing.
- Review the diff.
- Ask it to explain unfamiliar code.
- Run checks yourself.
- Do not merge code you cannot explain.
- Keep source code and design decisions in your own repository.
- Do not share secrets or private account credentials.

The owner should be able to maintain the website if the AI tool is unavailable.
