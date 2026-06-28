/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kg-teal': {
          50:  '#E1F5EE',
          100: '#9FE1CB',
          400: '#1D9E75',
          600: '#0F6E56',
          800: '#085041',
        },
        'kg-ink': '#2C2C2A',
        'kg-muted': '#888780',
        'kg-page': '#F8F7F4',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: 'rgba(44, 44, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
