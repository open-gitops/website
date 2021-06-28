const plugin = require("tailwindcss/plugin")

const globalStyles = plugin(function ({ addBase, theme }) {
  const styles = {
    body: {
      color: theme("colors.dark"),
      minHeight: "100vh",
      backgroundImage: `linear-gradient(36deg, ${theme("colors.blue")}, ${theme(
        "colors.blue"
      )}, #6E9EF4)`,
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },

    a: {
      transitionProperty: theme("transitionProperty.colors"),
      transitionTimingFunction: theme("transitionTimingFunction.linear"),
      transitionDuration: theme("transitionDuration.100"),

      "&:hover": {
        color: theme("colors.accent"),
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
      backgroundColor: theme("colors.accent"),
      color: theme("colors.dark"),
    },

    "::selection": {
      backgroundColor: theme("colors.accent"),
      color: theme("colors.dark"),
    },
  }

  addBase(styles)
})

module.exports = globalStyles
