/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eco: {
          50:  '#f2f7f4',
          100: '#d9ebe1',
          200: '#b3d6c3',
          300: '#7db9a0',
          400: '#52997e',
          500: '#3a7d64',
          600: '#2d6a52',
          700: '#245441',
          800: '#1c4033',
          900: '#132d24',
          950: '#0b1e18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
