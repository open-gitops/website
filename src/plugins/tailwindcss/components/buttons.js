const plugin = require("tailwindcss/plugin")

const buttons = plugin(function ({ addComponents, theme }) {
  const buttons = {
    ".btn": {
      position: "relative",
      display: "inline-block",
      appearance: "none",
      borderRadius: 0,
      textDecoration: "none",
      fontFamily: theme("fontFamily.display"),

      "&--bottom": {
        position: "absolute",
        top: "8px",
        left: "8px",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: theme("colors.accent"),
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "150ms",
      },

      "&--top": {
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderWidth: "2px",
        borderColor: theme("colors.night"),
        padding: "24px 34px 22px 34px",
      },

      "&--label": {
        fontWeight: theme("fontWeight.bold"),
        fontSize: theme("fontSize.xs"),
        color: theme("colors.night"),
        textAlign: "center",
        letterSpacing: theme("letterSpacing.widest"),
        textTransform: "uppercase",
      },

      "&--border": {
        position: "absolute",
        backgroundColor: theme("colors.accent"),
        transitionProperty: "all",
        transitionTimingFunction: "ease-out",
        transitionDuration: "250ms",
      },

      "&--border-left": {
        left: "-2px",
        bottom: "-2px",
        width: "2px",
        height: 0,
      },

      "&--border-top": {
        left: "-2px",
        top: "-2px",
        width: 0,
        height: "2px",
      },

      "&--border-right": {
        right: "-2px",
        top: "-2px",
        width: "2px",
        height: 0,
      },

      "&--border-bottom": {
        right: "-2px",
        bottom: "-2px",
        width: 0,
        height: "2px",
      },

      "&:hover": {
        ".btn--bottom": {
          top: 0,
          left: 0,
          backgroundColor: theme("colors.night"),
        },

        ".btn--label": {
          color: theme("colors.accent"),
        },

        ".btn--border-left, .btn--border-right": {
          height: "calc(100% + 2px)",
        },

        ".btn--border-top, .btn--border-bottom": {
          width: "calc(100% + 2px)",
        },
      },
    },
  }

  addComponents(buttons)
})

module.exports = buttons
