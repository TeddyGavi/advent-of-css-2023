import { render } from '@redwoodjs/testing/web'

import AcceptPage from './AcceptPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AcceptPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AcceptPage />)
    }).not.toThrow()
  })
})
