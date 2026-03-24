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
        forest: '#2D4B3B',
        'forest-light': '#3d6450',
        sage: '#8C9D5E',
        'sage-light': '#b5c98a',
        warm: '#C59B6D',
        'warm-light': '#debb99',
        cream: '#F8F5F0',
        'cream-dark': '#ede8e0',
        charcoal: '#2c2c2c',
        'text-muted': '#6b7068',
        gold: '#b8952a',
        'gold-light': '#d4b05a',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
