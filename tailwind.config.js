/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html',
  "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300'
      },
      
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
