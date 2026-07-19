// src/pages/ProjectDetail.jsx
import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ${project.desc} | Zxaviers`
    }
  }, [project])

  // Slug tidak dikenal, atau proyek belum punya konten case study (mis. "Coming Soon")
  if (!project || project.comingSoon) {
    return <Navigate to="/" replace />
  }

  return (
    <motion.section
      className="relative px-6 py-24 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 max-w-4xl p-4 mx-auto text-white shadow-xl md:p-10 bg-white/10 pixel-border-box">
        <Link
          to="/#artifacts"
          className="inline-block mb-6 text-sm text-cyan-400 font-pixel-title hover:text-white"
        >
          {'< Back to Artifacts'}
        </Link>

        {project.preview && (
          <div className="w-full mb-8 overflow-hidden rounded-lg bg-black/20">
            <img
              src={project.preview}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        )}

        <h1 className="mb-2 text-2xl font-bold text-white md:text-3xl font-pixel-title">
          {project.desc}
        </h1>
        <p className="mb-8 text-sm text-gray-400 font-pixel-body">
          {project.title}
        </p>

        {project.techStack && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-sm text-cyan-200 bg-cyan-700/50 font-pixel-body"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-8">
          {project.problem && (
            <div>
              <h2 className="mb-2 text-lg text-cyan-400 font-pixel-title">
                {'> Problem'}
              </h2>
              <p className="text-lg leading-relaxed text-white/90 font-pixel-body md:text-xl">
                {project.problem}
              </p>
            </div>
          )}

          {project.solution && (
            <div>
              <h2 className="mb-2 text-lg text-cyan-400 font-pixel-title">
                {'> Solution'}
              </h2>
              <p className="text-lg leading-relaxed text-white/90 font-pixel-body md:text-xl">
                {project.solution}
              </p>
            </div>
          )}

          {project.learnings && (
            <div>
              <h2 className="mb-2 text-lg text-cyan-400 font-pixel-title">
                {'> Learnings'}
              </h2>
              <p className="text-lg leading-relaxed text-white/90 font-pixel-body md:text-xl">
                {project.learnings}
              </p>
            </div>
          )}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 mt-10 transition-all font-pixel-title text-cyan-400 hover:text-white pixel-border-box pixel-hover-cyan"
            style={{
              '--pixel-border-color': '#22d3ee',
              '--pixel-bg-color': '#0F172A',
            }}
          >
            [ Visit Live Site → ]
          </a>
        )}
      </div>
    </motion.section>
  )
}
