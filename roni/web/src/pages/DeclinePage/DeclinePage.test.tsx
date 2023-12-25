import { render } from '@redwoodjs/testing/web'

import DeclinePage from './DeclinePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DeclinePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeclinePage />)
    }).not.toThrow()
  })
})
