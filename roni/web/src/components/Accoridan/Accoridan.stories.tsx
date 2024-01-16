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

import Accoridan from './Accoridan'

const meta: Meta<typeof Accoridan> = {
  component: Accoridan,
}

export default meta

type Story = StoryObj<typeof Accoridan>

export const Primary: Story = {}
