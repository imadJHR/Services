/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3498db',
        secondary:"#191A23",
        tertiary:"#252A41",
      },
      fontFamily: {
        'primary': ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

