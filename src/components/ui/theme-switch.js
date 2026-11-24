import * as React from "react"

// Light/dark toggle. gatsby-ssr.js sets the initial class on <html>; the
// choice is saved so it sticks between visits.
const ThemeSwitch = () => {
  const [dark, setDark] = React.useState(false)

  React.useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = !dark
    root.classList.add("theme-fade")
    root.classList.toggle("dark", next)
    setTimeout(() => root.classList.remove("theme-fade"), 300)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch (e) {
      // Storage can be blocked; the switch still works for this visit.
    }
    setDark(next)
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={toggle}
      className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full">
      <span
        aria-hidden="true"
        className="block w-11 h-6 p-0.5 rounded-full bg-[var(--sw-track)]">
        <span
          className={`flex items-center justify-center w-5 h-5 rounded-full bg-[var(--sw-knob)] text-[var(--sw-icon)] transition-transform duration-150 ${
            dark ? "translate-x-5" : ""
          }`}>
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M9 18h6" />
            <path d="M10 21h4" />
            <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1.3 1.6 1.5 2.5h5c.2-.9.7-1.7 1.5-2.5A6 6 0 0 0 12 3z" />
          </svg>
        </span>
      </span>
    </button>
  )
}

export default ThemeSwitch
