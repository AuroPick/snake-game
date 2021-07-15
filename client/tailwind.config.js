module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#151a21',
      secondary: '#0b0e11',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
