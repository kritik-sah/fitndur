/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#e26972",
        "theme-primary-light": "#fec2c6",
        "theme-primary-dark": "#e1565f",
        "theme-secondary": "#f6ea98",
        "theme-mainDark": "#572c57",
        "theme-main": "#9f5f91",
        "theme-light": "#f5f5f5",
        "theme-dark": "#1b1b1b",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
