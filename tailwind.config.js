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
        accent: "#fff95e",
        blue: "#5d96fc",
        night: "#2F508A",
        dark: "#042660",
        light: "#d5dcf2",
        gray: "#777ea1",
        transparent: {
          DEFAULT: "rgba(255, 255, 255, 0)",
          blue: "rgba(84, 141, 246, 0)",
        },
      },
      fontFamily: {
        sans: ["avenir", ...defaultTheme.fontFamily.sans],
        display: ["montserrat", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: [".75rem", "1rem"],
        sm: [".875rem", "1.25rem"],
        base: ["1.0625rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.5rem"],
        "4xl": ["2.5rem", "3.25rem"],
        "5xl": ["3rem", "1.1"],
        "6xl": ["4rem", "1.1"],
        "7xl": ["5rem", "1.1"],
        "8xl": ["5.5rem", "1.1"],
      },
      zIndex: {
        "-1": "-1",
        999: "999",
      },
      borderRadius: {
        circle: "100%",
      },
      boxShadow: {
        xl: "12px 0 34px -5px rgba(39, 111, 240, 0.7)",
      },
      transitionProperty: {
        left: "left",
        right: "right",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
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
