const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#fff95e",
        secondary: "#3f18f5",
        dark: "#232e69",
        light: "#edf4f7",
        gray: "#777ea1",
        purple: "#8453ff",
        "purple-blue": "#5141d8",
        white: "#fff",
        black: "#000",
        red: "#e12e40",
        transparent: {
          DEFAULT: "rgba(255, 255, 255, 0)",
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            a: null,
            "a:not(.btn, .stargazers)": {
              color: theme("colors.primary"),
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
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ["1.0625rem", "1.5"],
      },
      zIndex: {
        "-1": "-1",
        800: "800",
        999: "999",
      },
      transitionProperty: {
        left: "left",
        right: "right",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      boxShadow: {
        xl: "12px 0 34px -5px rgba(63, 24, 245, 0.55)",
      },
      maxWidth: {
        "9/12": "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
