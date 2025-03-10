/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      inter: ['inter, sans-serif'],
    },
    extend: {
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
      // colors: {
      //   background: 'hsl(var(--background))',
      //   secondary: 'hsl(var(--background-secondary))',
      //   foreground: 'hsl(var(--foreground))',
      // },
      // primary: {
      //   DEFAULT: 'hsl(var(--primary))',
      //   foreground: 'hsl(var(--primary-foreground))',
      // },
      // secondary: {
      //   DEFAULT: 'hsl(var(--secondary))',
      //   foreground: 'hsl(var(--secondary-foreground))',
      // },
      // muted: {
      //   DEFAULT: 'hsl(var(--muted))',
      //   foreground: 'hsl(var(--muted-foreground))',
      // },
      // accent: {
      //   DEFAULT: 'hsl(var(--accent))',
      //   foreground: 'hsl(var(--accent-foreground))',
      // },
      // destructive: {
      //   DEFAULT: 'hsl(var(--destructive))',
      //   foreground: 'hsl(var(--destructive-foreground))',
      // },
      // border: 'hsl(var(--border))',
      // ring: 'hsl(var(--ring))',
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
