// src/Sections/Contact.jsx

import React from 'react'

const Contact = React.memo(({ id, icons }) => {
  return (
    <section
      id={id}
      className="relative px-6 py-20 text-center bg-gray-900/70 scroll-mt-24"
    >
      <h3 className="mb-6 text-2xl font-semibold font-pixel-title">
        Get in Touch
      </h3>
      <div className="flex justify-center gap-8 text-3xl">
        <a
          href="https://github.com/zxaviers"
          className="transition-opacity duration-300 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src={icons.github} alt="GitHub" className="w-10 h-10" />
        </a>
        <a
          href="https://linkedin.com/in/rizky-mardhani1st"
          className="transition-opacity duration-300 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src={icons.linkedin} alt="LinkedIn" className="w-10 h-10" />
        </a>
        <a
          href="https://instagram.com/sza.vy1st"
          className="transition-opacity duration-300 hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <img src={icons.instagram} alt="Instagram" className="w-10 h-10" />
        </a>
      </div>
    </section>
  )
})

export default Contact