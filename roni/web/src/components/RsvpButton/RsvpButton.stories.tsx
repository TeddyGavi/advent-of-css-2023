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

import RsvpButton from './RsvpButton'

const meta: Meta<typeof RsvpButton> = {
  component: RsvpButton,
}

export default meta

type Story = StoryObj<typeof RsvpButton>

export const thumbsdown: Story = {
  args: {
    heading: 'Regretfull Decline',
    icon: 'thumbsDown',
    className: 'bg-orangeRed text-white',
  },
}
export const thumbsup: Story = {
  args: {
    heading: 'I\'ll Be There!',
    icon: 'thumbsUp',
    className: 'bg-spanishGreen text-white',
  },
}