// src/pages/DevlogPost.jsx
import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
//eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { devlogPosts } from '../data/devlogPosts'

export default function DevlogPost() {
  const { slug } = useParams()
  const post = devlogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Zxaviers Devlog`
    }
  }, [post])

  if (!post) {
    return <Navigate to="/devlog" replace />
  }

  return (
    <motion.section
      className="relative px-6 py-24 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 max-w-3xl p-4 mx-auto text-white shadow-xl md:p-10 bg-white/10 pixel-border-box">
        <Link
          to="/devlog"
          className="inline-block mb-6 text-sm text-cyan-400 font-pixel-title hover:text-white"
        >
          {'< Back to Devlog'}
        </Link>

        <p className="mb-1 text-xs text-gray-400 font-pixel-body">{post.date}</p>
        <h1 className="mb-6 text-2xl font-bold text-white md:text-3xl font-pixel-title">
          {post.title}
        </h1>

        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-8">
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

        <div className="space-y-4">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed text-white/90 font-pixel-body md:text-xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
