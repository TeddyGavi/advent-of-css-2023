import { render } from '@redwoodjs/testing/web'

import IndividualWishListSlideOut from './IndividualWishListSlideOut'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IndividualWishListSlideOut', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndividualWishListSlideOut />)
    }).not.toThrow()
  })
})
