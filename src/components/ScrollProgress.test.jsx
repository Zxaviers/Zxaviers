import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import ScrollProgress from './ScrollProgress'

function setScrollState({ scrollY, scrollHeight, innerHeight }) {
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    configurable: true,
    value: scrollY,
  })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    writable: true,
    configurable: true,
    value: scrollHeight,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: innerHeight,
  })
}

async function flushRaf() {
  await act(async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve))
  })
}

describe('ScrollProgress', () => {
  afterEach(() => {
    setScrollState({ scrollY: 0, scrollHeight: 1000, innerHeight: 800 })
  })

  it('starts at 0% at the top of the page', async () => {
    setScrollState({ scrollY: 0, scrollHeight: 2000, innerHeight: 800 })
    render(<ScrollProgress />)
    await flushRaf()

    const bar = screen.getByRole('progressbar', { name: 'Mission progress' })
    expect(bar).toHaveAttribute('aria-valuenow', '0')
  })

  it('updates to the correct percentage when the user scrolls', async () => {
    // scrollable distance = 2000 - 800 = 1200; scrolled 600 => 50%
    setScrollState({ scrollY: 0, scrollHeight: 2000, innerHeight: 800 })
    render(<ScrollProgress />)
    await flushRaf()

    setScrollState({ scrollY: 600, scrollHeight: 2000, innerHeight: 800 })
    await act(async () => {
      window.dispatchEvent(new Event('scroll'))
      await new Promise((resolve) => requestAnimationFrame(resolve))
    })

    const bar = screen.getByRole('progressbar', { name: 'Mission progress' })
    expect(bar).toHaveAttribute('aria-valuenow', '50')
  })

  it('reaches 100% at the bottom of the page', async () => {
    setScrollState({ scrollY: 1200, scrollHeight: 2000, innerHeight: 800 })
    render(<ScrollProgress />)
    await flushRaf()

    const bar = screen.getByRole('progressbar', { name: 'Mission progress' })
    expect(bar).toHaveAttribute('aria-valuenow', '100')
  })
})
