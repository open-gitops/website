const plugin = require("tailwindcss/plugin")

const typographyTheme = plugin(function ({ addBase, theme }) {
  const typography = {
    "h1, h2, h3, h4, h5, h6": {
      marginBottom: theme("margin.4"),
      fontFamily: theme("fontFamily.display"),
      fontWeight: theme("fontWeight.extrabold"),
    },

    h1: {
      fontSize: theme("fontSize.4xl"),
      lineHeight: theme("fontSize.4xl[1]"),

      "@screen md": {
        fontSize: theme("fontSize.5xl"),
        lineHeight: theme("fontSize.5xl[1]"),
      },

      "@screen lg": {
        fontSize: theme("fontSize.6xl"),
        lineHeight: theme("fontSize.6xl[1]"),
      },
    },

    h2: {
      fontSize: theme("fontSize.3xl"),
      lineHeight: theme("fontSize.3xl[1]"),

      "@screen md": {
        fontSize: theme("fontSize.4xl"),
        lineHeight: theme("fontSize.4xl[1]"),
      },

      "@screen lg": {
        fontSize: theme("fontSize.5xl"),
        lineHeight: theme("fontSize.5xl[1]"),
      },
    },

    h3: {
      fontSize: theme("fontSize.xl"),
      lineHeight: theme("fontSize.xl[1]"),
      "@screen md": {
        fontSize: theme("fontSize.2xl"),
        lineHeight: theme("fontSize.2xl[1]"),
      },
    },

    h4: {
      fontSize: theme("fontSize.lg"),
      lineHeight: theme("fontSize.lg[1]"),

      "@screen md": {
        fontSize: theme("fontSize.xl"),
        lineHeight: theme("fontSize.xl[1]"),
      },

      "@screen lg": {
        fontSize: theme("fontSize.2xl"),
        lineHeight: theme("fontSize.2xl[1]"),
      },
    },

    h5: {
      fontSize: theme("fontSize.base"),
      lineHeight: theme("fontSize.base[1]"),

      "@screen md": {
        fontSize: theme("fontSize.lg"),
        lineHeight: theme("fontSize.lg[1]"),
      },
    },

    h6: {
      fontSize: theme("fontSize.base"),
      lineHeight: theme("fontSize.base[1]"),

      "@screen md": {
        fontSize: theme("fontSize.lg"),
        lineHeight: theme("fontSize.lg[1]"),
      },
    },
  }

  addBase(typography)
})

module.exports = typographyTheme
