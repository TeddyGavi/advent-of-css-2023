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

import AvatarIconOnly from './AvatarIconOnly'

const meta: Meta<typeof AvatarIconOnly> = {
  component: AvatarIconOnly,
}

export default meta

type Story = StoryObj<typeof AvatarIconOnly>

export const Primary: Story = {}
