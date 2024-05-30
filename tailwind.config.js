/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      letterSpacing: {
        'custom': '0.15em',
      }
    },
  },
  plugins: [],
}

