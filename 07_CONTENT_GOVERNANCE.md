# 07 — Content Governance and Publishing Rules

## 1. Why governance matters

An evolving website can become a credibility asset, but only if it remains accurate. A polished page with exaggerated skills, inflated achievements or stale status undermines trust.

The owner is the editor and publisher. Automation may assist with formatting and validation, but no external activity should be published without review.

## 2. Evidence hierarchy

Prefer the strongest available evidence for a claim:

1. Merged upstream commit / accepted pull request / public technical review.
2. Reproducible repository, tests, release or working demo.
3. Measurement, waveform, benchmark or experiment artifact with method.
4. Architecture/specification and implementation documentation.
5. A clearly labelled prototype or personal experiment.
6. An intention, proposal or exploration note (must be labelled as such).

Do not describe an intention as a completed project or an issue investigation as an upstream contribution.

## 3. Project lifecycle

Use status transitions deliberately:

`exploring → in-development → prototype → validated → released → archived`

Not every project has to pass through every state. A prototype should not become “validated” until defined tests have actually been run. A released project should have a reproducible release artifact or public repository state.

When archiving a project:
- state why it was paused or archived if useful;
- preserve the final known status;
- do not delete useful technical lessons;
- avoid describing it as a failure unless that accurately reflects the work.

## 4. Open-source contribution language

Use precise verbs:
- “Investigated” — examined code or documentation.
- “Reproduced” — obtained the same failure with recorded steps.
- “Reported” — filed a public issue.
- “Proposed” — suggested an approach in a public discussion.
- “Submitted” — opened a pull request.
- “Revised” — addressed review feedback.
- “Merged” — the PR was merged into the upstream project.
- “Maintained” — only if there is sustained responsibility and evidence.

Never say “GSoC contributor” before official selection. Before selection, use “GSoC 2027 preparation” or “open-source contributor” only where contribution activity supports it.

## 5. Skills language

Avoid “expert”, “advanced” or percentage-based skill bars unless there is a defensible external basis.

Preferred statements:
- “Currently learning C++ and build systems.”
- “Used Python to automate serial-device tests in [project].”
- “Implemented and tested an I2C sensor driver in [project].”
- “Contributed [specific change] to [repository], PR [link].”

Tie technologies to work. A large list of languages with no evidence is not useful.

## 6. Engineering article standards

Every technical article should:
- state the question being addressed;
- distinguish facts, assumptions and opinions;
- cite authoritative references when using external information;
- avoid copying large sections of documentation;
- include code or results only when tested or clearly labelled illustrative;
- show what the owner learned or concluded;
- acknowledge limitations and open questions;
- be reviewed for correctness before publication.

If AI tools assisted with drafting or code, the owner remains responsible for the final technical content and must understand it. Follow any applicable project or organization policies.

## 7. Privacy and security review

Before every publication or release, check:
- No passwords, API tokens, SSH keys or credentials.
- No personal account login email exposed unintentionally.
- No student ID, home address, private phone number or sensitive personal record.
- No private recruiter, mentor or university correspondence.
- No confidential source code or documents from an internship/employer.
- No identifiable third-party image or data without permission where required.
- No hidden image/PDF metadata containing private information.
- No private internship tracker or application outcomes unless deliberately approved for public sharing.

A professional public email alias is preferred over a sign-in email.

## 8. Update cadence

Suggested, not mandatory:
- Now page: every 3–4 weeks or after a meaningful change.
- Project pages: when status, implementation, test evidence or outcomes change.
- Open-source record: after a public issue, PR or review milestone.
- Engineering Notes: when there is a useful lesson worth publishing, not on a quota.
- Résumé: after verified experience or project evidence changes.

Do not publish filler to satisfy a schedule.

## 9. Corrections and stale content

- Fix factual mistakes promptly.
- Keep `updatedAt` accurate when meaningful content changes.
- Archive time-sensitive information when no longer current.
- Add a correction note for material published errors where appropriate.
- Avoid silently changing the meaning of an old technical result.

## 10. Editorial tone

- Specific, calm, technically curious and honest.
- Prefer direct first-person writing for personal reflections.
- Avoid grandiose claims, buzzword strings and artificial corporate language.
- Explain difficult concepts clearly without pretending they are trivial.
- Make limitations visible; engineering credibility increases when the author can explain what did not work.
