/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': {
            transform: 'rotateY(0deg)',
          },
          '100%': {
            transform: 'rotateY(180deg)',
          }
        }
      }
    },
    animation: {
      'flip': 'flip 1s ease-in-out'
    }
  },
  plugins: [],
}

