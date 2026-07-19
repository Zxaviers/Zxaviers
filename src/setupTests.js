import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// @testing-library/react hanya auto-cleanup antar test saat `globals: true`.
// Kita jalankan manual supaya DOM tidak menumpuk antar test dalam satu file.
afterEach(() => {
  cleanup()
})

// jsdom belum mengimplementasikan IntersectionObserver, dipakai oleh framer-motion
// (whileInView) dan Navbar untuk mendeteksi section aktif.
if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}

// jsdom belum mengimplementasikan matchMedia, dipakai StarsBackground untuk
// cek preferensi prefers-reduced-motion.
if (typeof window.matchMedia === 'undefined') {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}
