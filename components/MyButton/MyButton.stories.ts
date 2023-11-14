import MyButton from './MyButton.vue';

export default {
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: 'text'
    },
  },
}

export const Primary = {
  args: {
    primary: true,
    default: 'Label',
  },
}

export const Secondary = {
  args: {
    default: 'Label',
  },
}
