import { Preview } from '@storybook/vue3'
import '../styles/index.scss'
import { themes } from '@storybook/theming'

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: 'dark',
    },
    docs: {
      theme: themes.dark,
    },
  },
} satisfies Preview
