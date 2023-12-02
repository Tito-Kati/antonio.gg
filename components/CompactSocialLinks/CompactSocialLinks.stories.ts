import CompactSocialLinks from './CompactSocialLinks.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: CompactSocialLinks,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CompactSocialLinks>

export const AllEnabled: StoryObj<typeof CompactSocialLinks> = {
  args: {
    linkedInHandle: 'antonio-gonzalez-gea',
    xHandle: 'Tito_Kati',
    gitHubHandle: 'Tito-Kati',
    printablesHandle: 'Katarn',
  },
}

export const OnlyLinkedIn: StoryObj<typeof CompactSocialLinks> = {
  args: {
    linkedInHandle: 'antonio-gonzalez-gea',
  },
}

export const OnlyX: StoryObj<typeof CompactSocialLinks> = {
  args: {
    xHandle: 'Tito_Kati',
  },
}

export const OnlyGitHub: StoryObj<typeof CompactSocialLinks> = {
  args: {
    gitHubHandle: 'Tito-Kati',
  },
}

export const OnlyPrintables: StoryObj<typeof CompactSocialLinks> = {
  args: {
    printablesHandle: 'Katarn',
  },
}
