'use client'

import { useEffect, useState, useRef } from 'react'

export default function AuroraLampScene() {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrollLength = window.innerHeight * 2
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollLength)
      const value = scrolled / scrollLength

      setProgress(value)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const morning = Math.max(1 - progress * 2, 0)
  const sunset = Math.max(1 - Math.abs(progress * 2 - 1), 0)
  const night = Math.max(progress * 2 - 1, 0)

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img
          src="/Morning.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: morning }}
        />
        <img
          src="/Sunset.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: sunset }}
        />
        <img
          src="/Night.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: night }}
        />
      </div>
      <p className="absolute sticky top-20 bottom-2 text-center text-black dark:text-white text-md font-semibold w-full px-4">
            You press the button we change the atmosphere.
          </p>
    </section>
  )
}