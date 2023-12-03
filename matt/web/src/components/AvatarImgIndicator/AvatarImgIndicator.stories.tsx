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

import AvatarImgIndicator from './AvatarImgIndicator'

const meta: Meta<typeof AvatarImgIndicator> = {
  component: AvatarImgIndicator,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvatarImgIndicator>

export const Primary: Story = {
  args: {
    image: 'avatar-01.png',
    indicator: 'check',
  },
}
export const DoNotDisturb: Story = {
  args: {
    image: 'avatar-01.png',
    indicator: 'minus',
  },
}
export const Question: Story = {
  args: {
    image: 'avatar-01.png',
    indicator: 'question',
  },
}
