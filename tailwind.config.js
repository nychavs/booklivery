/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./App.{js,jsx,ts,tsx}",
   "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      'botao':'#735238',
      'navbar': '#735238',
      'busca':'#B2A189'
    }
  },
  plugins: [],
}

