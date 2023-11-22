import SocialLinks from './SocialLinks.vue'

export default {
  component: SocialLinks,
  tags: ['autodocs'],
  argTypes: {},
}

export const AllEnabled = {
  args: {
    customLink: 'https://bashunit.typeddevs.com/',
    customImage: 'https://bashunit.typeddevs.com/logo.svg',
    customLabel: 'bashunit',
    xHandle: 'Tito_Kati',
    linkedInHandle: 'antonio-gonzalez-gea',
    printablesHandle: 'Katarn',
    printablesModelId: 421668,
  },
}

export const OnlyX = {
  args: {
    xHandle: 'Tito_Kati',
  },
}

export const OnlyLinkedIn = {
  args: {
    linkedInHandle: 'antonio-gonzalez-gea',
  },
}

export const OnlyPrintablesUser = {
  args: {
    printablesHandle: 'Katarn',
  },
}

export const OnlyPrintablesModel = {
  args: {
    printablesModelId: 421668,
  },
}

export const OnlyCustomBashunit = {
  args: {
    customLink: 'https://bashunit.typeddevs.com/',
    customImage: 'https://bashunit.typeddevs.com/logo.svg',
    customLabel: 'bashunit',
  },
}

export const OnlyCustomHuezzle = {
  args: {
    customLink: 'https://huezzle.antonio.gg/',
    customImage: 'https://huezzle.antonio.gg/img/icons/favicon.svg',
    customLabel: 'Huezzle',
  },
}
