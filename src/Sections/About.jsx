// src/Sections/About.jsx
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import planetPixel from '../assets/planet_pixel.png' 
// 'rocketGif' diterima sebagai prop dari App.jsx

// ✅ BARU: Impor ikon karakter Anda
import iconHq from '../assets/icon_hq.png' 
import iconZx from '../assets/icon_zx.png'

// Daftar dialog untuk fitur interaktif
const dialogueLines = [
  {
    speaker: "Headquarters",
    text: "Analyzing agent profile... Zxaviers. Status: Online.",
  },
  {
    speaker: "Zxaviers",
    text: "I’m a Computer Engineering student, passionate about the intersection of IoT systems and modern web development.",
  },
  {
    speaker: "Zxaviers",
    text: "My quest is to build efficient, responsive, and visually engaging digital experiences that merge technology and creativity.",
  },
  {
    speaker: "Headquarters",
    text: "Objective confirmed: Turn complex data streams into intuitive interfaces. Good luck, agent.",
  },
]

// ✅ BARU: Mapping speaker ke ikon yang diimpor
const speakerIcons = {
  "Headquarters": iconHq,
  "Zxaviers": iconZx,
};


export default function About({ rocketGif }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fungsi untuk berpindah ke dialog berikutnya
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dialogueLines.length)
  }

  const currentDialogue = dialogueLines[currentIndex]
  
  // Konfigurasi Planet (Top-Right)
  const PLANET_SIZE = '80px';
  const PLANET_POS_TOP = '10%'; 
  const PLANET_POS_RIGHT = '10%';
 
  
  return (
    <motion.section
      id="agents" // ID baru untuk 'gamifikasi'
      className="relative px-6 py-20 scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      
      {/* 🪐 Planet Kecil di Atas Kanan (Tetap ada) */}
      <div 
        // ✅ Sembunyikan di seluler, tampilkan di desktop (md:block)
        className="absolute hidden opacity-50 z-1 animate-float-slow md:block"
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
      <div className="relative z-10 p-4 mx-auto overflow-hidden text-white shadow-xl md:p-10 max-w-7xl bg-white/10 pixel-border-box scroll-smooth">
        
        {/* ✅ ROCKET GIF */}
        <div 
          alt="Pixel Rocket" 
          // ✅ Sembunyikan di seluler, tampilkan di desktop (md:block)
          className="absolute z-30 hidden pixel-asset md:block" 
          style={{ 
            backgroundImage: `url(${rocketGif})`,
            backgroundSize: '100% 100%',
            top: '10px', 
            left: '10px',  
            width: '100px', 
            height: '100px', 
            transform: 'rotate(5deg)',
          }} 
        />

        <div className="relative z-20"> 
          <motion.h2
            className="mb-8 text-3xl font-bold text-center text-white md:text-4xl font-pixel-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Agent Info
          </motion.h2>
          
          {/* ✅ KOTAK DIALOG INTERAKTIF */}
          <div className="max-w-3xl mx-auto">
            <div className="p-4 pixel-border-box" style={{ "--pixel-border-color": "#22d3ee", "--pixel-bg-color": "#0F172A" }}>
              
              {/* ✅ MODIFIKASI: Wrapper untuk Ikon dan Nama Speaker */}
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={speakerIcons[currentDialogue.speaker]} 
                  alt={currentDialogue.speaker}
                  className="w-12 h-12 pixel-asset" 
                />
                {/* ✅ PERBAIKAN: 
                  text-xl diubah menjadi text-base (mobile) dan md:text-xl (desktop) 
                */}
                <h3 className="text-base md:text-xl font-pixel-title text-cyan-400">
                  {`> ${currentDialogue.speaker}`}
                </h3>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex} 
                  /* ✅ PERBAIKAN: Menambahkan ukuran font default */
                  className="text-lg md:text-xl leading-relaxed text-white/90 font-pixel-body min-h-[100px]" 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentDialogue.text}
                </motion.p>
              </AnimatePresence>

              <div className="mt-6 text-right">
                
                {/* ✅ TOMBOL YANG SUDAH DIPERBARUI */}
                <button
                  onClick={handleNext}
                  className="relative p-2 px-4 transition-all font-pixel-title text-cyan-400 hover:text-white pixel-border-box pixel-hover-cyan"
                  style={{
                    "--pixel-border-color": "#22d3ee", 
                    "--pixel-bg-color": "#0F172A",     
                  }}
                >
                  {currentIndex === dialogueLines.length - 1 ? '[ REPLAY ]' : '[ NEXT > ]'}
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}