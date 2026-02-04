/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'share-tech': ['"Share Tech"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
