const plugin = require("tailwindcss/plugin")

const toggler = plugin(function ({ addComponents }) {
  const toggler = {
    ".burger-dark, .burger.open": {
      "&.burger .burger-lines, &.burger .burger-lines::before, &.burger .burger-lines::after":
        {
          backgroundColor: "var(--text)",
        },
    },
  }

  addComponents(toggler)
})

module.exports = toggler
