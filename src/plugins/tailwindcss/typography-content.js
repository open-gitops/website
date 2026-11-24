const typographyContent = {
  typography: theme => ({
    DEFAULT: {
      css: {
        a: null,
        color: "var(--text)",
        "--tw-prose-bold": "var(--text)",
        "--tw-prose-counters": "var(--muted)",
        "--tw-prose-hr": "var(--line)",
        "--tw-prose-quote-borders": "var(--line-strong)",
        "--tw-prose-code": "var(--text)",
        "--tw-prose-th-borders": "var(--line-strong)",
        "--tw-prose-td-borders": "var(--line)",

        "a:not(.btn)": {
          color: "var(--link)",
          textUnderlineOffset: "3px",

          "&:hover": {
            color: "var(--link-hover)",
          },
        },

        "h1, h2, h3, h4, h5, h6": {
          fontWeight: theme("fontWeight.extrabold"),
          color: "var(--text)",
          letterSpacing: "-0.02em",
        },

        "--tw-prose-bullets": theme("colors.blue"),

        img: {
          borderRadius: theme("borderRadius.lg"),
        },

        blockquote: {
          borderColor: theme("colors.blue"),

          p: {
            color: "var(--text)",
          },

          cite: {
            fontSize: theme("fontSize.xs[0]"),
            color: "var(--muted)",
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
              fontWeight: theme("fontWeight.bold"),
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
                backgroundColor: "var(--bg)",
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
    lg: {
      css: {
        // keep list text where the pre-0.5 typography plugin put it
        "ul, ol": {
          paddingLeft: "1.25em",
        },

        h1: {
          fontSize: theme("fontSize.3xl[0]"),
          lineHeight: theme("fontSize.3xl[1]"),

          "@screen lg": {
            fontSize: theme("fontSize.4xl[0]"),
            lineHeight: theme("fontSize.4xl[1]"),
          },
        },
      },
    },
  }),
}

module.exports = typographyContent
