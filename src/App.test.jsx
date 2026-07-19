import { describe, it, expect, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  afterEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('renders the home page at "/"', () => {
    window.history.pushState({}, '', '/')
    render(<App />)

    expect(screen.getByText("Hello, I'm Zxa")).toBeInTheDocument()
  })

  it('renders a 404 page for an unknown route', () => {
    window.history.pushState({}, '', '/this-route-does-not-exist')
    render(<App />)

    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
