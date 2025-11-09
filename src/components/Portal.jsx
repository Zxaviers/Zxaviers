// src/components/Portal.jsx

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function ProjectModal({ selectedProject, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // ✅ MODIFIED: Transisi yang lebih mulus
      transition={{ duration: 0.3 }}
    >
      {/* Klik luar modal untuk tutup */}
      <div
        className="absolute inset-0 bg-black/50" // ✅ MODIFIED: Warna overlay lebih gelap
        onClick={onClose}
      ></div>

      {/* Portal Effect Container (Handles Pixel Border) */}
      <motion.div
        // ✅ MODIFIED: Menghapus `overflow-hidden` dari sini
        className="relative z-10 w-11/12 max-w-4xl pixel-border-box" 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* ✅ NEW DIV: Inner Content Wrapper. Memastikan konten berada di atas border dan overflow terkontrol */}
        <div className="relative z-20 overflow-hidden"> 
            
            {/* Header */}
            {/* ✅ MODIFIED: Border/BG untuk konsistensi tema */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-400/50 bg-black/90">
              <h4 className="text-lg font-semibold text-cyan-300 font-pixel-title"> 
                {selectedProject.title}
              </h4>
              <button
                onClick={onClose}
                className="text-2xl leading-none text-white hover:text-red-500 font-pixel-title" 
              >
                [X]
              </button>
            </div>

            {/* Preview iframe */}
            <div className="relative bg-black aspect-video">
              <iframe
                // ✅ FIX KRITIS: Tambahkan `key` untuk memaksa iFrame me-remount saat proyek berubah.
                key={selectedProject.link} 
                src={selectedProject.link}
                title={selectedProject.title}
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

            {/* Footer: Open in New Tab Button */}
            {/* ✅ MODIFIED: Border/BG untuk konsistensi tema */}
            <div className="p-4 text-right border-t border-cyan-400/50 bg-black/90">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg transition-colors text-cyan-300 hover:text-blue-400 font-pixel-body md:text-xl" 
              >
                Open in New Tab →
              </a>
            </div>
        </div>
      </motion.div>
    </motion.div>
  )
}