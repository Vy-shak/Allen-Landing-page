/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plusJakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        Blue500: '#3F8DFD'
      }
    },
  },
  plugins: [],
}