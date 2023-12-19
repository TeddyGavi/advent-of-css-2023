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

import ModalComponent from './Modal'

const meta: Meta<typeof ModalComponent> = {
  component: ModalComponent,
}

export default meta

type Story = StoryObj<typeof ModalComponent>

export const Error: Story = {
  render: () => (
    <ModalComponent status="error">
      <p>Something</p>
    </ModalComponent>
  ),
}

export const Success: Story = {
  render: () => (
    <ModalComponent status="success">
      <p>Something</p>
    </ModalComponent>
  ),
}

export const Warning: Story = {
  render: () => (
    <ModalComponent status="warning">
      <p>Something</p>
    </ModalComponent>
  ),
}
