import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: { max: '575px' },
      sm: { min: '575px', max: '991px' },
      md: { max: '1199px' },
    },
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        scrollText: {
          from: { transform: 'translate3d(-2%, 0, 0)' },
          to: { transform: 'translate3d(-100%, 0, 0)' },
        },
      },
      animation: {
        shine: 'shine 2.5s linear infinite',
        'scroll-text': 'scrollText 90s linear infinite',
      },
      colors: {
        base: 'var(--base)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        neutral: 'var(--neutral)',
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
    },
  },
  plugins: [],
} satisfies Config;
