import { ArrowRight } from 'lucide-react'
import { cdn, cdnSrcSet } from '@/lib/image'
import { studio } from '@/content/site'
import { Logo } from './Logo'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* Cinematic plate */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={cdn('villa-hero.png', 1920)}
          srcSet={cdnSrcSet('villa-hero.png', [800, 1280, 1920, 2560])}
          sizes="100vw"
          alt=""
          fetchPriority="high"
          className="animate-ken-burns h-full w-full object-cover object-[68%_center]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(14_13_12/0.94)_0%,rgb(14_13_12/0.72)_38%,rgb(14_13_12/0.12)_72%,rgb(14_13_12/0.35)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-charcoal-950/70 to-transparent"
      />

      {/* Vertical architectural guide lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[8%] -z-10 hidden w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent lg:block"
      />

      <div className="mx-auto w-full max-w-content px-5 pt-36 pb-20 sm:px-10 sm:pb-28">
        <div className="max-w-3xl">
          {/* Big gold logo */}
          <div className="mb-10 sm:mb-14">
            <span
              aria-hidden="true"
              className="animate-draw mb-4 block h-px w-[min(26rem,78%)] bg-gradient-to-r from-gold via-gold-light to-transparent"
              style={{ animationDelay: '200ms' }}
            />
            <div
              className="animate-logo w-[clamp(15rem,52vw,26rem)]"
              style={{ animationDelay: '350ms' }}
            >
              <Logo
                priority
                sizes="(min-width: 640px) 416px, 60vw"
                className="w-full drop-shadow-[0_12px_32px_rgb(0_0_0/0.45)]"
              />
            </div>
          </div>

          <h1
            id="hero-title"
            className="animate-rise font-display text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[1.02] font-light text-beige"
            style={{ animationDelay: '1100ms' }}
          >
            From Building Permit
            <br />
            to <em className="text-gold-light italic">Dream Home</em>
          </h1>

          <div
            className="animate-rise mt-8 max-w-xl"
            style={{ animationDelay: '1350ms' }}
          >
            <p className="eyebrow mb-3">{studio.tagline}</p>
            <p className="text-base leading-relaxed text-beige/75 sm:text-lg">
              We design timeless homes that blend natural materials with modern
              architecture.
            </p>
          </div>

          <div
            className="animate-rise mt-11 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '1600ms' }}
          >
            <a href="#contact" className="btn-gold">
              Start your project
              <ArrowRight className="size-4" strokeWidth={1.25} aria-hidden="true" />
            </a>
            <a href="#projects" className="btn-ghost">
              View projects
            </a>
          </div>
        </div>

        {/* Caption + scroll cue */}
        <div
          className="animate-fade mt-20 flex items-end justify-between gap-6 border-t border-beige/10 pt-6"
          style={{ animationDelay: '2100ms' }}
        >
          <p className="text-[0.65rem] tracking-[0.3em] text-beige-muted uppercase">
            <span className="text-gold">Villa Kalksten</span>
            <span className="mx-3 text-beige/30">/</span>
            Concrete, glass &amp; oak
          </p>
          <a
            href="#practice"
            className="group hidden items-center gap-4 text-[0.65rem] tracking-[0.3em] text-beige-muted uppercase sm:flex"
          >
            Scroll
            <span className="relative block h-12 w-px overflow-hidden bg-beige/15">
              <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-gold" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
