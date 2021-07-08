const plugin = require("tailwindcss/plugin")

const utilities = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".clip-0": {
      clip: "rect(0, 0, 0, 0)",
    },

    ".clip-auto": {
      clip: "auto",
    },

    ".bg-clip-left": {
      "clip-path": "polygon(100% 0, 0 0, 0 100%)",
    },

    ".bg-clip-right": {
      "clip-path": "polygon(100% 0, 0 0, 100% 100%)",
    },

    ".animate-delay-100": {
      animationDelay: "1s",
    },

    ".animate-delay-150": {
      animationDelay: "1.5s",
    },

    ".animate-delay-200": {
      animationDelay: "2s",
    },

    ".animate-delay-250": {
      animationDelay: "2.5s",
    },
  }

  addUtilities(newUtilities, ["responsive", "hover"])
})

module.exports = utilities
