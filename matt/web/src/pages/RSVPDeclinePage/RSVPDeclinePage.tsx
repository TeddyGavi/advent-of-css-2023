import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RsvpDeclinePage = () => {
  return (
    <>
      <MetaTags title="RsvpDecline" description="RsvpDecline page" />

      <h1>RsvpDeclinePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RSVPDeclinePage/RSVPDeclinePage.tsx</code>
      </p>
      <p>
        My default route is named <code>rsvpDecline</code>, link to me with `
        <Link to={routes.rsvpDecline()}>RsvpDecline</Link>`
      </p>
    </>
  )
}

export default RsvpDeclinePage
