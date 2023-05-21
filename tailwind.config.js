/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#0284c7',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1350px',
      }
    },
  },
  plugins: [],
}

