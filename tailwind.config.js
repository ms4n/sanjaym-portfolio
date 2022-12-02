/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        satoshib: ["Satoshi-Bold", "sans-serif"],
        satoshil: ["Satoshi-Light", "sans-serif"],
        satoshim: ["Satoshi-Medium", "sans-serif"],
        satoshir: ["Satoshi-Regular", "sans-serif"],
      },
      colors: {
        "main-color": "#CCCCFF",
      },
    },
  },
  plugins: [],
};
