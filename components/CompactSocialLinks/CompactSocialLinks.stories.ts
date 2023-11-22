import CompactSocialLinks from './CompactSocialLinks.vue'

export default {
  component: CompactSocialLinks,
  tags: ['autodocs'],
  argTypes: {},
}

export const AllEnabled = {
  args: {
    linkedInHandle: 'antonio-gonzalez-gea',
    xHandle: 'Tito_Kati',
    gitHubHandle: 'Tito-Kati',
    printablesHandle: 'Katarn',
  },
}

export const OnlyLinkedIn = {
  args: {
    linkedInHandle: 'antonio-gonzalez-gea',
  },
}

export const OnlyX = {
  args: {
    xHandle: 'Tito_Kati',
  },
}

export const OnlyGitHub = {
  args: {
    gitHubHandle: 'Tito-Kati',
  },
}

export const OnlyPrintables = {
  args: {
    printablesHandle: 'Katarn',
  },
}
