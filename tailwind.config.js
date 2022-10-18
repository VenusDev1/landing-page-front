/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        py: "#4200CF",
        sy: "#1C1A6C",
        ty: "#0E00AE",
        fy: "#FFD428"
      },
      fontFamily: {
        "goldman": ["Goldman", "cursive"],
        "monsterrat": ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}
