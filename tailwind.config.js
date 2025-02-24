/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        mobile: "0px",
        tablet: "768px",
        desktop: "1024px",
      },
      fontFamily: {
        iransans: ["Iransans"],
      },
    },
  },
  plugins: [],
};
