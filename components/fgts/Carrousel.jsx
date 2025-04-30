'use client'

import { useEffect, useRef } from 'react'
import EmblaCarousel from 'embla-carousel'

export function Carousel() {
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!viewportRef.current) return
    const embla = EmblaCarousel(viewportRef.current, { loop: true })

    return () => embla.destroy()
  }, [])

  return (
    <div className="overflow-hidden" ref={viewportRef}>
      <div className="flex transition-transform duration-300 ease-in-out">
        <div className="min-w-full flex items-center justify-center bg-blue-300 h-48">
          Slide 1
        </div>
        <div className="min-w-full flex items-center justify-center bg-blue-500 h-48">
          Slide 2
        </div>
        <div className="min-w-full flex items-center justify-center bg-blue-700 text-white h-48">
          Slide 3
        </div>
      </div>
    </div>
  )
}
