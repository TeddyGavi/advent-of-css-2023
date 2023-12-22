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

import WishList from './WishList'

const meta: Meta<typeof WishList> = {
  component: WishList,
}

export default meta

type Story = StoryObj<typeof WishList>

export const Primary: Story = {}
