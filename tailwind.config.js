/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('../images/Image.png')"
      }
    },
  },
  plugins: [],
}

