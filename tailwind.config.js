/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        py: "#F5E4B1",
        sy: "#EBCC80",
        ty: "#D0AD65"
      },
      fontFamily: {
        "goldman": ["Goldman", "cursive"],
        "monsterrat": ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}
