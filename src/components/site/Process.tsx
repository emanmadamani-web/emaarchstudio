import { process } from '@/content/site'
import { cdn } from '@/lib/image'
import { Reveal } from './Reveal'

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-charcoal-950 py-28 sm:py-40"
    >
      <img
        src={cdn('drawings.png', 1600, 60)}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.13]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-950 via-charcoal-950/70 to-charcoal-950"
      />

      <div className="mx-auto max-w-content px-5 sm:px-10">
        <div className="mx-auto mb-24 max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow mb-6">The Journey</p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="process-title"
              className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] font-light text-beige"
            >
              Five steps from an idea
              <br />
              <em className="text-gold-light italic">to the keys in your hand.</em>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute top-[1.1rem] right-0 left-0 hidden md:block"
          >
            <Reveal className="hairline" />
          </div>
          <ol className="relative grid gap-14 md:grid-cols-5 md:gap-6">
          {process.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 140} className="relative">
              <div className="mb-8 flex items-center gap-4 md:block">
                <span className="relative z-10 grid size-9 place-items-center rounded-full border border-gold/60 bg-charcoal-950 font-display text-sm text-gold">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-3xl font-light text-beige">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-beige-muted md:pr-4">
                {step.text}
              </p>
            </Reveal>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
