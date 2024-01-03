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

import IndividualWishListSlideOut from './IndividualWishListSlideOut'

const meta: Meta<typeof IndividualWishListSlideOut> = {
  component: IndividualWishListSlideOut,
}

export default meta

type Story = StoryObj<typeof IndividualWishListSlideOut>

export const Primary: Story = {}
