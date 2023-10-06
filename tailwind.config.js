/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        'blue-gray-400': '#a6adba',
        'blue-gray-500': '#1d283a',
        'blue-gray-600': '#1d232a',
        'blue-gray-900': '#1f2937',
        coding: '#a78bfa',
        style: '#f472b6',
        food: '#a3e635',
        fashion: '#f87171',
        culture: '#facc15',
        travel: '#60a5fa',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
