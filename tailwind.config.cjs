/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      inter: ['inter, sans-serif'],
    },
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideName: {
          '0%': { opacity: 0, transform: 'translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideProf: {
          '0%': { opacity: 0, transform: 'translateX(50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideBottomTop: {
          '0%': { opacity: 0, transform: 'translateY(50%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        show: 'show 0.75s ease-in-out',
        slideName: 'slideName 1s ease-in-out',
        slideProf: 'slideProf 1.75s ease-in-out',
        slideBottomTop: 'slideBottomTop 0.75s ease-in-out',
        slideRtoL: 'slideProf 0.75s ease-in-out',
      },
    },
  },
  plugins: [],
};
