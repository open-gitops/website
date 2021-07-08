const plugin = require("tailwindcss/plugin")

const toggler = plugin(function ({ addComponents, theme }) {
  const toggler = {
    ".burger-dark, .burger.open": {
      "&.burger .burger-lines, &.burger .burger-lines::before, &.burger .burger-lines::after":
        {
          backgroundColor: theme("colors.dark"),
        },
    },
  }

  addComponents(toggler)
})

module.exports = toggler
