/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit', // Du kan aktivere JIT-modus hvis du ønsker det
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    // Legg til flere stier her hvis du har flere kataloger
  ],
  darkMode: false, // eller 'media' eller 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
