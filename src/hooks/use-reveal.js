import * as React from "react"

// Fades an element up as it scrolls into view. Returns a ref to attach.
const useReveal = () => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    const el = ref.current
    if (
      !el ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return
    el.classList.add("reveal")
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in")
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}

export default useReveal
