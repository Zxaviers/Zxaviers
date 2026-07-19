import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import DevlogPost from './DevlogPost'
import { devlogPosts } from '../data/devlogPosts'

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/devlog/:slug" element={<DevlogPost />} />
        <Route path="/devlog" element={<div>DEVLOG LIST MARKER</div>} />
      </Routes>
    </MemoryRouter>
  )

describe('DevlogPost', () => {
  it('renders the full post content for a known slug', () => {
    const post = devlogPosts[0]
    renderAt(`/devlog/${post.slug}`)

    expect(screen.getByText(post.title)).toBeInTheDocument()
    post.content.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    })
  })

  it('redirects to the devlog list for an unknown slug', () => {
    renderAt('/devlog/does-not-exist')

    expect(screen.getByText('DEVLOG LIST MARKER')).toBeInTheDocument()
  })
})
