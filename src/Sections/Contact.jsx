// src/Sections/Contact.jsx
import React from 'react'
//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Contact = React.memo(({ id, icons }) => {
  return (
    <motion.section
      id={id}
      className="relative px-6 py-20 text-center bg-gray-900/70 scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="mb-6 text-2xl font-semibold font-pixel-title">
        Get in Touch
      </h3>

      <a
        href="/CV-Rizky-Mardhani.pdf"
        download
        className="relative inline-block px-6 py-3 mt-4 transition-all font-pixel-title text-cyan-400 hover:text-white pixel-border-box pixel-hover-cyan"
        style={{
          '--pixel-border-color': '#22d3ee',
          '--pixel-bg-color': '#0F172A',
        }}
      >
        [ Download CV ]
      </a>

      <div className="flex justify-center gap-8 mt-12 text-3xl">
        <a
          href="https://github.com/zxaviers"
          className="transition-opacity duration-300 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src={icons.github} alt="GitHub" loading="lazy" className="w-10 h-10" />
        </a>
        <a
          href="https://linkedin.com/in/rizky-mardhani1st"
          className="transition-opacity duration-300 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src={icons.linkedin} alt="LinkedIn" loading="lazy" className="w-10 h-10" />
        </a>
        <a
          href="https://instagram.com/sza.vy1st"
          className="transition-opacity duration-300 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <img src={icons.instagram} alt="Instagram" loading="lazy" className="w-10 h-10" />
        </a>
      </div>
      {/* --- AKHIR BAGIAN YANG HILANG --- */}
    </motion.section>
  )
})

export default Contact