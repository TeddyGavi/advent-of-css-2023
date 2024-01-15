import { render } from '@redwoodjs/testing/web'

import Slideout from './Slideout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Slideout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Slideout />)
    }).not.toThrow()
  })
})
