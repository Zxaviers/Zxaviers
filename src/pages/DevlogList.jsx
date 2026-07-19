// src/pages/DevlogList.jsx
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { devlogPosts } from '../data/devlogPosts'

export default function DevlogList() {
  useEffect(() => {
    document.title = 'Devlog | Zxaviers'
  }, [])

  return (
    <motion.section
      className="relative px-6 py-24 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="mb-2 text-3xl font-bold text-center text-white md:text-4xl font-pixel-title">
          Devlog
        </h1>
        <p className="mb-12 text-lg text-center text-gray-400 font-pixel-body">
          Mission logs from the build — notes on what I'm learning and building.
        </p>

        <div className="space-y-6">
          {devlogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/devlog/${post.slug}`}
              className="block p-4 text-left transition-all bg-white/10 pixel-border-box pixel-border-hover md:p-6 hover:scale-[1.01]"
            >
              <p className="mb-1 text-xs text-gray-400 font-pixel-body">
                {post.date}
              </p>
              <h2 className="mb-2 text-xl text-cyan-400 font-pixel-title">
                {post.title}
              </h2>
              <p className="text-lg text-white/80 font-pixel-body md:text-xl">
                {post.excerpt}
              </p>
              {post.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-sm text-cyan-200 bg-cyan-700/50 font-pixel-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
