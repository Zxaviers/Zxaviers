// src/Sections/Navbar.jsx

import React, { useState, useEffect } from 'react'

const Navbar = React.memo(({ logo }) => {
  const [active, setActive] = useState('home')
  const [isOpen, setIsOpen] = useState(false) 
  const menuItems = ['Home', 'About', 'Skills','Experience', 'Projects', 'Contact']

  const smoothScrollTo = (targetY, duration = 1000) => {
    const startY = window.scrollY
    const distance = targetY - startY
    let startTime = null

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = currentTime - startTime
      const percent = Math.min(progress / duration, 1)
      const ease =
        percent < 0.5
          ? 4 * percent * percent * percent
          : 1 - Math.pow(-2 * percent + 2, 3) / 2
      window.scrollTo(0, startY + distance * ease)
      if (percent < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80
      const targetY =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset
      smoothScrollTo(targetY, 1000)
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b bg-black/90 border-white/10">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-15 h-15" />
        <h1 className="text-2xl font-extrabold font-pixel-title">Zxaviers</h1> 
      </div>

      <button
        className="text-3xl leading-none md:hidden text-indigo-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <ul
        className={`
        absolute z-40 w-full left-0 right-0 top-full 
        bg-black/90 flex-col p-4 
        transition-all duration-300 ease-in-out
        overflow-hidden
        
        md:flex md:items-center md:gap-6 md:text-sm md:font-medium 
        md:static md:w-auto md:flex-row md:bg-transparent md:p-0
        
        ${
          isOpen
            ? 'max-h-[300px] opacity-100'
            : 'max-h-0 opacity-0 md:max-h-none md:opacity-100 md:static'
        } 
      `}
      >
        {menuItems.map((item) => (
          <li key={item} className="relative py-2 group md:py-0">
            <button
              onClick={() => {
                handleScroll(item.toLowerCase())
                setIsOpen(false)
              }}
              className={`px-3 py-2 transition-all duration-300 rounded-md ${
                active === item.toLowerCase()
                  ? 'text-cyan-500 font-pixel-title'
                  : 'text-white/80 font-pixel-title'
              } group-hover:text-white`}
            >
              {item}
            </button>

            {/* ✅ MODIFIED: Highlight solid pixel art hover */}
            <span className="absolute inset-0 transition-all duration-300 rounded-lg pointer-events-none group-hover:bg-indigo-400/20"></span>
          </li>
        ))}
      </ul>
    </nav>
  )
})

export default Navbar