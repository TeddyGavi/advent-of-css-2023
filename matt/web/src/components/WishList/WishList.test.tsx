import { render } from '@redwoodjs/testing/web'

import WishList from './WishList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WishList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WishList />)
    }).not.toThrow()
  })
})
