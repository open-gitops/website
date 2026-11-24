const defaultTheme = require("tailwindcss/defaultTheme")
const typographyContent = require("./src/plugins/tailwindcss/typography-content")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      ...typographyContent,
      // Content tops out at 1200px including the 32px gutters.
      container: {
        center: true,
        padding: { DEFAULT: "1rem", md: "2rem" },
        screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px" },
      },
      colors: {
        accent: "#fff95e",
        blue: "#5d96fc",
        night: "#2F508A",
        dark: "#042660",
        light: "#d5dcf2",
        gray: "#777ea1",
        yellow: "#fff95e",
        // Theme tokens from src/styles/app.scss; they switch with dark mode.
        ground: "var(--bg)",
        surface: "var(--surface)",
        card: "var(--card)",
        ink: "var(--text)",
        muted: "var(--muted)",
        line: { DEFAULT: "var(--line)", strong: "var(--line-strong)" },
        link: { DEFAULT: "var(--link)", hover: "var(--link-hover)" },
        bar: "var(--bar-bg)",
        btn: { DEFAULT: "var(--btn-bg)", ink: "var(--btn-text)" },
        ghost: "var(--ghost-border)",
        numeral: "var(--numeral)",
        principle: "var(--principle)",
        highlight: "var(--h1-accent)",
        date: "var(--date)",
        mark: "var(--mark)",
        transparent: {
          DEFAULT: "rgba(255, 255, 255, 0)",
          blue: "rgba(84, 141, 246, 0)",
        },
      },
      fontFamily: {
        sans: ["inter", ...defaultTheme.fontFamily.sans],
        display: ["montserrat", ...defaultTheme.fontFamily.sans],
      },
      // Highlight text adapts to the mode: link blue on light, yellow on navy.
      textColor: {
        accent: "var(--link)",
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
  plugins: [
    // legacy: keep pre-0.5 selector specificity so prose styles beat the global link styles
    require("@tailwindcss/typography")({ target: "legacy" }),
    require("./src/plugins/tailwindcss/typography-theme"),
    require("./src/plugins/tailwindcss/global"),
    require("./src/plugins/tailwindcss/utilities"),
    require("./src/plugins/tailwindcss/components/buttons"),
    require("./src/plugins/tailwindcss/components/toggler"),
    require("./src/plugins/tailwindcss/components/border-decor"),
  ],
}
