import * as React from "react"

const speed = 0.04 // px per ms, about 40px a second

// Continuously scrolls a track whose children are `count` items rendered
// twice, wrapping by one period so the loop is seamless. Pauses while the
// user hovers, focuses or touches it, and stays still for reduced motion.
const useCrawl = count => {
  const track = React.useRef(null)
  const resumeAt = React.useRef(0)

  React.useEffect(() => {
    const el = track.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return
    let pos = el.scrollLeft
    let last = performance.now()
    let frame
    const step = now => {
      const period = el.children[count].offsetLeft - el.children[0].offsetLeft
      if (now < resumeAt.current) {
        pos = el.scrollLeft
      } else {
        pos += (now - last) * speed
        if (pos >= period) pos -= period
        el.scrollLeft = Math.round(pos)
      }
      last = now
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [count])

  const pause = () => (resumeAt.current = Infinity)
  const resume = delay => (resumeAt.current = performance.now() + delay)

  // Jump one visible "page"; hold the crawl until the smooth scroll settles.
  const scroll = dir => {
    const el = track.current
    if (!el) return
    const period = el.children[count].offsetLeft - el.children[0].offsetLeft
    if (dir < 0 && el.scrollLeft < el.clientWidth) el.scrollLeft += period
    resume(1000)
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" })
  }

  return { track, scroll, pause, resume }
}

export default useCrawl
