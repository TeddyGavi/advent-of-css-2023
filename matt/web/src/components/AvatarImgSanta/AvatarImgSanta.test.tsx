import { render } from '@redwoodjs/testing/web'

import AvatarImgSanta from './AvatarImgSanta'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AvatarImgSanta', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvatarImgSanta />)
    }).not.toThrow()
  })
})
