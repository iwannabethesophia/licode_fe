/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './theme/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
  ],
}
