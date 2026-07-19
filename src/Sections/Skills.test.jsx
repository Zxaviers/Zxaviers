import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  it('shows a placeholder until a skill node is selected', () => {
    render(<Skills id="skill-tree" />)

    expect(screen.getByText('> SELECT SKILL')).toBeInTheDocument()
  })

  it('shows skill details after clicking a node', () => {
    render(<Skills id="skill-tree" />)

    fireEvent.click(screen.getByText('⚛️'))

    expect(screen.getByText('REACT')).toBeInTheDocument()
    expect(
      screen.getByText('Building reactive UIs for web applications.')
    ).toBeInTheDocument()
  })

  it('resets the selection when switching tabs', () => {
    render(<Skills id="skill-tree" />)

    fireEvent.click(screen.getByText('⚛️'))
    expect(screen.getByText('REACT')).toBeInTheDocument()

    fireEvent.click(screen.getByText('⚙️ IoT & Embedded'))

    expect(screen.getByText('> SELECT SKILL')).toBeInTheDocument()
    expect(screen.queryByText('REACT')).not.toBeInTheDocument()
  })
})
