import { render } from '@redwoodjs/testing/web'

import RsvpDeclinePage from './RsvpDeclinePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RsvpDeclinePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RsvpDeclinePage />)
    }).not.toThrow()
  })
})
