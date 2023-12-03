import { render } from '@redwoodjs/testing/web'

import AvatarImgOnly from './AvatarImgOnly'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvatarImgOnly', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvatarImgOnly />)
    }).not.toThrow()
  })
})
