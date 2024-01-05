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

import WishListCard from './WishListCard'

const meta: Meta<typeof WishListCard> = {
  component: WishListCard,
}

export default meta

type Story = StoryObj<typeof WishListCard>

export const Primary: Story = {}
