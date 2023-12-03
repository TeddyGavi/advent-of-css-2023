// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import AvatarIconOnly from './AvatarIconOnly'

const icons = [
  'calendar',
  'check',
  'chevron',
  'close',
  'eyeClosed',
  'eyeOpened',
  'logout',
  'minus',
  'plus',
  'question',
  'thumbsDown',
  'thumbsUp',
  'upload',
  'user',
]
const meta: Meta<typeof AvatarIconOnly> = {
  component: AvatarIconOnly,
  argTypes: {
    iconId: {
      options: icons,
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvatarIconOnly>

export const Primary: Story = {
  args: {
    iconId: 'check',
  },
}
