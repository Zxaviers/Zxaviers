// src/Sections/About.jsx

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
// ✅ NEW IMPORT: Import asset planet
import planetPixel from '../assets/planet_pixel.png' 

export default function About({ id }) {
  // ✅ NEW: Konfigurasi Planet
  const PLANET_SIZE = '80px';
  const PLANET_POS_TOP = '10%'; 
  const PLANET_POS_RIGHT = '10%';
  
  return (
    <motion.section
      id={id}
      className="relative px-6 py-20 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
      {/* 🪐 NEW: Planet Kecil di Atas Kanan */}
      <div 
        className="absolute z-[1] animate-float-slow opacity-50 hidden md:block" // Hidden di mobile, opacity rendah
        style={{ 
            top: PLANET_POS_TOP,
            right: PLANET_POS_RIGHT,
        }}
      >
          <div
              alt="Pixel Planet" 
              className="pixel-asset" 
              style={{ 
                  backgroundImage: `url(${planetPixel})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  width: PLANET_SIZE,
                  height: PLANET_SIZE,
                  transform: `rotate(10deg)`,
              }} 
          />
      </div>


      {/* 🟦 Container utama */}
      <div className="relative z-10 p-4 mx-auto overflow-hidden text-white shadow-xl md:p-10 max-w-7xl bg-white/10 pixel-border-box  scroll-smooth">
        
        <div className="relative z-20"> 
          {' '}
          <motion.h2
            className="mb-8 text-3xl font-bold text-center text-white md:text-4xl font-pixel-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          {/* ✅ NEW: Menggunakan grid 2 kolom di desktop */}
          <div className="grid md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
            {/* Kolom Kiri: Narasi/Visi */}
            <motion.div
              className="mb-8 md:mb-0 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
                <h3 className="text-xl font-pixel-title text-cyan-400 mb-2">My Quest</h3>
                <p className="text-lg leading-relaxed text-white/90 font-pixel-body">
                    I’m a Computer Engineering student passionate about the
                    intersection of **IoT systems** and modern **web development**. I enjoy creating connected solutions that bridge
                    hardware and software — from embedded devices to sleek,
                    interactive dashboards.
                </p>
            </motion.div>

            {/* Kolom Kanan: Fokus/Misi */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
                <h3 className="text-xl font-pixel-title text-cyan-400 mb-2">Primary Objective</h3>
                <p className="text-lg leading-relaxed text-white/90 font-pixel-body">
                    My focus is on building efficient,
                    responsive, and visually engaging digital experiences that merge
                    technology and creativity. I aim to turn complex data streams into intuitive interfaces, whether for an industrial IoT rig or a high-performance web app.
                </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}