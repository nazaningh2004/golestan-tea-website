/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        mobile: "0",
        tablet: "768px",
        desktop:"1024px",
      },
      fontFamily: {
        'iransans': ['Iransans'],
      },
    },
  },
  plugins: [],
}

