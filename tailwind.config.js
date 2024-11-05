/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['YourFontName', 'sans-serif'], // Default font
        heading: ['YourHeadingFont', 'serif'], // Optional separate heading font
      },
    },
  },
  plugins: [],
}