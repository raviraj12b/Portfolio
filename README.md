# Rajesh Borkar — AI & Machine Learning Portfolio

A personalized React, TypeScript, and Vite portfolio based on the supplied design. Retains its large typography, orange-to-purple gradients, precision grid, animated wave, and floating hero cards.

## Run locally

Use Node.js 22.12+ (Node 22 LTS recommended for this project's Vite version).

```bash
npm ci
npm run dev
```

Open the local address printed by Vite. For a production build:

```bash
npm run build
npm run preview
```

`npm run build` includes TypeScript checking. Deploy the complete `dist/` folder; its `index.html` contains the bundled CSS/JavaScript and the other files supply screenshots, fonts, favicon, and resume. Keep those assets alongside the HTML. The build uses relative paths for static hosting under a subdirectory. No API key, backend, or paid model subscription is required for the portfolio itself.

## Edit content

- `src/data.ts`: identity, email, social URLs, six project descriptions, technologies, and project URLs.
- `src/components/Hero.tsx`: introduction and education/internship summary.
- `src/components/About.tsx` and `Experience.tsx`: education, skills, and internship history.
- `src/components/Projects.tsx`: project index, screenshots, workflow panels, and expandable notes.
- `src/components/Nav.tsx` and `Footer.tsx`: navigation, resume download, contact and copy-email controls.
- `src/components/WaveCanvas.tsx`: original interactive wave, with pause, visibility and reduced-motion support.
- `src/index.css`: original design tokens and responsive portfolio styles.
- `public/Rajesh_Borkar_Resume_2026.pdf`: existing corrected one-page resume, preserved unchanged.
- `public/images/`: existing project screenshots, preserved unchanged.
- `scripts/generate_resume.py`: optional ReportLab source for the PDF. Regenerating the PDF requires Python, ReportLab and the DejaVu fonts referenced in the script. This is not required to run the site.

## Content and evidence

The portfolio identifies Rajesh as a final-year AI & Data Science student, expected to graduate in May 2027. It preserves six projects in the approved order, exact previously supplied demo/repository URLs, and two completed internships:

- Codtech: 12 July–6 September 2026.
- TechGeekConnect: 22 December 2025–31 January 2026, following the certificate rather than the conflicting original resume date.

The template's fictional identity, eight-year experience, production model counts, traffic, accuracy, latency, hardware and unsubstantiated stack claims have been removed. No disputed Student Performance metrics are shown. The student screenshot is cropped to the input form using the existing portfolio crop. Other panels describe workflows or capabilities; they are not fabricated screenshots or measured charts.

Data Health Inspector has no repository link because none was provided. The existing portfolio project set is retained; no unfinished project is described as completed work.

## Accessibility and behavior

Includes a keyboard skip link, visible focus styles, semantic section navigation, mobile navigation with Escape/outside-click closing, native expandable project notes, real download/contact links, email-copy feedback, and a motion pause control. The wave pauses off-screen or when the page is hidden. Reduced-motion preferences disable decorative animations. The normal system cursor remains visible.

The requested font uses Google Fonts when available, with a bundled local font and system fallbacks. Clipboard access may be unavailable on insecure origins or denied by a visitor; the email link remains usable and failure feedback is shown.

## Validation and limits

Production compilation and strict TypeScript checking pass. The verification notes in `VALIDATION.md` describe the final checks and limits. The browser preview was blocked by the available browser environment, so visual layout and interaction behavior could not be verified in a browser during this update. The external project demos were not tested end to end; their previously supplied addresses are retained.
