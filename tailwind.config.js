/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./App.{js,jsx,ts,tsx}",
   "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {

      colors:{
        'white': '#ffffff',
        'btn':'#735238',
        'navbar': '#735238',
        'search':'#ece7e2',
        'btn-clear':'#c9bba7'
      },
      opacity:{
        'opa-btn':'.91',
        'opa-navbar':'.91',
        'opa-search':'.80',
      }
    },
  },
  plugins: [],
}

