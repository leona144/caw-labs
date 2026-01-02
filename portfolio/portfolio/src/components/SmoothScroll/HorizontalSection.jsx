import { useRef, useEffect } from 'react'
import './SmoothScroll.css'

const HorizontalSection = () => {
  const sectionRef = useRef(null)
  const boxItemsRef = useRef([])

  useEffect(() => {
    // Dynamically import GSAP
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default || gsapModule
      
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        
        if (!sectionRef.current || boxItemsRef.current.length === 0) return

        // Get total width for horizontal scroll
        const totalWidth = boxItemsRef.current.reduce(
          (acc, item) => acc + item.offsetWidth + 50,
          0
        )

        // Create horizontal scroll animation
        const animation = gsap.to(boxItemsRef.current, {
          xPercent: -100 * (boxItemsRef.current.length - 1),
          ease: "sine.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 3,
            snap: 1 / (boxItemsRef.current.length - 1),
            end: () => `+=${totalWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
          }
        })

        // Refresh after a delay
        setTimeout(() => {
          ScrollTrigger.refresh()
        }, 500)

        return () => {
          animation.kill()
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === sectionRef.current) {
              trigger.kill()
            }
          })
        }
      })
    })
  }, [])

  // Function to add items to ref array
  const addToRefs = (el) => {
    if (el && !boxItemsRef.current.includes(el)) {
      boxItemsRef.current.push(el)
    }
  }

  const horizontalItems = [1, 2, 3, 4, 5]

  return (
    <section 
      id="horizontal" 
      ref={sectionRef} 
      className="horizontal-section"
      style={{ height: '100vh' }}
    >
      <div className="container">
        <div className="horizontal__content">
          {horizontalItems.map((num) => (
            <div
              key={num}
              className="horizontal__item"
              ref={addToRefs}
            >
              <div className="horizontal__num">{num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HorizontalSection