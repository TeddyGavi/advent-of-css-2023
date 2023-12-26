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

import Modal from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const Success: Story = {
  render: () => <Modal status="success"><p>Hello</p></Modal>,
}

export const Error: Story = {
  render: () => <Modal status="error"><p>Darn!</p></Modal>,
}

export const Warning: Story = {
  render: () => <Modal status="warning"><p>Warn</p></Modal>,
}