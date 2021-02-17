module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        my_background: '#f7f9fd'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
