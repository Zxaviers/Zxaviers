import { describe, it, expect, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import SecretGame from './SecretGame'

function setViewportWidth(width) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
}

describe('SecretGame', () => {
  afterEach(() => {
    setViewportWidth(1024)
  })

  it('shows a desktop-only message on mobile viewports', () => {
    setViewportWidth(375)

    render(<SecretGame id="secret-level" />)

    expect(
      screen.getByText('This secret level can only be played on a desktop.')
    ).toBeInTheDocument()
  })

  it('falls back gracefully if the game engine fails to initialize (e.g. no WebGL support)', async () => {
    setViewportWidth(1400)

    render(<SecretGame id="secret-level" />)

    // jsdom has no real canvas/WebGL support, so kaboom() is expected to
    // throw — the component should catch it and show a fallback message
    // instead of crashing.
    expect(
      await screen.findByText(
        "This secret level couldn't load on your browser. Try a different one!"
      )
    ).toBeInTheDocument()
  })
})
