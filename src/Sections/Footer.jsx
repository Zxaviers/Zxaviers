import React from 'react'

const Footer = React.memo(() => (
  <footer className="py-6 mt-0 text-sm text-center text-gray-400 border-t border-indigo-400/20">
    © {new Date().getFullYear()} Zxa | Built with React & Tailwind
  </footer>
))

export default Footer
