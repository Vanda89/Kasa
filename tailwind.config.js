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
        '4.5': '1.125rem',
        '30': '7.5rem',
        '104': '26rem',
      },
      width: {
        '22': '5.5rem',
        '84': '21rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '85': '21.25rem',
      },
      fontSize: {
        '2.5': '0.625rem',
        '72': '288px',
      },
      colors: {
        'grey-50': '#fbfbfb',
      },
      rotate: {
        '270': '270deg',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1920px',
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
