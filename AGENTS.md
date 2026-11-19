# AGENTS.md

Guide for AI agents and developers working on the EMA Architecture Studio site.

## What this is

A single-page, dark, luxury portfolio site for EMA Architecture Studio (founder: Eman Moadamani). It has one route (`/`) made of stacked sections, plus a Netlify Forms project inquiry form. It has no database, auth or API routes.

## Stack

TanStack Start (React 19, Vite 8, SSR on Netlify), Tailwind CSS 4, lucide-react icons, and Netlify Forms and the Netlify Image CDN. The shadcn/ui components in `src/components/ui/` are left over from the starter. The site itself uses its own styled components.

## Key directories

```
public/
  img/                    # Generated architectural imagery (large PNG originals)
  project-inquiry.html    # Static Netlify Forms registration (must mirror the React form fields)
  favicon.svg
src/
  content/site.ts         # ALL copy and data: studio info, nav, services, projects, process, form options
  lib/image.ts            # cdn()/cdnSrcSet() helpers → /.netlify/images URLs
  components/site/        # Page sections: SiteHeader, Hero, Practice, Services, Projects, Process, ProjectInquiry, SiteFooter
                          # plus Reveal (scroll-in animation) and Logo (the studio logo image, public/img/ema-logo.png — a transparent cut-out of the supplied artwork)
  routes/__root.tsx       # <head>: title, meta, fonts, favicon; <html class="dark">
  routes/index.tsx        # Composes the sections
  styles.css              # Theme tokens (charcoal/gold/beige), plus @layer components with
                          # buttons (.btn-gold/.btn-ghost), .eyebrow, .hairline, .field, .gold-text, grain, keyframes
```

## Conventions and decisions

- **Palette**: use the Tailwind colors generated from the tokens (`bg-charcoal-900/950`, `text-gold`, `text-gold-light`, `text-beige`, `text-beige-muted`, `text-stone`). Don't use pure black. The radius is 0 throughout to keep edges sharp and architectural.
- **Type**: headings use `font-display` (Cormorant Garamond, mostly weight 300, with italic emphasis in `text-gold-light`). Labels use the `.eyebrow` class (uppercase, wide tracking).
- **Images**: always reference them through `cdn()` or `cdnSrcSet()` from `src/lib/image.ts`, never `/img/*.png` directly. The originals are about 1.5 MB each.
- **Motion**: the hero uses CSS keyframe classes (`animate-rise`, `animate-letters`, `animate-ken-burns`…) with `animation-delay` for staggering. Below the fold, `<Reveal>` adds `.is-visible` through IntersectionObserver. All motion respects `prefers-reduced-motion`.
- **Custom CSS lives in `@layer components`** so Tailwind utilities can override it.
- **Forms**: `ProjectInquiry.tsx` POSTs URL-encoded data to `/project-inquiry.html`, not `/`, because the SSR catch-all would intercept `/`. If you add, rename or remove a field, update `public/project-inquiry.html` to match. Netlify Forms is enabled through the `.netlify/features/netlify-forms` marker.
- **Content**: project names, settings and figures in `src/content/site.ts` are illustrative and should be replaced with the studio's real portfolio. The studio email address is info@emaarchstudio.com.

## Possible next steps

- Individual project detail pages (`/projects/$slug`) with galleries
- Real portfolio photography and project data
- A multilingual version, if the studio works across markets
