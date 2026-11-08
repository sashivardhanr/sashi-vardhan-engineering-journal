# 09 — Decisions and Open Items

## 1. Locked decisions

| Decision | Locked choice | Rationale |
|---|---|---|
| Identity | Hybrid personal + engineering + laboratory | The site must communicate a real person and credible work, with room to evolve |
| Visual direction | Hybrid editorial + technical laboratory + selective interaction | Editorial clarity first; technical visuals and interaction when useful |
| Development approach | Manual, learning-first | Owner wants to understand and build the site rather than receive a black-box implementation |
| Product type | Personal engineering platform | More durable than a static student résumé page |
| Framework direction | Astro + TypeScript | Content-rich site, static-first architecture |
| Styling direction | Custom CSS and design tokens | Learn fundamentals and retain visual control |
| Rendering | Static-first | No need for server/database in v1 |
| Career streams | Internship and GSoC are separate streams | Both are important, but neither defines the entire identity |
| Project publication | Evidence-first | Old projects are not automatically included |

## 2. Decisions deferred until implementation

1. **Domain name:** select after checking availability, cost and long-term suitability.
2. **Hosting provider:** compare GitHub Pages, Cloudflare Pages, Netlify and other options; confirm account ownership.
3. **Public contact email:** use a dedicated alias if desired; do not expose the account sign-in email by default.
4. **Profile photo:** optional; no need to block launch on photography.
5. **Font hosting:** begin with system stacks; evaluate a self-hosted licensed font only after typography testing.
6. **Analytics:** no analytics by default; add privacy-conscious analytics only if useful.
7. **RSS:** add once the note stream has enough useful content.
8. **Search:** defer until there is enough content to make search valuable.
9. **Interactive Lab:** future capability, not launch requirement.
10. **Public internship information:** show only selected, verified work and professional direction; keep private applications and recruiter correspondence private.

## 3. Initial public content still needed

- Approved short biography.
- Approved homepage positioning copy.
- Approved public name formatting.
- Education details and whether to publish current CGPA.
- Public GitHub link and other profile links.
- One genuinely defensible project case study.
- One or more original technical notes when ready.
- Public résumé PDF after review.
- Contact method.
- Optional professional portrait or original visual identity asset.

## 4. Content not to publish yet by default

- Unverified NEST or AEVUM OS claims.
- Any project merely proposed but not implemented.
- GSoC selection/participant language before selection.
- Unmerged or private PR information presented as success.
- Private internship tracker or job application outcomes.
- Sensitive personal details.
- Skill ratings/percentages without defensible assessment.

## 5. Key risk decisions

- Do not make the site too big to maintain.
- Do not make the homepage an application dashboard.
- Do not make the site dependent on live GitHub/API data.
- Do not make the technical identity narrower than actual interests before career exploration is complete.
- Do not use design effects to compensate for a lack of project evidence.
- Do not use a full CMS until there is an actual content-editing problem.

## 6. Immediate next actions

1. Review and accept/revise the proposed positioning copy.
2. Decide whether the current CGPA and broad location should be public.
3. Verify which GitHub/professional profile URLs should appear.
4. Choose 2–3 domain candidates (do not purchase before checking fit and availability).
5. Choose hosting after the repository is created.
6. Create a new independent GitHub repository for the personal website.
7. Begin Milestone 1 in `06_IMPLEMENTATION_BACKLOG.md`.
