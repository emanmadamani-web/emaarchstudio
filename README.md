# EMA Architecture Studio

The website of **EMA Architecture Studio**, the studio of Eman Moadamani: *Quiet Luxury in Timber & Stone.* It's a dark, cinematic one-page site that presents the studio's three disciplines (Design, Permits & Compliance, Build), selected projects and the client journey, and ends with a **Start Your Project** inquiry form.

## Sections

- **Hero**: a large gold EMA wordmark over a twilight villa of glass and concrete, with the headline "From Building Permit to Dream Home" and the START YOUR PROJECT / VIEW PROJECTS calls to action.
- **The Practice**: the studio's philosophy and its founder, plus the Timber, Stone and Light principles.
- **Services**: interactive Design, Permits & Compliance and Build panels. The image changes as you hover over or focus each discipline.
- **Selected Projects**: two full-bleed features, a modern villa and a Scandinavian lakeside cabin at night.
- **The Journey**: a five-step timeline from first conversation to handover.
- **Start Your Project**: a validated inquiry form that submits to Netlify Forms.

## Technology

- [TanStack Start](https://tanstack.com/start) (React 19, Vite 8) deployed on Netlify
- Tailwind CSS 4, with theme tokens in `src/styles.css`
- Cormorant Garamond (display) and Jost (body) from Google Fonts
- Netlify Forms for project inquiries
- Netlify Image CDN, which resizes the architectural imagery and serves it as WebP

## Running locally

```bash
pnpm install
pnpm dev                 # Vite on http://localhost:3000
# or, with Netlify emulation (Image CDN, Forms):
netlify dev
```

Form submissions only reach the studio on a deployed Netlify site. Locally the form shows its error state.

## Editing content

All copy, services, projects, process steps and form options are in `src/content/site.ts`. Images are in `public/img/`. To replace a project, drop a new image there and update its entry.
