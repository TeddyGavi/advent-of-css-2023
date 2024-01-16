import { render } from '@redwoodjs/testing/web'

import Accoridan from './Accoridan'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Accoridan', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Accoridan />)
    }).not.toThrow()
  })
})
