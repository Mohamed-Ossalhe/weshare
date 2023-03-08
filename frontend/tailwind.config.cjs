/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'secondary' : "#6D67E4"
      },
      fontFamily: {
        'montserrat': "montserrat"
      },
      backgroundImage: {
        'log-in': "url(./src/assets/images/log-in.jpg)",
        'sign-up': "url(./src/assets/images/sign-up.jpg)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}
