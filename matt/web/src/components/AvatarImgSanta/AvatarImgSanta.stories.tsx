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

import AvatarImgSanta from './AvatarImgSanta'

const avatarImgs = (): string[] => {
  const result = []
  for (let i = 1; i < 10; i++) {
    result.push(`avatar-0${i}.png`)
  }
  return result
}
const avatars = avatarImgs()
const meta: Meta<typeof AvatarImgSanta> = {
  component: AvatarImgSanta,
  argTypes: {
    image: {
      options: avatars,
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvatarImgSanta>

export const Primary: Story = {
  args: {
    image: 'avatar-01.png',
  },
}
