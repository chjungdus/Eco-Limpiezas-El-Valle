/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eco: {
          50:  '#f0faf6',
          100: '#d4efe3',
          200: '#a8dfca',
          300: '#72c7aa',
          400: '#45ab8a',
          500: '#2d9270',
          600: '#237a5c',
          700: '#1c6149',
          800: '#164a38',
          900: '#0f3327',
          950: '#081f19',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
