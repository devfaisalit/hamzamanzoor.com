/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'impact': ['impact', 'sans-serif'],
        'Varino':['Varino','Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
