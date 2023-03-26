const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#5865f2',
        gray: colors.neutral,
        gray: {
          950: '#1e1f22',
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          500: '#b5bac1',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5'
        },
        blue: {
          800: '#3c45a5',
          700: '#4752c4',
          600: '#5865f2'
        },
        icons: {
          red: '#ed4245',
          gray: '#757e8a',
          blue: '#5865f2',
          green: '#3ba55c',
          yellow: '#faa61a'
        }
      }
    },
  },
  plugins: [],
}
