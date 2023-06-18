/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      inter: ['inter, sans-serif'],
    },
    extend: {
      colors: {
        primaryDark: '#303030',
        primaryGreen: '#01c38d',
        secondaryBlue: '#132D46',
      },
      keyframes: {
        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideLeftToRight: {
          '0%': { opacity: 0, transform: 'translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideRightToLeft: {
          '0%': { opacity: 0, transform: 'translateX(25%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideBottomTop: {
          '0%': { opacity: 0, transform: 'translateY(50%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        show075: 'show 0.75s ease-in-out',
        slideLtoR1: 'slideLeftToRight 1s ease-in-out',
        slideRtoL175: 'slideRightToLeft 1.75s ease-in-out',
        slideBtT075: 'slideBottomTop 0.75s ease-in-out',
        slideRtoL075: 'slideRightToLeft 0.75s ease-in-out',
      },
    },
  },
  plugins: [],
};
