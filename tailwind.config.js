/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true
      },
      backgroundColor: {
        main: "#151937"
      }
    },
  },
  // Để sử dụng darkMode: darkMode: "class"
  darkMode: "class",
  plugins: [
    require('flowbite/plugin')
  ]
}

