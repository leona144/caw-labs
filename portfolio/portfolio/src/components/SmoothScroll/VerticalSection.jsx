// src/components/SmoothScroll/VerticalSection.jsx
import { useRef, useEffect, useState } from 'react'
import './SmoothScroll.css'

const VerticalSection = () => {
  const sectionRef = useRef(null)
  const colLeftRef = useRef(null)
  const headingRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default || gsapModule
      
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        
        if (!sectionRef.current || !colLeftRef.current || !headingRef.current) return

        // Get the last item for timing
        const lastItem = document.querySelector('.vertical__item:last-child')
        if (!lastItem) return

        // Create timeline for vertical animation
        const timeline = gsap.timeline({ paused: true })
        
        // Move column down
        timeline.fromTo(
          colLeftRef.current,
          { y: 0 },
          { y: '170vh', duration: 1, ease: 'none' },
          0
        )
        
        // Fade out heading when near the end
        timeline.to(
          headingRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => setIsVisible(false)
          },
          0.7 // Start fading at 70% of timeline
        )

        // Create ScrollTrigger
        const scrollTrigger = ScrollTrigger.create({
          animation: timeline,
          trigger: sectionRef.current,
          start: 'top top',
          end: () => {
            // End when last item is 30% from bottom of viewport
            const lastItemRect = lastItem.getBoundingClientRect()
            return `bottom ${window.innerHeight - lastItemRect.bottom + lastItemRect.height * 0.3}px`
          },
          scrub: true,
          onUpdate: (self) => {
            // Optional: Hide heading when progress is high
            if (self.progress > 0.8 && isVisible) {
              setIsVisible(false)
            } else if (self.progress < 0.8 && !isVisible) {
              setIsVisible(true)
            }
          },
          markers: false, // Set to true for debugging
        })

        // Alternative: Separate ScrollTrigger for heading fade
        const headingTrigger = ScrollTrigger.create({
          trigger: lastItem,
          start: 'bottom 80%', // When last item's bottom is 80% from top
          end: 'bottom 30%',   // When last item's bottom is 30% from top
          scrub: true,
          onUpdate: (self) => {
            // Fade heading based on progress
            const opacity = 1 - self.progress
            if (headingRef.current) {
              headingRef.current.style.opacity = opacity
            }
            // Hide completely when progress is 1
            if (self.progress >= 1 && isVisible) {
              setIsVisible(false)
            }
          },
          markers: false,
        })

        // Refresh after a delay
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 500)

        return () => {
          scrollTrigger.kill()
          headingTrigger.kill()
          timeline.kill()
        }
      })
    })
  }, [isVisible])

  const verticalItems = [
     {
      title: "Smooth UX",
      description: "I implement silky-smooth scrolling for polished, professional websites."
    },
    {
      title: "Engaging Animations",
      description: "I add high-performance animations that make your site feel alive and modern."
    },
    {
      title: "Clean Code",
      description: "I build with React for fast, scalable, and easy-to-maintain applications."
    },
    {
      title: "Easy Integration",
      description: "My solutions integrate seamlessly into your existing project with minimal fuss."
    }
  ]

  return (
    <section 
      id="vertical" 
      ref={sectionRef} 
      className="vertical-section"
      style={{ height: '200vh' }}
    >
      <div className="container">
        <div className="vertical__content">
          <div className="col col_left" ref={colLeftRef}>
            <div 
              ref={headingRef}
              style={{ 
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease',
                width: '100%'
              }}
            >
              <h2 className="vertical__heading">
                <span>Why</span>
                <span>Work</span>
                <span>With Me</span>
              </h2>
              
              {/* Optional subtitle that fades earlier */}
              <p style={{
                marginTop: '20px',
                paddingLeft: '25px',
                color: '#ff98a2',
                fontSize: '14px',
                opacity: isVisible ? 0.7 : 0,
                transition: 'opacity 0.3s ease'
              }}>
                Scroll down...
              </p>
            </div>
          </div>
          <div className="col col_right">
            {verticalItems.map((item, index) => (
              <div 
                key={index} 
                className="vertical__item"
                data-index={index}
                style={{
                  opacity: index === verticalItems.length - 1 ? 1 : 1,
                  transition: 'opacity 0.5s ease'
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                
                {/* Show "Last item" indicator on the last one */}
                {index === verticalItems.length - 1 && (
                  <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    background: 'rgba(255, 152, 162, 0.1)',
                    borderLeft: '3px solid #ff98a2',
                    fontSize: '14px',
                    color: '#ff98a2'
                  }}>
                    ⬆︎ Keep scrolling to fade out the heading
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerticalSection