/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {},
  },
  plugins: ['@fortawesome/fontawesome-free/css/all.css'],
}

