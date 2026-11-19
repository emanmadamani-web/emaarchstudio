import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/content/site'
import { cdn, cdnSrcSet } from '@/lib/image'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

function Meta({ project }: { project: Project }) {
  const rows = [
    ['Type', project.kind],
    ['Setting', project.location],
    ['Completed', project.year],
    ['Area', project.area],
  ]
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-5">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt className="text-[0.6rem] tracking-[0.32em] text-beige-muted uppercase">
            {k}
          </dt>
          <dd className="mt-1.5 font-display text-lg text-beige">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

function ProjectFeature({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const flip = index % 2 === 1
  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className="relative"
    >
      <Reveal variant="mask" className="group relative overflow-hidden">
        <img
          src={cdn(project.image, 1920)}
          srcSet={cdnSrcSet(project.image, [800, 1280, 1920, 2560])}
          sizes="100vw"
          alt={project.imageAlt}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-[2400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04] motion-reduce:transition-none sm:aspect-[16/10] lg:aspect-[21/9]"
        />
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0',
            flip
              ? 'bg-gradient-to-l from-charcoal-950/80 via-charcoal-950/10 to-transparent'
              : 'bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/10 to-transparent',
          )}
        />
        <div
          className={cn(
            'absolute bottom-0 p-6 sm:p-12 lg:p-16',
            flip ? 'right-0 text-right' : 'left-0',
          )}
        >
          <p className="font-display text-sm text-gold">
            {String(index + 1).padStart(2, '0')} —{' '}
            <span className="tracking-[0.3em] uppercase">{project.kind}</span>
          </p>
          <h3
            id={`project-${project.slug}`}
            className="mt-3 font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] font-light text-beige"
          >
            {project.name}
          </h3>
          <p className="mt-4 text-[0.65rem] tracking-[0.3em] text-beige/70 uppercase">
            {project.materials}
          </p>
        </div>
      </Reveal>

      <div
        className={cn(
          'mx-auto mt-12 grid max-w-content gap-10 px-5 sm:px-10 lg:grid-cols-12',
        )}
      >
        <Reveal
          className={cn(
            'lg:col-span-5',
            flip ? 'lg:order-2 lg:col-start-8' : 'lg:col-start-2',
          )}
        >
          <p className="font-display text-2xl leading-snug font-light text-beige/85 sm:text-[1.7rem]">
            {project.description}
          </p>
        </Reveal>
        <Reveal
          delay={150}
          className={cn(
            'lg:col-span-4',
            flip ? 'lg:order-1 lg:col-start-2' : 'lg:col-start-8',
          )}
        >
          <Meta project={project} />
        </Reveal>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative scroll-mt-20 py-28 sm:py-40"
    >
      <div className="mx-auto mb-20 flex max-w-content flex-col justify-between gap-8 px-5 sm:px-10 md:flex-row md:items-end">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">Selected Projects</p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="projects-title"
              className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] font-light text-beige"
            >
              Homes that hold
              <br />
              <em className="text-gold-light italic">the landscape still.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[0.68rem] tracking-[0.32em] text-gold uppercase"
          >
            Commission a home
            <ArrowUpRight
              className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.25}
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>

      <div className="space-y-32 sm:space-y-44">
        {projects.map((p, i) => (
          <ProjectFeature key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
