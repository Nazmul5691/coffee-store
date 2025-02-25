/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['Rancho', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
}

