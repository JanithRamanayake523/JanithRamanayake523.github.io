import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import News from '@/components/News'
import About from '@/components/About'
import Research from '@/components/Research'
import Publications from '@/components/Publications'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <News />
      <About />
      <Publications />
      <Research />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
