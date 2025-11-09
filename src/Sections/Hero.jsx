// src/Sections/Hero.jsx

import { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function Hero({ heroTypewriter, id, assets }) {
  const heroRef = useRef(null)
  
  return (
    <section
      ref={heroRef}
      id={id}
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center scroll-mt-24"
    >
      
      {/* ... (Aset roket & planet tidak berubah) ... */}
      {assets.rocket && (
        <div 
          alt="Pixel Rocket" 
          className="absolute z-2 pixel-asset animate-float-slow hero-rocket-asset" 
          style={{ 
            backgroundImage: `url(${assets.rocket})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }} 
        />
      )}
      {assets.planet && (
        <div 
          className="absolute z-2 animate-float-slow hero-planet-asset" 
        >
            <div
                alt="Pixel Planet" 
                className="w-full h-full pixel-asset" 
                style={{ 
                    backgroundImage: `url(${assets.planet})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }} 
            />
        </div>
      )}

      {/* Lapisan 3: Overlay gradient agar teks tetap kontras */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/90 z-1" />

      {/* Konten teks (Lapisan 4) */}
      <div className="relative z-10">
        <motion.h1
          className="relative mb-4 text-4xl font-extrabold tracking-wide md:text-6xl font-pixel-title"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            color: '#fff',
            textShadow: `
              2px 2px 0 #000,
              4px 4px 0 #111,
              6px 6px 0 #333,
              8px 8px 0 #555
            `,
          }}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm Zxa
        </motion.h1>

        {/* ✅ PERUBAHAN UKURAN FONT (Sekarang berfungsi)
          'text-3xl md:text-4xl' 
          Kelas 'font-pixel-body' di sini sekarang hanya mengatur font-family.
        */}
        <h2 className="text-3xl font-medium text-gray-300 md:text-4xl font-pixel-body">
          {heroTypewriter}
        </h2>
      </div>
    </section>
  )
}