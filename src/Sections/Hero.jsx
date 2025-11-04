// src/Sections/Hero.jsx

import { useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function Hero({ heroTypewriter, id, assets }) {
  const heroRef = useRef(null)

  // ✅ NILAI MANUAL FINAL UNTUK ASET
  // --- ROCKET ---
  const ROCKET_POS_TOP = '30%';    
  const ROCKET_POS_LEFT = '20%';   
  const ROCKET_SIZE = '100px';      
  const ROCKET_ROTATE = '10deg';   

  // --- PLANET ---
  const PLANET_POS_BOTTOM = '20%'; 
  const PLANET_POS_RIGHT = '20%';  
  const PLANET_SIZE = '150px';      
  const PLANET_ROTATE = '-10deg';  

  return (
    <section
      ref={heroRef}
      id={id}
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center scroll-mt-24"
    >
      
      {/* 🚀 Rocket (Kiri Atas) */}
      {assets.rocket && (
        <div 
          alt="Pixel Rocket" 
          className="absolute z-[2] pixel-asset" 
          style={{ 
            backgroundImage: `url(${assets.rocket})`,
            backgroundSize: '100% 100%',
            top: ROCKET_POS_TOP, 
            left: ROCKET_POS_LEFT,
            width: ROCKET_SIZE, 
            height: ROCKET_SIZE, 
            transform: `rotate(${ROCKET_ROTATE})`,
          }} 
        />
      )}
      
      {/* 🪐 Planet Kecil (Kanan Bawah, Floating Slow) */}
      {assets.planet && (
        <div 
          className="absolute z-[2] animate-float-slow" 
          style={{ 
              bottom: PLANET_POS_BOTTOM,
              right: PLANET_POS_RIGHT,
          }}
        >
            <div
                alt="Pixel Planet" 
                className="pixel-asset" 
                style={{ 
                    backgroundImage: `url(${assets.planet})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: PLANET_SIZE,
                    height: PLANET_SIZE,
                    transform: `rotate(${PLANET_ROTATE})`,
                }} 
            />
        </div>
      )}

      {/* Lapisan 3: Overlay gradient agar teks tetap kontras */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 z-[1]" />

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

        <h2 className="text-2xl font-medium text-gray-300 md:text-3xl font-pixel-body">
          {heroTypewriter}
        </h2>
      </div>
    </section>
  )
}