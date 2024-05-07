/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "", //https://tailwindcss.com/docs/dark-mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
