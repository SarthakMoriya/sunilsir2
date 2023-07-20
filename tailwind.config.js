/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Example custom color
        primaryDark: '#C0AD00',
        primaryLight:'#FFE942' // Example using a named CSS color
      },
    },
  },
  plugins: [],
}