import { Header } from "@/components/header"
import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { About } from "@/components/home/about"
import { Stats } from "@/components/home/stats"
import { Services } from "@/components/home/services"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Team } from "@/components/home/team"
import { Achievements } from "@/components/home/achievements"
import { Testimonials } from "@/components/home/testimonials"
import { AppsGrid } from "@/components/home/apps-grid"
import { Connect } from "@/components/home/connect"
import { CTA } from "@/components/home/cta"
import { Footer } from "@/components/footer"
import LogoMarquee from "@/components/home/LogoMarquee"

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <Hero />
      <Features />
      <About />
      <AppsGrid />
      <Services />
      <WhyChooseUs />
      <Achievements />
      <Team />
      <Testimonials />
      <LogoMarquee />
      <Connect />
      <CTA />
    </main>
  )
}
