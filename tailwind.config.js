module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient': "url('../background.jpg')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
