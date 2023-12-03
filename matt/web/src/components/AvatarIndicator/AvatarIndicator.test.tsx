import { render } from '@redwoodjs/testing/web'

import AvatarIndicator from './AvatarIndicator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvatarIndicator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvatarIndicator />)
    }).not.toThrow()
  })
})
