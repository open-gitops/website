const plugin = require("tailwindcss/plugin")

// .btn is the primary button (navy on light, yellow on dark); .btn-ghost is
// the outline button and .btn-accent the yellow one that stays yellow.
const buttons = plugin(function ({ addComponents }) {
  addComponents({
    ".btn": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "52px",
      padding: "0 28px",
      borderRadius: "8px",
      border: "1.5px solid transparent",
      fontWeight: 600,
      textDecoration: "none",
      backgroundColor: "var(--btn-bg)",
      color: "var(--btn-text)",
      transition: "transform .18s ease, box-shadow .18s ease",

      "&:hover": {
        color: "var(--btn-text)",
        transform: "translateY(-2px)",
        boxShadow: "0 8px 20px rgba(3, 25, 74, .22)",
      },

      "&:active": {
        transform: "none",
        boxShadow: "none",
      },
    },

    ".btn-ghost": {
      padding: "0 24px",
      backgroundColor: "transparent",
      borderColor: "var(--ghost-border)",
      color: "var(--text)",

      "&:hover": {
        color: "var(--text)",
      },
    },

    ".btn-accent": {
      backgroundColor: "#fff95e",
      color: "#042660",

      "&:hover": {
        color: "#042660",
      },
    },

    ".btn-sm": {
      minHeight: "44px",
      padding: "0 20px",
      fontSize: "15px",
    },
  })
})

module.exports = buttons
