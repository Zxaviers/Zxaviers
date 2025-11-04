import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0

    // ⭐ Stars (twinkling)
    let stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: 0.5 + Math.random() * 1.5,
      twinkle: Math.random() * Math.PI * 2,
    }))

    // ☄️ Comets
    const cometCount = 1 + Math.floor(Math.random() * 2)
    let comets = Array.from({ length: cometCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: 80 + Math.random() * 100,
      speed: 3 + Math.random() * 2,
    }))

    function animate() {
      time += 0.02
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // ⭐ Stars
      stars.forEach((star) => {
        const twinkleOpacity = 0.6 + 0.4 * Math.sin(time + star.twinkle)
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${twinkleOpacity})`
        ctx.fill()
        star.y -= star.speed
        if (star.y < 0) {
          star.y = canvas.height
          star.x = Math.random() * canvas.width
        }
      })

      // ☄️ Comets
      comets.forEach((m) => {
        ctx.beginPath()
        const grad = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - m.length,
          m.y - m.length
        )
        grad.addColorStop(0, 'rgba(255,255,180,1)')
        grad.addColorStop(1, 'transparent')
        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(m.x - m.length, m.y - m.length)
        ctx.stroke()

        m.x += m.speed
        m.y += m.speed
        if (m.x > canvas.width || m.y > canvas.height) {
          m.x = Math.random() * canvas.width * 0.5
          m.y = -50
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}
