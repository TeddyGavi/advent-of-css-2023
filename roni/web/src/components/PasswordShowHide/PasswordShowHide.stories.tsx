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

import { Form } from '@redwoodjs/forms'

import PasswordShowHide from './PasswordShowHide'

const meta: Meta<typeof PasswordShowHide> = {
  component: PasswordShowHide,
}

export default meta

type Story = StoryObj<typeof PasswordShowHide>

export const Primary: Story = {
 render: () => (
  <Form>
    <PasswordShowHide label="Password" name="password" />
  </Form>
 )
}
