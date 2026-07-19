// src/pages/NotFound.jsx
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Lost in Space | Zxaviers'
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center px-6 text-center min-h-[70vh]">
      <h1 className="mb-4 text-4xl text-cyan-400 font-pixel-title">404</h1>
      <p className="mb-8 text-lg text-white/80 font-pixel-body md:text-xl">
        This coordinate doesn't exist in this galaxy.
      </p>
      <Link
        to="/"
        className="relative inline-block px-6 py-3 transition-all font-pixel-title text-cyan-400 hover:text-white pixel-border-box pixel-hover-cyan"
        style={{
          '--pixel-border-color': '#22d3ee',
          '--pixel-bg-color': '#0F172A',
        }}
      >
        [ Return to Base ]
      </Link>
    </section>
  )
}
