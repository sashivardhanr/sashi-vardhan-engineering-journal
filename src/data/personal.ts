export interface PublicDestination {
  label: string;
  href: string;
  detail?: string;
  status: 'draft' | 'published';
}

/** Only deliberately approved destinations belong here. Never derive from account configuration. */
export const contactDestinations: readonly PublicDestination[] = [
  { label: 'Email me', href: 'mailto:sashivardhan.dev@gmail.com', status: 'published' },
  { label: 'GitHub', href: 'https://github.com/sashivardhanr', status: 'published' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sashi-vardhan/', status: 'published' },
];

export function publishedDestinations(records: readonly PublicDestination[]) {
  return records.filter(record => record.status === 'published').map(record => {
    const url = new URL(record.href);
    if (!record.label.trim() || url.username || url.password ||
      !(url.protocol === 'https:' || (url.protocol === 'mailto:' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url.pathname)))) {
      throw new Error('Public destinations require a label and a valid HTTPS or email address.');
    }
    return record;
  });
}

export interface FocusSection { heading: string; body: string }
export type NowRecord =
  | { status: 'draft'; preparedAt: string; sections: readonly FocusSection[] }
  | { status: 'published'; reviewedAt: string; sections: readonly FocusSection[] };

// Preparation date is not an activity update or an owner-review date.
export const nowRecord: NowRecord = { status: 'draft', preparedAt: '2026-11-08', sections: [] };

export function validateDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value) {
    throw new Error('Expected a real ISO calendar date.');
  }
  return value;
}

export function publishedFocus(record: NowRecord) {
  validateDate(record.status === 'published' ? record.reviewedAt : record.preparedAt);
  if (record.status !== 'published') return null;
  if (!record.sections.length || record.sections.some(section => !section.heading.trim() || !section.body.trim())) {
    throw new Error('A published focus update needs reviewed content.');
  }
  return record;
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(validateDate(value)));
}

export const aboutSections = [
  { title: 'Between software and hardware', paragraphs: [
    'My interests span embedded systems, software engineering, digital hardware, AI, robotics and open-source engineering. Electronics and Communication Engineering is the academic context for that exploration.',
    'These are areas I am exploring, rather than a list of established specialisms. This site keeps that distinction visible: interests describe a direction; engineering work needs its own explanation and evidence.',
  ] },
  { title: 'Questions I want to make room for', paragraphs: [
    'The meeting point of software and hardware gives this journal its focus. It leaves room for questions about how code is structured, how digital systems behave, and how computation connects to physical systems.',
    'Open source sits alongside those technical interests. It is an interest in shared engineering work, not a claim of an upstream contribution history.',
  ] },
  { title: 'Learning, building and documenting', paragraphs: [
    'The intention for this journal is to keep the reasoning alongside the work: the question, the approach, the evidence and the limitations. A design proposal, a prototype and a tested result should be distinguishable.',
    'As reviewed material becomes available, project records and technical notes can make that approach concrete. Until then, this biography does not stand in for engineering evidence.',
  ] },
] as const;

// Populate only with reviewed individual work/writing destinations. Profiles are not project evidence.
export const relatedWork: readonly PublicDestination[] = [];
