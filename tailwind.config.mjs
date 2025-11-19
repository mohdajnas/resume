/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      spacing: {
        '30': '7.5rem',
        '35': '8.75rem',
      },
      borderWidth: {
        '1': '1px',
      },
      zIndex: {
        '1': '1',
        '999': '999',
      },
    },
  },
  plugins: [],
}