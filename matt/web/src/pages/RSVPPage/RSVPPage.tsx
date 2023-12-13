import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AvatarIconOnly from 'src/components/AvatarIconOnly/AvatarIconOnly'
import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

const RsvpPage = () => {
  return (
    <>
      <MetaTags title="Rsvp" description="Rsvp page" />
      <AuthLayout>
        <div className="flex h-full flex-col items-center justify-center p-2 text-center font-condensed uppercase tracking-wide text-white">
          <h1 className="relative text-7xl">
            <span className="absolute -left-[30%] top-[40%]  w-1/4 border-b-8 border-b-white"></span>
            You're Invited to
            <span className="absolute -right-[30%] top-[40%]  w-1/4 border-b-8 border-b-white"></span>
          </h1>
          <h2 className="text-8xl">Smith Christmas</h2>
          <h3 className="font-handwriting text-xl ">December 23, 2023</h3>
        </div>
        <div className=" mx-auto mt-12 flex max-w-fit items-center justify-evenly gap-32 font-sans text-3xl font-bold">
          <Link to={routes.rsvpDecline()}>
            <div className="relative">
              <div className="absolute -left-[33px] flex h-28 max-h-max scale-[175%] items-center  ">
                <AvatarIconOnly
                  iconId="thumbsDown"
                  size={40}
                  bgColor="bg-orangeRed"
                  ringColor="ring-white"
                ></AvatarIconOnly>
              </div>
              <div className="flex h-28 w-[300px] items-center justify-start bg-white pl-20  ">
                Regretfully Decline
              </div>
            </div>
          </Link>
          <Link to={routes.rsvpAccept()}>
            <div className="relative">
              <div className="absolute -left-[33px] flex h-28 max-h-max scale-[175%] items-center  ">
                <AvatarIconOnly
                  iconId="thumbsUp"
                  size={40}
                  bgColor="bg-spanishGreen"
                  ringColor="ring-white"
                ></AvatarIconOnly>
              </div>
              <div className="flex h-28 w-[300px] items-center justify-end bg-white px-6">
                I'll Be There!
              </div>
            </div>
          </Link>
        </div>
      </AuthLayout>
    </>
  )
}

export default RsvpPage
