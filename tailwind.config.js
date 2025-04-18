/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';
module.exports = {
  content: [
    "./src/**/*.{html,ts}",   
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000da6',
        secondary: '02559a'
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      }
    },
  },
  darkMode: ['selector', '[class~="my-app-dark"]'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-primeui"),
    PrimeUI
  ],
}

