const typographyContent = {
  typography: theme => ({
    DEFAULT: {
      css: {
        a: null,
        color: theme("colors.dark"),

        "a:not(.btn, .stargazers)": {
          color: theme("colors.purple"),
          textDecoration: "underline",
        },

        "h1, h2, h3, h4, h5, h6": {
          fontWeight: theme("fontWeight.extrabold"),
          color: theme("colors.dark"),
        },

        ul: {
          "> li::before": {
            backgroundColor: theme("colors.primary"),
          },
        },

        img: {
          borderRadius: theme("borderRadius.lg"),
        },
      },
    },
  }),
}

module.exports = typographyContent
