import { render } from '@redwoodjs/testing/web'

import WishListLineItem from './WishListLineItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WishListLineItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WishListLineItem />)
    }).not.toThrow()
  })
})
