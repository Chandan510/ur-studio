/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.7)',
         'lg': '0 10px 15px rgba(0, 0, 0, 0.5)'
      }
    }
  },
  plugins: [],
};
