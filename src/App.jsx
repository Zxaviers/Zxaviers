// src/App.jsx
import SecretGame from './components/SecretGame'
import StarsBackground from './components/StarsBackground'
import Preloader from './components/Preloader'
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

// Aset Project
import preview1 from './assets/Preview1.png'
import preview2 from './assets/Preview2.png'
import logo from './assets/black.png'

// Aset Ikon Kontak
import githubPixel from './assets/github.png'
import linkedinPixel from './assets/linkedin.png'
import instagramPixel from './assets/Instagram.png'

/* ✅ MODIFIKASI ASET */
// 1. Aset BARU untuk Hero
import rocketSatu from './assets/rocketSatu.png' 
import planetMerah from './assets/planetMerah.png'

// 2. Aset GIF lama untuk dipindah ke About
import rocketGif from './assets/rocket_pixel.gif' 


const projects = [
  {
    title: 'Artifact 1',
    desc: 'PCB Custom Malang',
    preview: preview1,
    link: 'https://pcb-custom-malang.web.app/',
  },
  {
    title: 'Artifact 2',
    desc: 'Bootstrap  Portfolio',
    preview: preview2,
    link: 'https://zxaviers.github.io/Personal/',
  },
  {
    title: 'Artifact 3',
    desc: 'Coming Soon...',
    link: 'https://www.error.com/',
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
        // ✅ 3. Kirim aset BARU ke Hero
        assets={{ rocket: rocketSatu, planet: planetMerah }}
      />
      <About 
        id="agents" 
        rocketGif={rocketGif}
      />
      <Skills id="skill-tree" />
      <Experience id="mission-log"/>
      <Projects projects={projects} id="artifacts" />
      <SecretGame id="secret-level" />
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