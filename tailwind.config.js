/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE4300',
        secondary: '#868686',
        softGray: '#F0F0F0',
        mistGray: '#D7DCDD',
        gray: '#C0D8E0',
      },
      screens: {
        'xs': '425px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '[65px]': ['4.0625rem', { lineHeight: '1.1' }],
        '[85px]': ['5.3125rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '30': '7.5rem',
        '35': '8.75rem',
        '171.5': '42.875rem',
        '187.5': '46.875rem',
      },
      borderWidth: {
        '1': '1px',
      },
      zIndex: {
        '1': '1',
        '999': '999',
      },
      maxWidth: {
        '[80rem]': '80rem',
      },
    },
  },
  plugins: [],
}