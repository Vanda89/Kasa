/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      textShadow: {
        hero: '2px 2px 6px rgba(0, 0, 0, 1)',
      },
      boxShadow: {
        hero: '0 5px 5px -2px rgba(0, 0, 0, 0.5)',
      },
      height: {
        '104': '26rem',
      },
      spacing: {
        '18': '4.5rem',
        '85': '21.25rem',
      },
      fontSize: {
        '72': '288px',
      },
      colors: {
        'grey-50': '#fbfbfb',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
