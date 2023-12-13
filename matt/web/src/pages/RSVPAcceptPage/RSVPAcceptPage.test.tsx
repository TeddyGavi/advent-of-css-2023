import { render } from '@redwoodjs/testing/web'

import RsvpAcceptPage from './RsvpAcceptPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RsvpAcceptPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RsvpAcceptPage />)
    }).not.toThrow()
  })
})
