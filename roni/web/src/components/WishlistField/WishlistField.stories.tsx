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

import WishlistField from './WishlistField'

const meta: Meta<typeof WishlistField> = {
  component: WishlistField,
}

export default meta

type Story = StoryObj<typeof WishlistField>

export const Primary: Story = {
  args: {
    name: 'wishlist',
    number: 1,
    roundButton: {
      status: 'success',
    },
  },
}
