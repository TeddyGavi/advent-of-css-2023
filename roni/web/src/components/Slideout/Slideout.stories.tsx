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

import Slideout from './Slideout'

const meta: Meta<typeof Slideout> = {
  component: Slideout,
}

export default meta

type Story = StoryObj<typeof Slideout>

export const Primary: Story = {
  args: {
    wishlist: [
      { number: 1,name: 'Item 1', url: 'https://www.apple.com/' },
      { number: 1,name: 'Item 2', url: 'https://taosfootwear.com/products/good-wool?variant=40217573261477' },
      // Add more items as needed
    ],
  },

}
