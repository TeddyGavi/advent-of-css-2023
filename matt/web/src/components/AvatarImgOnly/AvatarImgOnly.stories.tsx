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

import AvatarImgOnly from './AvatarImgOnly'

const meta: Meta<typeof AvatarImgOnly> = {
  component: AvatarImgOnly,
}

export default meta

type Story = StoryObj<typeof AvatarImgOnly>

export const Primary: Story = {
  args: {
    image: 'avatar-01.png',
  },
}
