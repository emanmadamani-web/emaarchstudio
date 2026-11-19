import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { projectTypes, stages, studio } from '@/content/site'
import { cdn } from '@/lib/image'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

type Status = 'idle' | 'pending' | 'success' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(data: FormData): Errors {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()
  if (name.length < 2) errors.name = 'Please tell us your name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (message.length < 10)
    errors.message = 'A few words about your project help us prepare.'
  return errors
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 text-xs tracking-wide text-destructive-foreground">
      {message}
    </p>
  )
}

export function ProjectInquiry() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'pending') return
    const form = event.currentTarget
    const data = new FormData(form)
    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    const body = new URLSearchParams()
    data.forEach((value, key) => body.append(key, String(value)))
    setStatus('pending')
    try {
      const response = await fetch('/project-inquiry.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      const unprocessed = /\bdata-netlify\s*=/i.test(await response.text())
      if (unprocessed) throw new Error('Form handling unavailable')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function onFieldChange(event: FormEvent<HTMLFormElement>) {
    if (status === 'error') setStatus('idle')
    const name = (event.target as HTMLInputElement).name as keyof Errors
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate scroll-mt-20 overflow-hidden py-28 sm:py-40"
    >
      <div className="mx-auto grid max-w-content gap-16 px-5 sm:px-10 lg:grid-cols-12 lg:gap-12">
        {/* Left: invitation */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">Start Your Project</p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="contact-title"
              className="font-display text-[clamp(2.6rem,5.4vw,4.8rem)] leading-[1] font-light text-beige"
            >
              Tell us about
              <br />
              <em className="text-gold-light italic">your dream home.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-md leading-relaxed text-beige/70">
              Whether you have a plot, a sketch or a permit waiting for
              approval, share a few lines. {studio.founder} personally reads
              every inquiry and replies within two working days.
            </p>
          </Reveal>

          <Reveal variant="mask" delay={250} className="relative mt-12 hidden lg:block">
            <img
              src={cdn('cabin-lake.png', 900)}
              alt="Timber cabin glowing beside a still lake at night"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-[30%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
          </Reveal>

          <Reveal delay={300} className="mt-10">
            <p className="text-[0.62rem] tracking-[0.32em] text-beige-muted uppercase">
              Or write directly
            </p>
            <a
              href={`mailto:${studio.email}`}
              className="mt-2 inline-block font-display text-2xl text-beige underline decoration-gold/40 underline-offset-8 transition-colors hover:text-gold-light hover:decoration-gold"
            >
              {studio.email}
            </a>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <div className="relative border border-border bg-charcoal-850/70 p-6 backdrop-blur-sm sm:p-12">
            <span
              aria-hidden="true"
              className="absolute -top-px left-10 h-px w-24 bg-gold"
            />

            {status === 'success' ? (
              <div role="status" className="py-16 text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-full border border-gold/60 text-gold">
                  <Check className="size-6" strokeWidth={1.25} aria-hidden="true" />
                </span>
                <h3 className="mt-8 font-display text-4xl font-light text-beige">
                  Thank you.
                </h3>
                <p className="mx-auto mt-4 max-w-sm leading-relaxed text-beige-muted">
                  Your inquiry has reached the studio. We will be in touch
                  within two working days to arrange a first conversation.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-10 text-[0.65rem] tracking-[0.32em] text-gold uppercase underline-offset-8 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                name="project-inquiry"
                method="POST"
                action="/project-inquiry.html"
                data-netlify="true"
                netlify-honeypot="bot-field"
                noValidate
                onSubmit={onSubmit}
                onChange={onFieldChange}
              >
                <input type="hidden" name="form-name" value="project-inquiry" />
                <input
                  type="hidden"
                  name="subject"
                  value="New project inquiry — EMA Architecture Studio"
                />
                <p hidden>
                  <label>
                    Leave this empty
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <fieldset disabled={status === 'pending'} className="space-y-9">
                  <legend className="sr-only">Project inquiry</legend>

                  <div className="grid gap-9 sm:grid-cols-2 sm:gap-8">
                    <div>
                      <label htmlFor="pi-name" className="eyebrow !text-beige-muted">
                        Name *
                      </label>
                      <input
                        id="pi-name"
                        name="name"
                        autoComplete="name"
                        required
                        maxLength={100}
                        placeholder="Your full name"
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? 'pi-name-error' : undefined}
                        className="field"
                      />
                      <FieldError id="pi-name-error" message={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="pi-email" className="eyebrow !text-beige-muted">
                        Email *
                      </label>
                      <input
                        id="pi-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        placeholder="you@example.com"
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? 'pi-email-error' : undefined}
                        className="field"
                      />
                      <FieldError id="pi-email-error" message={errors.email} />
                    </div>
                    <div>
                      <label htmlFor="pi-phone" className="eyebrow !text-beige-muted">
                        Phone
                      </label>
                      <input
                        id="pi-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        maxLength={40}
                        placeholder="Optional"
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="pi-location" className="eyebrow !text-beige-muted">
                        Site location
                      </label>
                      <input
                        id="pi-location"
                        name="location"
                        maxLength={120}
                        placeholder="Town or region"
                        className="field"
                      />
                    </div>
                  </div>

                  <div role="radiogroup" aria-labelledby="pi-type-label">
                    <p id="pi-type-label" className="eyebrow mb-4 !text-beige-muted">
                      Project type
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {projectTypes.map((t, i) => (
                        <label key={t} className="cursor-pointer">
                          <input
                            type="radio"
                            name="project-type"
                            value={t}
                            defaultChecked={i === 0}
                            className="peer sr-only"
                          />
                          <span
                            className={cn(
                              'inline-block border border-border px-4 py-2.5 text-sm text-beige-muted transition-colors duration-300',
                              'peer-checked:border-gold peer-checked:bg-gold/10 peer-checked:text-gold-light',
                              'peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold',
                              'hover:border-beige/40 hover:text-beige',
                            )}
                          >
                            {t}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pi-stage" className="eyebrow !text-beige-muted">
                      Where are you today?
                    </label>
                    <select id="pi-stage" name="stage" defaultValue="" className="field">
                      <option value="">Select a stage</option>
                      {stages.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="pi-message" className="eyebrow !text-beige-muted">
                      Your project *
                    </label>
                    <textarea
                      id="pi-message"
                      name="message"
                      required
                      rows={4}
                      maxLength={3000}
                      placeholder="The plot, the view, the materials you love, how you want to live…"
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? 'pi-message-error' : undefined}
                      className="field resize-none"
                    />
                    <FieldError id="pi-message-error" message={errors.message} />
                  </div>

                  {status === 'error' && (
                    <p
                      role="alert"
                      className="border-l border-destructive pl-4 text-sm leading-relaxed text-destructive-foreground"
                    >
                      Your inquiry could not be sent just now. Your details are
                      still here — please try again, or write to{' '}
                      <a href={`mailto:${studio.email}`} className="underline">
                        {studio.email}
                      </a>
                      .
                    </p>
                  )}

                  <div className="flex flex-col-reverse items-start gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-beige-muted">* Required fields</p>
                    <button
                      type="submit"
                      className="btn-gold w-full disabled:opacity-60 sm:w-auto"
                    >
                      {status === 'pending' ? 'Sending…' : 'Send inquiry'}
                      {status !== 'pending' && (
                        <ArrowRight className="size-4" strokeWidth={1.25} aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </fieldset>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
