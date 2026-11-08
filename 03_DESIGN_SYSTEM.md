# 03 — Design System

## 1. Design direction

**Design concept:** Editorial engineering laboratory.

The experience combines:
- Editorial clarity and typography.
- Technical diagrams, metadata and structured layouts.
- Subtle interactive elements where they explain or improve a task.
- A restrained black/graphite/silver identity with a warm light theme.

The site should feel precise, thoughtful, quietly confident and maintained. It should not feel like a generic SaaS dashboard, a gaming HUD, a cyberpunk landing page or a student portfolio template.

## 2. Design principles

1. Typography and content lead; decoration supports them.
2. Use negative space to make technical content easier to scan.
3. Use a strong typographic hierarchy rather than oversized gradients.
4. Technical metadata should be compact and visually distinct.
5. Diagrams, test images and code samples should be functional evidence.
6. Use color semantically and sparingly.
7. The same content should remain clear in light and dark modes.
8. Motion must be optional and nonessential.
9. Every layout must work at mobile width.
10. Avoid an interface that looks impressive but is difficult to maintain manually.

## 3. Color system

Use CSS custom properties. The following values are initial design tokens and may be tuned during implementation after contrast checks.

### Shared semantic roles

| Token | Purpose |
|---|---|
| `--color-bg` | Main page background |
| `--color-surface` | Cards and raised panels |
| `--color-surface-soft` | Secondary background / code panels |
| `--color-text` | Primary text |
| `--color-text-muted` | Supporting text |
| `--color-border` | Dividers and outlines |
| `--color-accent` | Main action and selected link |
| `--color-accent-soft` | Accent background |
| `--color-success` | Verified / complete state |
| `--color-warning` | Needs attention / in progress |
| `--color-danger` | Failed / blocked state |

### Dark theme (initial)

| Token | Value |
|---|---|
| `--color-bg` | `#111418` |
| `--color-surface` | `#181D22` |
| `--color-surface-soft` | `#20262D` |
| `--color-text` | `#F2F4F5` |
| `--color-text-muted` | `#A9B2BC` |
| `--color-border` | `#343D47` |
| `--color-accent` | `#D4A15D` |
| `--color-accent-soft` | `#34291D` |
| `--color-success` | `#8FBAA1` |
| `--color-warning` | `#D8B36A` |
| `--color-danger` | `#D68B87` |

### Light theme (initial)

| Token | Value |
|---|---|
| `--color-bg` | `#F5F4F0` |
| `--color-surface` | `#FFFFFF` |
| `--color-surface-soft` | `#ECEAE4` |
| `--color-text` | `#171B20` |
| `--color-text-muted` | `#58616B` |
| `--color-border` | `#D9D8D1` |
| `--color-accent` | `#8A5A20` |
| `--color-accent-soft` | `#F2E8DA` |
| `--color-success` | `#2F6D4C` |
| `--color-warning` | `#805B15` |
| `--color-danger` | `#9B3737` |

**Accessibility note:** These are starting values, not certified contrast pairs. Test every text/background pairing, including muted text and interactive states. Adjust tokens to meet WCAG 2.2 AA contrast requirements.

## 4. Typography

### Recommended roles

- **Display / editorial heading:** a restrained serif or distinctive display face may be used for selected major headings, not every title.
- **Body / interface:** clean sans-serif for readability.
- **Technical metadata / code labels:** monospaced face.

### Initial font stacks

```css
:root {
  --font-sans: Inter, "Segoe UI", system-ui, sans-serif;
  --font-display: "Iowan Old Style", "Palatino Linotype", Georgia, serif;
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
}
```

Fonts should initially use system fallbacks. If a webfont is added, self-host a licensed font where practical, subset it, preload only critical weights and test for layout shift. Do not load several font families just for decoration.

### Type scale (fluid where appropriate)

| Token | Initial range / size | Use |
|---|---|---|
| `--text-xs` | 0.75rem | Metadata, labels |
| `--text-sm` | 0.875rem | Supporting information |
| `--text-base` | 1rem–1.0625rem | Body text |
| `--text-lg` | 1.125rem–1.25rem | Lead text |
| `--text-xl` | 1.375rem–1.5rem | Section lead |
| `--text-2xl` | 1.75rem–2.25rem | Section heading |
| `--text-3xl` | 2.25rem–3rem | Page heading |
| `--text-hero` | clamp(2.7rem, 7vw, 5.5rem) | Homepage display heading |

Body line-height: approximately 1.6–1.75. Headings: approximately 1.05–1.2. Maintain readable line lengths (roughly 60–75 characters for long-form prose where practical).

## 5. Layout and spacing

### Container widths

- Main content: `min(100% - 2rem, 72rem)`.
- Long-form reading column: `min(100% - 2rem, 46rem)`.
- Wide project/diagram area: up to `78rem` only when content benefits.
- Header/footer align to the main container.

### Spacing scale

Use a consistent 4px base scale:

`4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128` pixels.

Use larger gaps between sections than within components. Avoid arbitrary one-off spacing unless a clear visual reason exists.

### Grid

- Desktop: 12-column conceptual grid; do not over-grid simple text pages.
- Tablet: 6-column or two-column content arrangements.
- Mobile: single-column flow.
- Cards may use 2–3 columns on desktop depending on content density; never force a three-column grid on narrow displays.

## 6. Borders, surfaces and shadows

- Prefer 1px subtle borders and tonal surface differences.
- Use small corner radii for technical panels and moderate radii for feature cards.
- Avoid excessive glassmorphism, glowing borders and gradients.
- Use shadows sparingly and only to clarify elevation.
- Keep code, figure and diagram containers visually distinct from prose.

## 7. Component inventory

### Global components
- `SiteHeader`
- `DesktopNavigation`
- `MobileNavigation`
- `ThemeToggle`
- `SiteFooter`
- `PageHeader`
- `Breadcrumbs`
- `MetadataRow`
- `StatusBadge`
- `TagList`
- `ExternalLink`
- `CallToAction`

### Content components
- `ProjectCard`
- `ProjectStatus`
- `ProjectEvidenceList`
- `ProjectTimeline`
- `ContributionCard`
- `ContributionStatus`
- `ArticleCard`
- `ArticleMetadata`
- `ReferenceList`
- `RelatedContent`
- `NowSection`
- `RésuméDownload`

### Technical components
- `CodeBlock`
- `Figure`
- `DiagramFrame`
- `MeasurementTable`
- `ExperimentResult`
- `Callout`
- `TableOfContents` (only for longer articles)

Build only components required by real pages. Do not create a component library for hypothetical future content.

## 8. Imagery and diagrams

Priority order:
1. Actual project photographs, screenshots, plots and schematics owned by the user.
2. Original architecture and signal-flow diagrams.
3. Carefully selected licensed or attributable illustrations when they add information.
4. No generic stock photos used merely to fill space.

Image rules:
- Every project image should have context and an honest caption.
- Include meaningful alt text when the image conveys information.
- Decorative images should use empty alt text.
- Provide dimensions/aspect ratio to reduce layout shift.
- Prefer modern compressed formats such as AVIF/WebP where supported, with fallbacks as needed.
- Do not use AI-generated visuals to imply physical hardware or project results that do not exist.

## 9. Motion and interaction

Allowed:
- Small hover/focus transitions.
- Subtle page-section reveal only if content remains visible without animation.
- Theme transition that does not flash or delay initial rendering.
- Small interactive diagrams or technical controls when they teach something.

Avoid:
- Scroll hijacking.
- Auto-playing video/audio.
- Large parallax movement.
- Constant animated backgrounds.
- Cursor effects that replace normal pointer behaviour.
- Animation required to reveal essential information.

Respect `prefers-reduced-motion: reduce`. Ensure all interactive controls work with keyboard and touch.

## 10. Responsive behaviour

Breakpoints should be content-driven, initially around:
- Small: up to 640px.
- Medium: 641–900px.
- Large: 901px and above.

Do not design solely for specific device models. Test at narrow widths, zoomed text and landscape orientations.

Mobile requirements:
- Body text remains readable without horizontal scrolling.
- Navigation is reachable and operable.
- Cards stack naturally.
- Code blocks may scroll horizontally within their own container.
- Tables have a deliberate mobile treatment (scrollable region or reflowed layout).
- Touch targets are large enough for comfortable use.

## 11. Theme behaviour

- First visit: follow system preference.
- Theme control: explicit light/dark selection.
- Optional persistence: store only theme preference in local storage.
- Avoid a flash of the wrong theme; use a small, safe early theme initialization if needed.
- Default content contrast remains strong in both themes.

## 12. Visual acceptance criteria

- A first-time visitor can identify the owner and purpose quickly.
- The homepage has one clear focal point.
- Section spacing and type hierarchy are consistent.
- Project and article content remain readable at 320px width and desktop width.
- No horizontal overflow except deliberate code/table containers.
- Visible focus exists for every interactive element.
- Dark and light themes both meet tested contrast requirements.
- Motion can be reduced or disabled.
- No decorative effect obscures content or creates distracting layout shifts.
