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

import Image from './Image'

const meta: Meta<typeof Image> = {
  component: Image,
}

export default meta

type Story = StoryObj<typeof Image>

export const First: Story = {
  args: {
    id: 'avatar-01.png',
  },
}
export const Second: Story = {
  args: {
    id: 'avatar-02.png',
  },
}
export const Third: Story = {
  args: {
    id: 'avatar-03.png',
  },
}
export const Fourth: Story = {
  args: {
    id: 'avatar-04.png',
  },
}
export const Fifth: Story = {
  args: {
    id: 'avatar-05.png',
  },
}
export const Sixth: Story = {
  args: {
    id: 'avatar-06.png',
  },
}
export const Seven: Story = {
  args: {
    id: 'avatar-07.png',
  },
}
export const Eighth: Story = {
  args: {
    id: 'avatar-08.png',
  },
}
export const Nineth: Story = {
  args: {
    id: 'avatar-019.png',
  },
}