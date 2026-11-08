import type { Project } from '../../src/data/projects';
import planUrl from './architecture-excerpt.svg?url&no-inline';

/** Only imported by the separate review srcDir. Never import this from src/. */
export const reviewProjects: readonly Project[] = [
  {
    id: 'fixture-figure',
    fixtureNotice: 'Layout fixture 01 — not published portfolio work',
    domain: 'Figure presentation specimen',
    title: 'A technical question. A traceable investigation.',
    summary: 'This specimen reserves space for a real project’s question, constraints and scope. The source excerpt is a planning document; no implementation or result is claimed.',
    role: 'No project role claimed; layout specimen only.',
    validation: 'No test result supplied.',
    limitations: 'An authentic project artifact is still required.',
    evidence: [{ label: 'Evidence', value: 'Supplied architecture plan (planning only)' }],
    figure: {
      src: planUrl, width:900, height:580,
      alt:'Excerpt from the supplied architecture plan, showing a visitor browser, static files and an Astro build. This is proposed architecture, not implemented work.',
      caption:'Supplied architecture plan — planning material, not implemented work.',
      source:'05_TECHNICAL_ARCHITECTURE.md, section 2.',
      transcript:'Visitor Browser\n      |\n      v\nStatic HTML + CSS + small progressive-enhancement scripts\n      |\n      v\nAstro build\n  |       \\\n  |        \\--> Page layouts and reusable Astro components\n  |\n  +--> Typed content collections (Markdown/MDX + schemas)\n  |\n  +--> Static assets (images, résumé PDF, icons)\n  |\n  +--> SEO metadata, sitemap, RSS (when enabled)',
    },
  },
  {
    id:'fixture-text',
    fixtureNotice:'Layout fixture 02 — text-only; not a real project',
    title:'When the explanation is the artifact.',
    summary:'A text-only case study gives the problem, method and limitations room to stand on their own. This record intentionally has no figure, date, status or external link.',
    role:'Awaiting owner-verified content.',
    validation:'No validation is claimed.',
    limitations:'This is a component specimen, not an engineering outcome.',
  },
  {
    id:'fixture-long',
    fixtureNotice:'Stress fixture 03 — long title and missing optional metadata',
    title:'A deliberately long investigation title about understanding the boundary between a software assumption and the behaviour of a physical system',
    summary:'This fixture exercises wrapping and reading rhythm. It contains no achievement, technology-usage claim, measured result or contribution history.',
    role:'Layout validation only.',
    validation:'No engineering validation is claimed.',
    limitations:'No optional metadata or figure supplied.',
  },
];
