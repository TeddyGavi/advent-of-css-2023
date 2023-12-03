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

import AvatarIndicator from './AvatarIndicator'

const meta: Meta<typeof AvatarIndicator> = {
  component: AvatarIndicator,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AvatarIndicator>

export const Primary: Story = {
  args: {
    status: 'check',
  },
}

export const DoNotDisturb: Story = {
  args: {
    status: 'minus',
  },
}

export const Question: Story = {
  args: {
    status: 'question',
  },
}
