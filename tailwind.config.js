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
      colors: {
        'blue-gray-400': '#a6adba',
        'blue-gray-600': '#1d232a',
        'blue-gray-900': '#1f2937',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
