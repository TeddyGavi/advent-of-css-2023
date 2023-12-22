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

import WishListLineItem from './WishListLineItem'

const meta: Meta<typeof WishListLineItem> = {
  component: WishListLineItem,
}

export default meta

type Story = StoryObj<typeof WishListLineItem>

export const Primary: Story = {}
