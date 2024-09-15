/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'my-whites' : '#EEEEEE',
        'my-yellows' : '#FFD369',
        'my-blacks': '#222831',
        'my-greys' : '#393E46',
      },
    },
  },
  plugins: [],
}

