export interface EvidenceItem {
  label: string;
  value: string;
  href?: string;
}

export interface TechnicalFigureData {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  source?: string;
  transcript: string;
}

/** Publication is an editorial decision; lifecycle is not a proficiency rating. */
export interface Project {
  id: string;
  title: string;
  summary: string;
  role: string;
  validation: string;
  limitations: string;
  domain?: string;
  status?: string;
  updatedAt?: string;
  evidence?: EvidenceItem[];
  figure?: TechnicalFigureData;
  fixtureNotice?: string;
}

// No verified case studies were supplied. Review fixtures live under tests/ only.
export const publishedProjects: readonly Project[] = [];
