import { render } from '@redwoodjs/testing/web'

import RsvpPage from './RsvpPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RsvpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RsvpPage />)
    }).not.toThrow()
  })
})
