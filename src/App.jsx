import StarsBackground from './components/StarsBackground'
import Preloader from './components/preloader'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useMemo } from 'react'
import preview1 from './assets/Preview1.png'
import preview2 from './assets/Preview2.png'
import logo from './assets/black.png'
import githubPixel from './assets/github.png'
import linkedinPixel from './assets/linkedin.png'
import instagramPixel from './assets/Instagram.png'
/* ✅ NEW IMPORTS: Aset Dekoratif */
import rocketPixel from './assets/rocket_pixel.gif' 
import planetPixel from './assets/planet_pixel.png' 

const projects = [
  {
    title: 'Project 1',
    desc: 'PCB Custom Malang',
    preview: preview1,
    link: 'https://pcb-custom-malang.web.app/',
  },
  {
    title: 'Project 2',
    desc: 'Bootstrap  Portfolio',
    preview: preview2,
    link: 'https://zxaviers.github.io/Personal/',
  },
  {
    title: 'Project 3',
    desc: 'IoT Dashboard',
    link: 'https://zxaviers.github.io/project3/',
  },
]

export default function App() {
  const heroTypewriter = useMemo(
    () => (
      <Typewriter
        words={[
          'Computer Engineering Student',
          'Web Enthusiast',
          'IoT Learner',
          'AI Explorer',
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={2000}
      />
    ),
    []
  )

  return (
    <div className="relative flex flex-col min-h-screen text-white scroll-smooth">
      <Preloader />
      <StarsBackground />
      <Navbar logo={logo} />
      <Hero 
        heroTypewriter={heroTypewriter} 
        id="home" 
        assets={{ rocket: rocketPixel, planet: planetPixel }}
      />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience"/>
      <Projects projects={projects} id="projects" />
      <Contact
        id="contact"
        icons={{
          github: githubPixel,
          linkedin: linkedinPixel,
          instagram: instagramPixel,
        }}
      />
      <Footer />
    </div>
  )
}