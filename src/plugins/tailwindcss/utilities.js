const plugin = require("tailwindcss/plugin")

const utilities = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".clip-0": {
      clip: "rect(0, 0, 0, 0)",
    },

    ".clip-auto": {
      clip: "auto",
    },
  }

  addUtilities(newUtilities, ["responsive", "hover"])
})

module.exports = utilities
