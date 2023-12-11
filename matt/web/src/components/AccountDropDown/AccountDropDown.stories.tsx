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

import AccountDropDown from './AccountDropDown'

const meta: Meta<typeof AccountDropDown> = {
  component: AccountDropDown,
}

export default meta

type Story = StoryObj<typeof AccountDropDown>

export const Primary: Story = {}
