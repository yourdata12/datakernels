import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import OurStory from "@/components/our-story"
import CoreValues from "@/components/core-values"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <OurStory />
      <CoreValues />
      <Services />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
