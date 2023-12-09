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

import HamMenu from './HamMenu'

const meta: Meta<typeof HamMenu> = {
  component: HamMenu,
}

export default meta

type Story = StoryObj<typeof HamMenu>

export const Primary: Story = {}
