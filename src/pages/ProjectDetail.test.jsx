import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import ProjectDetail from './ProjectDetail'

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/" element={<div>HOME MARKER</div>} />
      </Routes>
    </MemoryRouter>
  )

describe('ProjectDetail', () => {
  it('renders the case study content for a known project', () => {
    renderAt('/projects/pcb-custom-malang')

    expect(screen.getByText('PCB Custom Malang')).toBeInTheDocument()
    expect(screen.getByText('> Problem')).toBeInTheDocument()
    expect(screen.getByText('> Solution')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: '[ Visit Live Site → ]' })
    ).toHaveAttribute('href', 'https://pcb-custom-malang.web.app/')
  })

  it('redirects to home for an unknown slug', () => {
    renderAt('/projects/does-not-exist')

    expect(screen.getByText('HOME MARKER')).toBeInTheDocument()
  })

  it('redirects to home for the comingSoon project (no case study yet)', () => {
    renderAt('/projects/artifact-3')

    expect(screen.getByText('HOME MARKER')).toBeInTheDocument()
  })
})
