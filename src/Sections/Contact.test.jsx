import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

const icons = {
  github: '/github.png',
  linkedin: '/linkedin.png',
  instagram: '/instagram.png',
}

describe('Contact', () => {
  it('renders the Download CV link with a valid href', () => {
    render(<Contact id="contact" icons={icons} />)

    const cvLink = screen.getByRole('link', { name: '[ Download CV ]' })
    expect(cvLink).toHaveAttribute('href', '/CV-Rizky-Mardhani.pdf')
    expect(cvLink).toHaveAttribute('download')
  })

  it('renders social links but no contact form', () => {
    render(<Contact id="contact" icons={icons} />)

    expect(screen.getByRole('link', { name: 'GitHub Profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn Profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram Profile' })).toBeInTheDocument()

    expect(document.querySelector('form')).not.toBeInTheDocument()
  })
})
