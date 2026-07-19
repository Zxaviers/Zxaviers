import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Projects from './Projects'

const projects = [
  {
    slug: 'real-project',
    title: 'Artifact 1',
    desc: 'Real Project',
    link: 'https://example.com/',
  },
  { title: 'Artifact 3', desc: 'Coming Soon...', comingSoon: true },
]

describe('Projects', () => {
  it('renders every project title and description', () => {
    render(
      <MemoryRouter>
        <Projects projects={projects} id="artifacts" />
      </MemoryRouter>
    )

    expect(screen.getByText('Artifact 1')).toBeInTheDocument()
    expect(screen.getByText('Real Project')).toBeInTheDocument()
    expect(screen.getByText('Artifact 3')).toBeInTheDocument()
    expect(screen.getByText('Coming Soon...')).toBeInTheDocument()
  })

  it('does not make a comingSoon card clickable', () => {
    render(
      <MemoryRouter>
        <Projects projects={projects} id="artifacts" />
      </MemoryRouter>
    )

    const comingSoonCard = screen.getByText('Artifact 3').closest('div')
    expect(comingSoonCard).not.toHaveClass('cursor-pointer')
  })

  it('links a real project card to its case study route', () => {
    render(
      <MemoryRouter>
        <Projects projects={projects} id="artifacts" />
      </MemoryRouter>
    )

    const link = screen.getByText('Artifact 1').closest('a')
    expect(link).toHaveAttribute('href', '/projects/real-project')
  })
})
