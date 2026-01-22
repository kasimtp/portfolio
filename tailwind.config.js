/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        ui: ['Roboto', 'sans-serif'],
        accent: ['Outfit', 'sans-serif'],
      },
    },
},
  plugins: [],
}
