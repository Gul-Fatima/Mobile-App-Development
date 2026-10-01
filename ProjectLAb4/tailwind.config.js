/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: this project keeps its routes in src/app (not app/), so the content
  // paths must point at src/ or className will silently do nothing.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0E4D92',
        accent: '#F59E0B',
        card: '#1A1A2E',
      },
      fontFamily: {
        sans: ['Rubik_400Regular'],
        medium: ['Rubik_500Medium'],
        bold: ['Rubik_700Bold'],
      },
    },
  },
  plugins: [],
};
