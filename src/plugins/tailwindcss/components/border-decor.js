const plugin = require("tailwindcss/plugin")

const borderDecor = plugin(function ({ addComponents, theme }) {
  const decor = {
    ".decor": {
      position: "relative",

      "&::before": {
        position: "absolute",
        top: "16px",
        left: 0,
        height: "40px",
        width: "8px",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        content: "''",
      },
    },

    ".decor-primary": {
      "&::before": {
        backgroundColor: theme("colors.primary"),
      },
    },

    ".decor-purple": {
      "&::before": {
        backgroundColor: theme("colors.purple"),
      },
    },
  }

  addComponents(decor)
})

module.exports = borderDecor
