import { render } from '@redwoodjs/testing/web'

import AvatarImgIndicator from './AvatarImgIndicator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvatarImgIndicator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvatarImgIndicator />)
    }).not.toThrow()
  })
})
