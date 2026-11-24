const plugin = require("tailwindcss/plugin")

const globalStyles = plugin(function ({ addBase, theme }) {
  const styles = {
    body: {
      color: "var(--text)",
      backgroundColor: "var(--bg)",
      minHeight: "100vh",
      fontSize: "17px",
      lineHeight: 1.6,
    },

    a: {
      transitionProperty: theme("transitionProperty.colors"),
      transitionDuration: theme("transitionDuration.150"),
    },

    "a, button, input, [tabindex]": {
      "&:focus-visible": {
        outline: "3px solid var(--focus)",
        outlineOffset: "2px",
      },
    },

    "::selection": {
      backgroundColor: theme("colors.accent"),
      color: theme("colors.dark"),
    },
  }

  addBase(styles)
})

module.exports = globalStyles
