/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    flowbite.content(),
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#323154',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}