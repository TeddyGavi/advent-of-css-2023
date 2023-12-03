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

import AvatarImgSanta from './AvatarImgSanta'

const meta: Meta<typeof AvatarImgSanta> = {
  component: AvatarImgSanta,
}

export default meta

type Story = StoryObj<typeof AvatarImgSanta>

export const Primary: Story = {}
