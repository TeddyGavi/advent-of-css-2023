import { MetaTags } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const DeclinePage = () => {
  return (
    <>
      <MetaTags title="Decline" description="Decline page" />

      <HeaderWithRulers className='text-white' heading="Thanks"/>
      <h1 className='page-title'>You'll be missed!</h1>
    </>
  )
}

export default DeclinePage
