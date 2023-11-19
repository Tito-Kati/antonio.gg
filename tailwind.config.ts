import { type Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.md',
    './components/**/*.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '16rem',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Aleo', 'serif'],
      mono: ['Source Code Pro', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
