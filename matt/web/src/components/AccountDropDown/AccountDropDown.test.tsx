import { render } from '@redwoodjs/testing/web'

import AccountDropDown from './AccountDropDown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AccountDropDown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountDropDown />)
    }).not.toThrow()
  })
})
