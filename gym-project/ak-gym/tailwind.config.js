/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  theme: { 
    extend: {
      colors: {
        gymBlack: '#1a1a1a',
        gymRed: '#dc2626',
        gymWhite: '#ffffff',
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    } 
  },
  plugins: [],
};
