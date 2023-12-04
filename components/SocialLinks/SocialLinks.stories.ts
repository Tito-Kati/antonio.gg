import SocialLinks from './SocialLinks.vue'
import { type Meta, type StoryObj } from '@storybook/vue3'

export default {
  component: SocialLinks,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SocialLinks>

export const AllEnabled: StoryObj<typeof SocialLinks> = {
  args: {
    customLink: 'https://bashunit.typeddevs.com/',
    customImage: 'https://bashunit.typeddevs.com/logo.svg',
    customLabel: 'bashunit',
    linkedInHandle: 'antonio-gonzalez-gea',
    xHandle: 'antonio_gg_dev',
    gitHubHandle: 'Tito-Kati',
    printablesHandle: 'Katarn',
    printablesModelId: 421668,
  },
}

export const OnlyLinkedIn: StoryObj<typeof SocialLinks> = {
  args: {
    linkedInHandle: 'antonio-gonzalez-gea',
  },
}

export const OnlyX: StoryObj<typeof SocialLinks> = {
  args: {
    xHandle: 'antonio_gg_dev',
  },
}

export const OnlyGitHubUser: StoryObj<typeof SocialLinks> = {
  args: {
    gitHubHandle: 'Tito-Kati',
  },
}

export const OnlyGitHubRepository: StoryObj<typeof SocialLinks> = {
  args: {
    gitHubHandle: 'Tito-Kati/Huezzle',
  },
}

export const OnlyPrintablesUser: StoryObj<typeof SocialLinks> = {
  args: {
    printablesHandle: 'Katarn',
  },
}

export const OnlyPrintablesModel: StoryObj<typeof SocialLinks> = {
  args: {
    printablesModelId: 421668,
  },
}

export const OnlyCustomBashunit: StoryObj<typeof SocialLinks> = {
  args: {
    customLink: 'https://bashunit.typeddevs.com/',
    customImage: 'https://bashunit.typeddevs.com/logo.svg',
    customLabel: 'bashunit',
  },
}

export const OnlyCustomHuezzle: StoryObj<typeof SocialLinks> = {
  args: {
    customLink: 'https://huezzle.antonio.gg/',
    customImage: 'https://huezzle.antonio.gg/img/icons/favicon.svg',
    customLabel: 'Huezzle',
  },
}
