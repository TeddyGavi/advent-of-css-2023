import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RsvpAcceptPage = () => {
  return (
    <>
      <MetaTags title="RsvpAccept" description="RsvpAccept page" />

      <h1>RsvpAcceptPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RSVPAcceptPage/RSVPAcceptPage.tsx</code>
      </p>
      <p>
        My default route is named <code>rsvpAccept</code>, link to me with `
        <Link to={routes.rsvpAccept()}>RsvpAccept</Link>`
      </p>
    </>
  )
}

export default RsvpAcceptPage
