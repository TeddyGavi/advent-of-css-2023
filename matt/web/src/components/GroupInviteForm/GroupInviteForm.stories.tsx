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

import GroupInviteForm from './GroupInviteForm'

const meta: Meta<typeof GroupInviteForm> = {
  component: GroupInviteForm,
}

export default meta

type Story = StoryObj<typeof GroupInviteForm>

export const Primary: Story = {}
