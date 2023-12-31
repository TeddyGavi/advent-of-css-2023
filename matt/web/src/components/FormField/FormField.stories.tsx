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

import FormField from './FormField'

const meta: Meta<typeof FormField> = {
  component: FormField,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FormField>

export const Primary: Story = {
  args: {
    id: 'input',
    type: 'email',
    label: 'Name',
  },
}
