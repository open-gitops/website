const plugin = require("tailwindcss/plugin")

const globalStyles = plugin(function ({ addBase, theme }) {
  const styles = {
    "html, body": {
      "overflow-x": "hidden",
    },

    body: {
      color: theme("colors.dark"),
      backgroundImage: `linear-gradient(36deg, ${theme(
        "colors.purple"
      )}, ${theme("colors.purple")}, #aac9ff)`,
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },

    a: {
      transitionProperty: theme("transitionProperty.colors"),
      transitionTimingFunction: theme("transitionTimingFunction.linear"),
      transitionDuration: theme("transitionDuration.100"),

      "&:hover": {
        color: theme("colors.primary"),
      },
    },

    "a, button, input": {
      outline: "none",

      "&:focus": {
        outline: "none",
        boxShadow: "0 0 0 calc(3px) rgba(255, 249, 94, 0.5)",
      },
    },

    "::-moz-selection": {
      backgroundColor: theme("colors.primary"),
      color: theme("colors.dark"),
    },

    "::selection": {
      backgroundColor: theme("colors.primary"),
      color: theme("colors.dark"),
    },
  }

  addBase(styles)
})

module.exports = globalStyles
