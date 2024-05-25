/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          '100%': { transform: 'scale(116%)' },
        },
      },
      animation:{
        wiggle: 'scaleUp 450ms ease-in-out 0s 1 normal forwards running'
      }
    },
  },
  plugins: [],
}

