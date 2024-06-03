/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  })
})

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      },
      // backfaceVisibility: {
      //   hidden: "hidden",
      // },
      // transitionDuration: {
      //   400: "400ms",
      // },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
  plugins: [require("preline/plugin"), backfaceVisibility],
}
