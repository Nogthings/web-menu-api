/** @type {import('tailwindcss').Config} */

  module.exports = {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/preline/dist/*.js',
    ],
    theme: {

    },
    plugins: [
      require('@tailwindcss/forms'),
      require('preline/plugin')
    ],
  
  }



