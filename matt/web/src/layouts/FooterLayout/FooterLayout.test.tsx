import { render } from '@redwoodjs/testing/web'

import FooterLayout from './FooterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FooterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooterLayout />)
    }).not.toThrow()
  })
})
