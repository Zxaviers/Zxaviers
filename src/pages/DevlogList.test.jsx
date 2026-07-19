import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import DevlogList from './DevlogList'
import { devlogPosts } from '../data/devlogPosts'

describe('DevlogList', () => {
  it('renders a link for every devlog post', () => {
    render(
      <MemoryRouter>
        <DevlogList />
      </MemoryRouter>
    )

    devlogPosts.forEach((post) => {
      const link = screen.getByRole('link', { name: new RegExp(post.title) })
      expect(link).toHaveAttribute('href', `/devlog/${post.slug}`)
    })
  })
})
