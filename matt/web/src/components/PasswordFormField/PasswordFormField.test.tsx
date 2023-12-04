import { render } from '@redwoodjs/testing/web'

import PasswordFormField from './PasswordFormField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordFormField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordFormField />)
    }).not.toThrow()
  })
})
