# 05 — Technical Architecture

## 1. Architecture decision

**Recommended stack:** Astro + TypeScript + Markdown/MDX + custom CSS + static deployment.

This is selected because the site is primarily a content-rich publication and portfolio. It needs project pages, notes, timelines and stable public routes, but not server-side application features in version one.

Astro's current documentation supports static output by default, structured content collections with schemas, Markdown/MDX authoring and multiple static deployment targets. Verify the exact current stable release and integration versions at implementation time, pin them in the lockfile and avoid copying examples from old major versions.

Useful official documentation:
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
- Astro Content Collections API: https://docs.astro.build/en/reference/modules/astro-content/
- Markdown in Astro: https://docs.astro.build/en/guides/markdown-content/
- MDX integration: https://docs.astro.build/en/guides/integrations-guide/mdx/
- Deployment: https://docs.astro.build/en/guides/deploy/
- Configuration reference: https://docs.astro.build/en/reference/configuration-reference/
- RSS tutorial: https://docs.astro.build/en/tutorial/5-astro-api/4/

## 2. High-level architecture

```text
Visitor Browser
      |
      v
Static HTML + CSS + small progressive-enhancement scripts
      |
      v
Astro build
  |       \
  |        \--> Page layouts and reusable Astro components
  |
  +--> Typed content collections (Markdown/MDX + schemas)
  |
  +--> Static assets (images, résumé PDF, icons)
  |
  +--> SEO metadata, sitemap, RSS (when enabled)
      |
      v
Build output: dist/
      |
      v
Static hosting + custom domain (provider to be chosen)
```

No database, API server or authentication layer is required for v1.

## 3. Recommended technologies

| Layer | Choice | Reason |
|---|---|---|
| Framework | Astro | Content-first, static-first page generation |
| Language | TypeScript | Type safety and transferable engineering skill |
| Styling | Custom CSS | Learn layout, responsiveness, themes and design tokens directly |
| Content | Markdown, with MDX only where needed | Portable authoring and technical writing |
| Schemas | Astro content schemas / Zod | Validate records and infer types |
| Components | Astro components | Avoid unnecessary client framework at the start |
| Interactivity | Native HTML + small browser JavaScript | Progressive enhancement and low JS payload |
| Package manager | npm initially | Familiar and low-friction; pin via lockfile |
| Tests | Build checks + browser tests; add unit tests for nontrivial logic | Ensure routes and interactions work |
| CI | GitHub Actions | Build/test on pull requests and main-branch updates |
| Hosting | Static host to be selected | Low cost and no server maintenance |

### Explicitly deferred

- React/Vue/Svelte: only add if a real interactive component justifies it.
- Tailwind: not required; custom CSS is preferred for learning and a distinctive design system.
- Database: no use case in v1.
- Headless CMS: Markdown in Git is sufficient initially.
- Server-side rendering: not required for static content.
- Live GitHub API integrations: defer until there is a strong reason; avoid brittle or rate-limited dynamic calls on core pages.

## 4. Repository structure

Proposed structure:

```text
sashi-vardhan-site/
├── public/
│   ├── favicon.svg
│   ├── og/
│   ├── images/
│   ├── downloads/
│   │   └── resume-current.pdf
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── global/
│   │   ├── content/
│   │   ├── project/
│   │   └── technical/
│   ├── content/
│   │   ├── projects/
│   │   ├── notes/
│   │   ├── contributions/
│   │   └── experiments/
│   ├── data/
│   │   ├── site.ts
│   │   ├── profile.ts
│   │   ├── now.ts
│   │   └── resume.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ArticleLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── work/
│   │   ├── open-source/
│   │   ├── notes/
│   │   ├── now.astro
│   │   ├── resume.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   ├── rss.xml.ts
│   │   └── robots.txt.ts (only if dynamically generated)
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   ├── typography.css
│   │   └── components.css
│   └── content.config.ts
├── tests/
│   ├── e2e/
│   └── content/
├── .github/
│   └── workflows/
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── README.md
└── CHANGELOG.md (optional)
```

Adapt the structure after the initial Astro scaffold; do not create empty folders for speculative features.

## 5. Rendering and data flow

- Use `output: 'static'` for v1.
- Query content collections at build time.
- Generate project and note detail routes from validated collection entries.
- Generate homepage cards from selected and published content.
- Keep static content available without JavaScript.
- Add client-side JavaScript only for theme selection, mobile navigation and optional filtering/search.
- Avoid external API requests for core content rendering.

## 6. Theme implementation

- Define semantic CSS variables for background, surface, text, border, accent and status colors.
- Use `data-theme="light"` or `data-theme="dark"` on the root element.
- Follow system preference on first visit.
- Store explicit user choice in local storage only if needed.
- Avoid layout flash and make the toggle accessible.
- Ensure the site remains usable when JavaScript is disabled; in that case, default to a CSS media-query theme.

## 7. Routing, URLs and canonical domain

- Use lowercase, hyphenated slugs.
- Use trailing slash policy consistently.
- Choose and reserve a domain before setting `site` in Astro configuration.
- Until domain is decided, use a local preview URL and do not publish fake canonical URLs.
- Once deployed, configure the canonical site URL so sitemap/canonical generation uses the real domain.
- Add redirects if a published slug changes.

## 8. SEO and discovery

Launch requirements:
- Unique title and meta description per page.
- Canonical URL.
- Open Graph and social card metadata.
- Sitemap.
- robots.txt.
- Semantic headings and link text.
- Descriptive image alt text.
- `Person` structured data on About/Home when the public identity details are approved.
- `Article` structured data for technical notes where appropriate.
- `ProfilePage` may be considered if it accurately describes a page centered on the individual; validate fields against current search documentation.
- RSS feed can be added once the note stream has several useful posts.

Structured data must accurately reflect the visible page. Do not invent employer, job title, award, publication or selection details.

## 9. Accessibility

Minimum checks:
- Keyboard-only navigation for header, theme toggle and any filters.
- Visible focus indicators.
- Correct landmarks (`header`, `nav`, `main`, `footer`).
- One logical H1 per page and meaningful heading order.
- Accessible names for icon-only buttons.
- Sufficient text and UI contrast.
- Form labels if a form is introduced in the future.
- Captions/alt text for meaningful visuals.
- Respect reduced-motion preferences.
- Test at 200% zoom and narrow viewport widths.

Target WCAG 2.2 AA practices; do not claim conformance until an audit is completed.

## 10. Performance

- Static delivery and minimal client JS.
- Use responsive images and explicit dimensions.
- Defer nonessential scripts.
- Avoid third-party fonts/scripts unless their value justifies cost.
- Avoid autoplay video and large background media.
- Check build output and Lighthouse/Pagespeed results.
- Track field Core Web Vitals once traffic permits; lab scores are not the same as field data.

Performance targets:
- LCP ≤ 2.5 s.
- INP ≤ 200 ms.
- CLS ≤ 0.1.

These are targets, not launch guarantees.

## 11. Privacy, security and external services

- No login or admin panel.
- No personal application tracker or private GSoC notes in the public repository.
- Use a dedicated public contact email alias if an email address is shown.
- Do not publish account-login email, phone, home address, student ID, date of birth or private documents.
- Do not commit API keys, private tokens, environment files or credentials.
- Review all images and PDFs for hidden metadata and sensitive information before publishing.
- Use external analytics only after a privacy and consent review; analytics are optional for v1.
- Use `rel="noopener noreferrer"` for external links opened in a new tab.

## 12. Contact implementation

V1: simple mailto link to an explicitly chosen public address, plus public profile links.

Deferred: backend contact form. If later required, choose a form provider only after checking data handling, spam protection, privacy notice and retention. Never create a form that silently sends user data to an unknown service.

## 13. Hosting and deployment

Choose a static hosting service after the repository and domain strategy are known. Candidate providers include GitHub Pages, Cloudflare Pages, Netlify or another Astro-supported static host. Compare:
- custom domain setup;
- build limits and costs;
- preview deployment support;
- GitHub integration;
- image handling;
- redirect/headers support;
- account ownership and recovery.

Astro's official deployment guide documents Git-connected deploy flows and the common build output (`dist/`): https://docs.astro.build/en/guides/deploy/.

Do not lock the project to a provider until the owner confirms the account and domain plan.

## 14. Testing strategy

### Every change
- `npm run check` (when configured).
- `npm run build`.
- Inspect terminal warnings and resolve meaningful errors.
- Review Git diff for accidental files or secrets.

### Content checks
- Schema validation.
- Draft exclusion.
- Project status consistency.
- Local and external link review.
- Image existence and alt text.

### Browser / visual checks
- Desktop and mobile widths.
- Light and dark themes.
- Keyboard navigation.
- Reduced motion.
- 200% zoom.
- Broken links and 404 page.

### Automated tests
- Browser end-to-end test for main navigation and critical flows.
- Link checking for internal routes.
- Accessibility scan as a helper, followed by manual review.
- Lighthouse performance/accessibility/SEO as a diagnostic tool.

## 15. Version control and workflow

- Default branch: `main`.
- Feature branches for coherent work.
- Small, descriptive commits.
- Use pull requests for substantial changes even if the project is solo; this creates a review point and preserves a meaningful history.
- CI should build every PR.
- No production deploy from a failed build.
- Tag a launch release when v1 is ready.

## 16. Open architecture decisions

- Domain name.
- Public contact alias.
- Hosting provider.
- Whether MDX is required immediately or only after the first article needs embedded custom components.
- Whether to include client-side search at launch (recommendation: no).
- Whether to use a local webfont (recommendation: start with system stacks and test first).
