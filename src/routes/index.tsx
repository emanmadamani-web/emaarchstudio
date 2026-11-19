import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/site/SiteHeader'
import { Hero } from '@/components/site/Hero'
import { Practice } from '@/components/site/Practice'
import { Services } from '@/components/site/Services'
import { Projects } from '@/components/site/Projects'
import { Process } from '@/components/site/Process'
import { ProjectInquiry } from '@/components/site/ProjectInquiry'
import { SiteFooter } from '@/components/site/SiteFooter'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="grain relative min-h-screen overflow-x-clip bg-background text-foreground">
      <a
        href="#main"
        className="sr-only z-[70] bg-gold px-4 py-2 text-charcoal-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Practice />
        <Services />
        <Projects />
        <Process />
        <ProjectInquiry />
      </main>
      <SiteFooter />
    </div>
  )
}
