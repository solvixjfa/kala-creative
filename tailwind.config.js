/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kala: {
          dark: '#14100c',      // Dark Warm Brown / Espresso
          card: '#1c1712',      // Slightly lighter brown card
          gold: '#d4a359',      // Warm Gold / Wood Accent
          goldlight: '#e8c382', // Light Gold
          sand: '#f4ede2',      // Warm Sand Text
          muted: '#a3988c'      // Muted Earthy Gray
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
