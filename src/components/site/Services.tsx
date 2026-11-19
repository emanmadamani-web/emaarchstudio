import { useState } from 'react'
import { services } from '@/content/site'
import { cdn, cdnSrcSet } from '@/lib/image'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

export function Services() {
  const [active, setActive] = useState(services[0].id)

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative scroll-mt-20 bg-charcoal-950 py-28 sm:py-40"
    >
      <div className="mx-auto max-w-content px-5 sm:px-10">
        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Services</p>
            </Reveal>
            <Reveal delay={100}>
              <h2
                id="services-title"
                className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] font-light text-beige"
              >
                One studio.
                <br />
                <span className="text-beige-muted">Three disciplines.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="max-w-sm">
            <p className="leading-relaxed text-beige-muted">
              Design, permits and construction under one roof — so the home you
              imagine is the home that gets built.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Sticky image stage (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden">
                {services.map((s) => (
                  <img
                    key={s.id}
                    src={cdn(s.image, 900)}
                    srcSet={cdnSrcSet(s.image, [700, 1000, 1400])}
                    sizes="36vw"
                    alt={s.imageAlt}
                    loading="lazy"
                    aria-hidden={active !== s.id}
                    className={cn(
                      'absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none',
                      active === s.id
                        ? 'scale-100 opacity-100'
                        : 'scale-[1.06] opacity-0',
                    )}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 font-display text-7xl font-light text-beige/90">
                  {services.find((s) => s.id === active)?.numeral}
                </p>
              </div>
            </div>
          </div>

          {/* Discipline list */}
          <ol className="lg:col-span-7">
            {services.map((s, i) => {
              const isActive = active === s.id
              return (
                <Reveal
                  as="li"
                  key={s.id}
                  delay={i * 100}
                  id={`service-${s.id}`}
                  className="border-t border-border last:border-b"
                >
                  <article
                    tabIndex={0}
                    onMouseEnter={() => setActive(s.id)}
                    onFocus={() => setActive(s.id)}
                    aria-labelledby={`service-${s.id}-title`}
                    className="group py-12 outline-none focus-visible:bg-charcoal-850 sm:py-14"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span
                        className={cn(
                          'w-10 shrink-0 font-display text-lg transition-colors duration-500',
                          isActive ? 'text-gold' : 'text-stone',
                        )}
                      >
                        {s.numeral}
                      </span>
                      <div className="flex-1">
                        <h3
                          id={`service-${s.id}-title`}
                          className={cn(
                            'font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-none font-light tracking-[0.04em] uppercase transition-colors duration-500',
                            isActive ? 'text-beige' : 'text-beige/45',
                          )}
                        >
                          {s.title}
                        </h3>
                        <p
                          className={cn(
                            'mt-5 font-display text-xl italic transition-colors duration-500',
                            isActive ? 'text-gold-light' : 'text-beige-muted',
                          )}
                        >
                          {s.lead}
                        </p>

                        <img
                          src={cdn(s.image, 800)}
                          srcSet={cdnSrcSet(s.image, [500, 800, 1200])}
                          sizes="90vw"
                          alt={s.imageAlt}
                          loading="lazy"
                          className="mt-8 aspect-[4/3] w-full object-cover lg:hidden"
                        />

                        <p className="mt-6 max-w-lg leading-relaxed text-beige/70">
                          {s.body}
                        </p>
                        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                          {s.points.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-center gap-3 text-sm text-beige-muted"
                            >
                              <span
                                aria-hidden="true"
                                className={cn(
                                  'h-px transition-all duration-700',
                                  isActive ? 'w-6 bg-gold' : 'w-3 bg-stone',
                                )}
                              />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
