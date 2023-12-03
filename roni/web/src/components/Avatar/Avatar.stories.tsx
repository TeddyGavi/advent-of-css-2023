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

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    avatar: '/images/avatar-02.png',
  },
}
export const WithLetter: Story = {
  args: {
    letter: 'J',
  },
}

export const WithIcon: Story = {
  args: {
    icon: 'eyeClosed',
  },
}

export const WithHat: Story = {
  args: {
    icon: 'eyeClosed',
    isHatShowing: true,
  },
}

export const WithIndicator: Story = {
  args: {
    icon: 'check',
    indicator: 'warning',
  },
}