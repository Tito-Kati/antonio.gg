import { type Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.md',
    './components/**/*.vue',
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
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        'sans-serif',
      ],
      serif: [
        'Aleo',
        'serif',
      ],
      mono: [
        'Source Code Pro',
        'monospace',
      ],
    },
    zIndex: {
      'body-background-before': '-2',
      'body-background-after': '-1',

      'code-lang': '1',
      'code-copy': '2',
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        primary: {
          50: '#eeeff9',
          100: '#cccfed',
          200: '#a9b0e1',
          300: '#8790d5',
          400: '#6570c8',
          500: '#4350bc',
          600: '#37429a',
          700: '#2a3378',
          800: '#1e2556',
          900: '#121633',
          950: '#060711',
        },
        background: {
          teal: '#1e4756',
          blue: '#1e2556',
          purple: '#3d1e56',
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
} satisfies Config
