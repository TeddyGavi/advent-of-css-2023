import { render } from '@redwoodjs/testing/web'

import WishlistField from './WishlistField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WishlistField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WishlistField />)
    }).not.toThrow()
  })
})
