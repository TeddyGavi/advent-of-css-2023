import { render } from '@redwoodjs/testing/web'

import HamMenu from './HamMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HamMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HamMenu />)
    }).not.toThrow()
  })
})
