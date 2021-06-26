const defaultTheme = require("tailwindcss/defaultTheme")
const typographyContent = require("./src/plugins/tailwindcss/typography-content")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ...typographyContent,
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#fff95e",
        secondary: "#3f18f5",
        dark: "#232e69",
        light: "#edf4f7",
        gray: "#777ea1",
        purple: "#8453ff",
        "purple-blue": "#5141d8",
        transparent: "rgba(255, 255, 255, 0)",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: [".75rem", "1rem"],
        sm: [".875rem", "1.25rem"],
        base: ["1.0625rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.5rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["4rem", "1"],
        "7xl": ["5rem", "1"],
        "8xl": ["5.5rem", "1"],
      },
      zIndex: {
        "-1": "-1",
        999: "999",
      },
      borderRadius: {
        circle: "100%",
      },
      boxShadow: {
        xl: "12px 0 34px -5px rgba(63, 24, 245, 0.55)",
      },
      transitionProperty: {
        left: "left",
        right: "right",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("./src/plugins/tailwindcss/typography-theme"),
    require("./src/plugins/tailwindcss/global"),
    require("./src/plugins/tailwindcss/utilities"),
    require("./src/plugins/tailwindcss/components/buttons"),
    require("./src/plugins/tailwindcss/components/toggler"),
    require("./src/plugins/tailwindcss/components/border-decor"),
  ],
}
