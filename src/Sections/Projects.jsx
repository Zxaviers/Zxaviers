// src/Sections/Projects.jsx

import { useState, lazy, Suspense } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const Portal = lazy(() => import('../components/Portal'))
export default function Projects({ projects, id }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    // ✅ MODIFIED: Padding disesuaikan agar pas di dalam Mega Container
    <motion.section
      id={id}
      className="relative px-0 py-12 text-center scroll-mt-24" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h3 className="mb-8 text-2xl font-semibold font-pixel-title">Projects</h3>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          // Kartu individu tetap memiliki border
          <motion.div
            key={i}
            className="relative flex flex-col items-center p-6 overflow-hidden text-center transition-all duration-300 transform cursor-pointer bg-white/10 pixel-border-box pixel-border-hover hover:scale-105"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedProject(p)}
          >
            
           
              {p.preview && (
                <div className="flex items-center justify-center w-full mb-4 overflow-hidden rounded-lg bg-black/20">
                  <img
                    src={p.preview}
                    alt={p.title}
                    className="h-auto max-w-full transition-transform duration-500 rounded-lg hover:scale-105"
                  />
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
                      className="px-2 py-1 text-xs font-medium text-cyan-200 bg-cyan-700/50 rounded-sm font-pixel-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

            
          </motion.div>
        ))}
      </div>
      {/* Portal */}
      <AnimatePresence>
        {selectedProject && (
          <Suspense fallback={null}>
            <Portal
              selectedProject={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </motion.section>
  )
}