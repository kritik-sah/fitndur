/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      'theme-primary': '#e26972',
      'theme-secondary': '#f6ea98',
      'theme-mainDark': '#572c57',
      'theme-main': '#9f5f91',
      'theme-light': '#f5f5f5',
      'theme-dark': '#1b1b1b',
    },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
    },
  },
  plugins: [],
}
