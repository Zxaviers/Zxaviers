// src/Sections/Contact.jsx
import React, { useState } from 'react' // Import useState
//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Contact = React.memo(({ id, icons }) => {
  // ✅ State untuk mengelola status form
  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: false,
  })

  // ✅ Fungsi Handle Submit Baru
  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormState({ submitting: true, success: false, error: false })

    const form = event.target
    const data = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormState({ submitting: false, success: true, error: false })
        form.reset() // Kosongkan form setelah sukses
      } else {
        // Tangani error dari Formspree
        setFormState({ submitting: false, success: false, error: true })
      }
      //eslint-disable-next-line no-unused-vars
    } catch (error) {
      // Tangani error jaringan
      setFormState({ submitting: false, success: false, error: true })
    }
  }

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

      {/* ✅ NEW: Form Kontak */}
      <motion.div
        className="relative z-10 max-w-2xl p-4 mx-auto mt-10 bg-white/10 pixel-border-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative z-20 p-4 md:p-6">
          <h4 className="mb-6 text-xl text-left font-pixel-title text-cyan-400">
            {'> Send a Transmission'}
          </h4>
          
          {/* ✅ Terapkan handleSubmit BARU ke form */}
          <form 
            action="https://formspree.io/f/YOUR_UNIQUE_ID" // ❗ JANGAN LUPA GANTI ID ANDA
            method="POST" 
            className="space-y-4"
            onSubmit={handleSubmit} // ⇐ TAMBAHKAN INI
          >
            {/* ✅ BAGIAN YANG HILANG (INPUTS) */}
            <div className="text-left">
              <label htmlFor="email" className="block mb-1 text-lg text-gray-300 font-pixel-body md:text-xl">
                Your Email:
              </label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="pixel-input" // Class CSS baru kita
                placeholder="commander@galaxy.com" 
                required 
              />
            </div>
            <div className="text-left">
              <label htmlFor="message" className="block mb-1 text-lg text-gray-300 font-pixel-body md:text-xl">
                Message:
              </label>
              <textarea 
                name="message" 
                id="message" 
                rows="4" 
                className="pixel-input" // Class CSS baru kita
                placeholder="Reporting new discovery..." 
                required
              ></textarea>
            </div>
            {/* --- AKHIR BAGIAN YANG HILANG --- */}

            <div>
              <button 
                type="submit" 
                className="w-full p-3 text-black transition-colors font-pixel-title bg-cyan-400 hover:bg-white disabled:bg-gray-500"
                disabled={formState.submitting} // ⇐ TAMBAHKAN INI
              >
                {/* ✅ Teks tombol dinamis */}
                {formState.submitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </div>
            
            {/* ✅ Tampilkan pesan status */}
            {formState.success && (
              <p className="mt-4 text-lg text-green-400 font-pixel-body md:text-xl">
                Transmission received. Talk soon!
              </p>
            )}
            {formState.error && (
              <p className="mt-4 text-lg text-red-400 font-pixel-body md:text-xl">
                Error in transmission. Please try again.
              </p>
            )}

          </form>
        </div>
      </motion.div>

      {/* ✅ BAGIAN YANG HILANG (IKON SOSMED) */}
      <div className="flex justify-center gap-8 mt-12 text-3xl">
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
      {/* --- AKHIR BAGIAN YANG HILANG --- */}
    </motion.section>
  )
})

export default Contact