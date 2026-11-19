import { nav, studio } from '@/content/site'
import { Logo } from './Logo'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-charcoal-950">
      <div className="mx-auto max-w-content px-5 pt-24 pb-10 sm:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo sizes="288px" className="w-[clamp(12rem,30vw,18rem)]" />
            <p className="mt-6 text-[0.65rem] tracking-[0.5em] text-beige-muted uppercase">
              by {studio.founder}
            </p>
            <p className="mt-8 max-w-sm font-display text-2xl leading-snug font-light text-beige/80 italic">
              {studio.tagline}.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-6">Explore</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-beige/75 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-beige/75 transition-colors hover:text-gold-light"
                >
                  Start your project
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-6">Studio</p>
            <a
              href={`mailto:${studio.email}`}
              className="text-beige/75 transition-colors hover:text-gold-light"
            >
              {studio.email}
            </a>
            <p className="mt-3 leading-relaxed text-beige-muted">
              Design · Permits &amp; Compliance · Build
            </p>
          </div>
        </div>
        <div className="hairline mt-20 mb-8" />
        <div className="flex flex-col justify-between gap-4 text-[0.62rem] tracking-[0.3em] text-beige-muted uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} {studio.name}</p>
          <p>Timeless homes in timber &amp; stone</p>
        </div>
      </div>
    </footer>
  )
}
