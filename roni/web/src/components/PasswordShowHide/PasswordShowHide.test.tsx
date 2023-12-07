import { render } from '@redwoodjs/testing/web'

import PasswordShowHide from './PasswordShowHide'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordShowHide', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordShowHide />)
    }).not.toThrow()
  })
})
