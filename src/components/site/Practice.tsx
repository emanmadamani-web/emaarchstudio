import { cdn, cdnSrcSet } from '@/lib/image'
import { studio } from '@/content/site'
import { Reveal } from './Reveal'

const principles = [
  {
    title: 'Timber',
    text: 'Oak, spruce and pine — oiled, charred or left to silver. Warmth you can touch.',
  },
  {
    title: 'Stone',
    text: 'Travertine, limestone and split granite. Weight, permanence, calm.',
  },
  {
    title: 'Light',
    text: 'Glass placed with intent, so each room changes gently from dawn to night.',
  },
]

export function Practice() {
  return (
    <section
      id="practice"
      aria-labelledby="practice-title"
      className="relative scroll-mt-20 py-28 sm:py-40"
    >
      <div className="mx-auto grid max-w-content gap-16 px-5 sm:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pr-10">
          <Reveal>
            <p className="eyebrow mb-8">The Practice</p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="practice-title"
              className="font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.06] font-light text-beige"
            >
              Quiet luxury is not what a house shows —{' '}
              <em className="text-gold-light italic">
                it is what a house lets you feel.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="mt-10 max-w-reading space-y-6">
            <p className="text-lg leading-relaxed text-beige/75">
              EMA Architecture Studio is the practice of {studio.founder}. We
              design private homes, cabins and retreats in timber and stone —
              and we stay with you from the very first sketch, through the
              building permit, to the day you move in.
            </p>
            <p className="leading-relaxed text-beige-muted">
              One studio, one line of responsibility. No hand-offs between
              designer, permit consultant and builder — just a single, careful
              vision carried all the way to the finished home.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-12 flex items-center gap-5">
            <span className="h-px w-14 bg-gold" aria-hidden="true" />
            <div>
              <p className="font-display text-2xl italic text-beige">
                {studio.founder}
              </p>
              <p className="mt-1 text-[0.65rem] tracking-[0.3em] text-beige-muted uppercase">
                {studio.founderTitle}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5 lg:mt-24">
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-4 bottom-10 left-10 border border-gold/30 sm:-right-6"
          />
          <Reveal variant="mask" className="relative">
            <img
              src={cdn('material.png', 900)}
              srcSet={cdnSrcSet('material.png', [600, 900, 1300])}
              sizes="(min-width: 1024px) 34vw, 92vw"
              alt="Split natural stone meeting oiled oak timber and a thin brass reveal"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <p className="mt-4 text-right text-[0.62rem] tracking-[0.3em] text-beige-muted uppercase">
            Stone · Oak · Brass
          </p>
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-content px-5 sm:px-10">
        <div className="hairline mb-14" />
        <ul className="grid gap-12 sm:grid-cols-3 sm:gap-10">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 120}>
              <p className="font-display text-sm text-gold">0{i + 1}</p>
              <h3 className="mt-3 font-display text-3xl font-light text-beige">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-beige-muted">
                {p.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
