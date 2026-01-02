// src/components/SmoothScroll/SmoothScroll.jsx
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

const SmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // RAF function
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    
    rafId = requestAnimationFrame(raf)

    // Cleanup
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null // This component doesn't render anything
}

// ADD THIS LINE - Export as default
export default SmoothScroll