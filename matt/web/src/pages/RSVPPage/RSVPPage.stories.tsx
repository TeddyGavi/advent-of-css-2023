import type { Meta, StoryObj } from '@storybook/react'

import RsvpPage from './RSVPPage'

const meta: Meta<typeof RsvpPage> = {
  component: RsvpPage,
}

export default meta

type Story = StoryObj<typeof RsvpPage>

export const Primary: Story = {}
