/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'mobile': {'max': '610px'},
      'tablet': {'max': '750px'},
    },
  },
  plugins: [],
}

