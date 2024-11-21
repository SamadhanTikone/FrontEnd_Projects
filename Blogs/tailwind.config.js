/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 3px 10px rgba(255, 255, 255, 0.5)',
      },},
  },
  plugins: [],
}


