import { render } from '@redwoodjs/testing/web'

import AvatarIconOnly from './AvatarIconOnly'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvatarIconOnly', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvatarIconOnly />)
    }).not.toThrow()
  })
})
