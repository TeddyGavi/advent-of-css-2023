import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PasswordFormField from 'src/components/PasswordFormField/PasswordFormField'
import Icon, { colors } from 'src/components/icons/Icon'
import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

const RsvpAcceptPage = () => {
  return (
    <>
      <MetaTags title="RsvpAccept" description="RsvpAccept page" />
      <AuthLayout>
        <div className="flex h-full flex-col items-center justify-center p-2 text-center font-condensed uppercase tracking-wide text-white">
          <h1 className="relative text-7xl">
            <span className="absolute -left-[30%] top-[40%]  w-1/4 border-b-8 border-b-white"></span>
            Awesome
            <span className="absolute -right-[30%] top-[40%]  w-1/4 border-b-8 border-b-white"></span>
          </h1>
          <h2 className="text-8xl">Sign Up</h2>
        </div>
        <div className=" mx-auto flex w-10/12 flex-col items-center justify-center gap-6">
          <PasswordFormField></PasswordFormField>
          <div className="flex h-28 w-full border-spacing-0.5 items-center justify-between border-4 border-dashed px-6 text-white">
            <div className="font-handwriting text-xl uppercase">Avatar</div>
            <div className="font-sans text-padua opacity-90">
              Drag and Drop an Image
            </div>
            <Icon id="upload" color={colors.white} />
          </div>
          <button className="my-4 h-16 w-full rounded-full bg-supernova text-center font-handwriting text-xl uppercase">
            Submit
          </button>
        </div>
      </AuthLayout>
    </>
  )
}

export default RsvpAcceptPage
