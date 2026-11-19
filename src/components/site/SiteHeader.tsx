import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '@/content/site'
import { cn } from '@/lib/utils'
import { Logo } from './Logo'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-700 motion-reduce:transition-none',
        scrolled
          ? 'border-b border-border bg-charcoal-900/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-5 sm:px-10">
        <a
          href="#top"
          aria-label="EMA Architecture Studio — back to top"
          className="outline-offset-8"
        >
          <Logo
            alt=""
            priority
            sizes="96px"
            className="h-10 w-auto sm:h-11"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.68rem] tracking-[0.34em] text-beige/80 uppercase transition-colors hover:text-beige"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contact"
            className="border border-gold/60 px-5 py-3 text-[0.65rem] tracking-[0.34em] text-gold uppercase transition-colors duration-500 hover:bg-gold hover:text-charcoal-950"
          >
            Start your project
          </a>
        </nav>

        <button
          type="button"
          className="p-2 text-beige md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" strokeWidth={1} /> : <Menu className="size-6" strokeWidth={1} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 top-20 z-40 bg-charcoal-950/97 px-6 pt-12 backdrop-blur-lg md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-8">
          {[...nav, { href: '#contact', label: 'Start your project' }].map(
            (item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="animate-rise font-display text-4xl font-light text-beige"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
