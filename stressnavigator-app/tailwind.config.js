/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9284a4',
        'primary-dark': '#7a6b8a',
      },
      fontFamily: {
        'chivo': ['Chivo', 'sans-serif'],
        'cabin': ['Cabin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
