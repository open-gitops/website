const { backgroundColor } = require("tailwindcss/defaultTheme")

const typographyContent = {
  typography: theme => ({
    DEFAULT: {
      css: {
        a: null,
        color: theme("colors.dark"),

        "a:not(.btn, .stargazers)": {
          color: theme("colors.blue"),
          textDecoration: "none",
          borderBottomWidth: "2px",
          backgroundColor: "rgba(93,150,252,.1)",
          borderBottomColor: "rgba(93,150,252,.4)",

          "&:hover": {
            backgroundColor: "rgba(93,150,252,.2)",
            borderBottomColor: "rgba(93,150,252,.8)",
          },
        },

        "h1, h2, h3, h4, h5, h6": {
          fontWeight: theme("fontWeight.extrabold"),
          color: theme("colors.dark"),
        },

        ul: {
          "> li::before": {
            backgroundColor: theme("colors.blue"),
          },
        },

        img: {
          borderRadius: theme("borderRadius.lg"),
        },

        blockquote: {
          borderColor: theme("colors.blue"),

          p: {
            color: theme("colors.dark"),
          },

          cite: {
            fontSize: theme("fontSize.xs[0]"),
            color: theme("colors.gray"),
          },
        },

        table: {
          thead: {
            th: {
              paddingTop: theme("padding.3"),
              paddingLeft: theme("padding.4"),
              paddingBottom: theme("padding.3"),
              paddingRight: theme("padding.4"),
              textAlign: "center",
              verticalAlign: "middle",
              color: theme("colors.white"),
              backgroundColor: theme("colors.night"),

              "&:first-child": {
                paddingLeft: theme("padding.4"),
              },

              "&:last-child": {
                paddingRight: theme("padding.4"),
              },
            },
          },

          tbody: {
            tr: {
              "&:nth-child(even)": {
                backgroundColor: "#fafafa",
              },
            },

            td: {
              padding: theme("padding.4"),
              fontSize: theme("fontSize.sm[0]"),
              verticalAlign: "middle",

              "&:first-child": {
                paddingLeft: theme("padding.4"),
              },

              "&:last-child": {
                paddingRight: theme("padding.4"),
              },
            },
          },
        },
      },
    },
  }),
}

module.exports = typographyContent
