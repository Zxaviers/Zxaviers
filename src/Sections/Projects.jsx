// src/Sections/Projects.jsx

import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function Projects({ projects, id }) {
  return (
    // ✅ MODIFIED: Padding disesuaikan agar pas di dalam Mega Container
    <motion.section
      id={id}
      className="relative px-0 py-12 overflow-hidden text-center scroll-mt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h3 className="mb-8 text-2xl font-semibold font-pixel-title">Discovered Artifacts</h3>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => {
          const cardClassName = `relative flex flex-col items-center p-6 overflow-hidden text-center transition-all duration-300 transform bg-white/10 pixel-border-box ${
            p.comingSoon
              ? 'opacity-50'
              : 'cursor-pointer pixel-border-hover hover:scale-105'
          }`

          const cardContent = (
            <>
              {p.preview && (
                <div className="flex items-center justify-center w-full mb-4 overflow-hidden rounded-lg bg-black/20">
                  <img
                    src={p.preview}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-auto max-w-full transition-transform duration-500 rounded-lg hover:scale-105"
                  />
                </div>
              )}

              {p.comingSoon && (
                <div className="flex items-center justify-center w-full py-6 mb-4 rounded-lg bg-black/20">
                  <svg viewBox="0 0 64 72" className="w-16 h-16" aria-hidden="true">
                    <rect x="16" y="0" width="32" height="8" fill="#22d3ee" />
                    <rect x="16" y="0" width="8" height="24" fill="#22d3ee" />
                    <rect x="40" y="0" width="8" height="24" fill="#22d3ee" />
                    <rect x="8" y="24" width="48" height="40" fill="#22d3ee" />
                    <rect x="12" y="28" width="40" height="32" fill="#0F172A" />
                    <rect x="28" y="38" width="8" height="8" fill="#22d3ee" />
                    <rect x="30" y="46" width="4" height="8" fill="#22d3ee" />
                  </svg>
                </div>
              )}

              <h4 className="mb-2 text-lg font-bold text-white font-pixel-title">
                {p.title}
              </h4>
              <p className="text-base text-gray-300 font-pixel-body">{p.desc}</p>

              {p.techStack && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-sm text-cyan-200 bg-cyan-700/50 font-pixel-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </>
          )

          if (p.comingSoon) {
            return (
              <motion.div key={i} className={cardClassName}>
                {cardContent}
              </motion.div>
            )
          }

          return (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
            >
              <Link to={`/projects/${p.slug}`} className={`block ${cardClassName}`}>
                {cardContent}
              </Link>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
