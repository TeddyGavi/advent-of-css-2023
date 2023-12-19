import { render } from '@redwoodjs/testing/web'

import GroupInviteForm from './GroupInviteForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupInviteForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupInviteForm />)
    }).not.toThrow()
  })
})
