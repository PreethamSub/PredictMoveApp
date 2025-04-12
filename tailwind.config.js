/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        bgdark: {
          50: '#000000',
          100: '#232323',
          200: '#414141',
          300: '#5d5d5d'
        },
        purple: {
          50: '#d0acff',
          100: '#7c18ff',
          200: '#9a4efc',
          300: '#d0acff',
          400: '#433159'
        }
      },
      fontFamily: {
        display: 'Roboto', // Adds a new `font-display` class
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")
  ],
};
