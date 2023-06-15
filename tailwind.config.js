/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hotel1': 'url(src/img/hotel01.jpg)'
      }
    },
  },
  plugins: [],
}