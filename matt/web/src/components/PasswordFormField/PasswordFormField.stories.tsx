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

import PasswordFormField from './PasswordFormField'

const meta: Meta<typeof PasswordFormField> = {
  component: PasswordFormField,
}

export default meta

type Story = StoryObj<typeof PasswordFormField>

export const Primary: Story = {}
