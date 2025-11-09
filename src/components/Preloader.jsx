// src/components/Preloader.jsx

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

// Impor planet asset
import planetAsset from '../assets/planetUnik.png' 

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Kita buat durasi 1.5 detik
    const timer = setTimeout(() => setLoading(false), 1500) 
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-100" // Z-index tertinggi
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Transisi exit lebih cepat
        >
          {/* ✅ NEW: Wrapper untuk menumpuk planet dan teks */}
          <div className="flex flex-col items-center">
            
            {/* 1. Gambar Planet (Animasi sama seperti sebelumnya) */}
            <motion.img
              src={planetAsset}
              alt="Loading..."
              // Pastikan menggunakan class pixel-asset dari index.css
              className="w-24 h-24 pixel-asset" 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1.1, 1], // Efek "pulse" saat masuk
                rotate: 360, // Efek berputar
                opacity: 1
              }}
              transition={{
                // Buat putaran berulang selamanya (Infinity)
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.5 }
              }}
            />

            {/* 2. ✅ NEW: Teks Zxaviers di bawah planet */}
            <motion.h1
              // Menggunakan font-pixel-title dari index.css
              className="mt-6 text-3xl text-white font-pixel-title" 
              initial={{ opacity: 0 }}
              // Animasi pulse (berkedip pelan)
              animate={{ opacity: [0.5, 1, 0.5] }} 
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Zxaviers
            </motion.h1>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}