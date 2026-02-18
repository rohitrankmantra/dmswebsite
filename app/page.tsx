import { Header } from "@/components/header"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { About } from "@/components/home/about"
import { Stats } from "@/components/home/stats"
import { Services } from "@/components/home/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Team } from "@/components/team"
import { Achievements } from "@/components/achievements"
import { Testimonials } from "@/components/testimonials"
import { AppsGrid } from "@/components/apps-grid"
import { Connect } from "@/components/connect"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Team />
      <Achievements />
      <Testimonials />
      <AppsGrid />
      <Connect />
      <CTA />
    </main>
  )
}
