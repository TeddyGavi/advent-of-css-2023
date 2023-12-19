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

import RoundButton from './RoundButton'

const meta: Meta<typeof RoundButton> = {
  component: RoundButton,
}

export default meta

type Story = StoryObj<typeof RoundButton>

export const Succes: Story = {
  render: () => <RoundButton status="success" id="plus" />,
}
export const Warning: Story = {
  render: () => <RoundButton status="warning" id="plus" />,
}
export const Error: Story = {
  render: () => <RoundButton status="error" id="close" />,
}
