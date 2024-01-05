import { render } from '@redwoodjs/testing/web'

import WishListCard from './WishListCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WishListCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WishListCard />)
    }).not.toThrow()
  })
})
