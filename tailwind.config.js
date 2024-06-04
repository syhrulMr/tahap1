/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./home/**/*.html",
    "./other-page/**/*.html",
    "./assets/css/**/*.css",
  ],
  theme: {
    container: {
      center: true,
      padding: "16",
    },
    extend: {
      colors: {},
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
