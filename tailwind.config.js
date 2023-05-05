/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./App.{js,jsx,ts,tsx}",
   "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      'btn':'#735238',
      'navbar': '#735238',
      'search':'#B2A189'
    },
    opacity:{
      'opa-btn':'.91',
      'opa-navbar':'.91',
      'opa-search':'.35',
    }
  },
  plugins: [],
}

