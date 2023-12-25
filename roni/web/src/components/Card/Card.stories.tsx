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

import Card from './Card'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
   avatar: {
    avatar: '/images/avatar-02.png',
   },
    isCloseShowing: true,
    name: 'Ollie',
    email: 'ollie@ollie.com',
}
}
export const closeButtonNotShowing: Story = {
  args: {
    avatar: {
      avatar: '/images/avatar-01.png',
    },
    name: 'George',
    email: 'george@ollie.com',
    isCloseShowing: false,
  },
}