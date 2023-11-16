import { type Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.md',
    './components/**/*.vue'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Aleo', 'serif'],
      mono: ['Source Code Pro', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
