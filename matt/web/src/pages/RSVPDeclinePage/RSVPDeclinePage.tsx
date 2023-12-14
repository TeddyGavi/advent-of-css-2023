import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

const RsvpDeclinePage = () => {
  return (
    <>
      <MetaTags title="RsvpDecline" description="RsvpDecline page" />
      <AuthLayout>
        <div className="flex h-full flex-col items-center justify-center p-2 text-center font-condensed uppercase tracking-wide text-white">
          <h1 className="relative text-7xl">
            <span className="absolute -left-[30%] top-[40%]  w-1/4 border-b-8 border-b-white"></span>
            Thanks
            <span className="absolute -right-[30%] top-[40%]  w-1/4 border-b-8 border-b-white"></span>
          </h1>
          <h2 className="text-8xl">You'll be missed</h2>
        </div>
      </AuthLayout>
    </>
  )
}

export default RsvpDeclinePage
