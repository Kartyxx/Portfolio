/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Utilisez **/* pour capturer aussi les fichiers dans les sous-dossiers
  ],
  theme: {
    extend: {
      animation: {
        disco: 'disco 1s linear infinite', // Animation personnalisée
      },
      keyframes: {
        disco: {
          '0%': { 'background-position': '0% 50%' },
          '20%': { 'background-position': '30% 30%' },
          '40%': { 'background-position': '60% 70%' },
          '60%': { 'background-position': '40% 40%' },
          '80%': { 'background-position': '70% 20%' },
          '100%': { 'background-position': '200% 50%' },
        },
      },
      backgroundImage: {
        'gradient-rainbow':
          'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
      },
    },
  },
  plugins: [],
};

//npx tailwindcss -i src/inpute/style.css -o src/inpute/output.css --watch