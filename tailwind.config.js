/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './templates/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      background: {
        light: {
          1: '#DDDDDD',
          2: '#CFCFCF'
        },
        dark: {
          1: '#20262E',
          2: '#2c323b'
        }
      },
      primary: '#7e57c2'
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ]
}
