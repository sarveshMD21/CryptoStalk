/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-custom': '1350px',
      },
      colors: {
        "pale-blue": "#F5F6FF",
        "slate-gray": "#6D6D6D"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

