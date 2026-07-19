import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

const renderNavbar = (initialPath = '/') =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Navbar logo="/logo.png" />
    </MemoryRouter>
  )

describe('Navbar', () => {
  it('renders the main navigation links', () => {
    renderNavbar()

    ;['Home', 'Agents', 'Skill Tree', 'Mission Log', 'Artifacts', 'Devlog'].forEach(
      (label) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
      }
    )
  })

  it('does not render a Contact link (moved into the page section)', () => {
    renderNavbar()

    expect(
      screen.queryByRole('link', { name: 'Contact' })
    ).not.toBeInTheDocument()
  })

  it('links Devlog to the /devlog route', () => {
    renderNavbar()

    expect(screen.getByRole('link', { name: 'Devlog' })).toHaveAttribute(
      'href',
      '/devlog'
    )
  })
})
