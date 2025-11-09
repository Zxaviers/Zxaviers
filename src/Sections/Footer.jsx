// src/Sections/Footer.jsx

import React from 'react'
// ✅ 1. Impor aset planet biru
import planetIcon from '../assets/planetBiru.png' 

const Footer = React.memo(() => (
  // ✅ 2. Modifikasi footer
  <footer className="py-6 mt-0 text-sm text-center text-gray-400 border-t border-indigo-400/20">
    <div className="flex flex-col items-center justify-center gap-2">
      <img 
        src={planetIcon} 
        alt="pixel planet" 
        // ✅ 3. Gunakan pixel-asset dan buat ikon kecil
        className="w-8 h-8 pixel-asset" 
      />
      <p className="text-lg font-pixel-body md:text-xl">
        Made with ❤️ and stardust ✨
      </p>
      <p className="text-lg opacity-70 font-pixel-body md:text-xl">
        © {new Date().getFullYear()} Zxaviers | All rights reserved.
      </p>
    </div>
  </footer>
))

export default Footer