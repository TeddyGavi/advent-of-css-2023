import { MetaTags } from '@redwoodjs/web'
import PasswordFormField from 'src/components/PasswordFormField/PasswordFormField'
import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'
const LoginPage = () => {
  return (
    <AuthLayout>
      <MetaTags title="Login" description="Login page" />

      <div className="flex h-full flex-col items-center justify-center p-2">
        <h1 className="relative text-center  font-condensed text-7xl uppercase tracking-wide text-white">
          <span className="absolute -left-1/2 top-[40%]  w-1/3 border-b-8 border-b-white"></span>
          Login
          <span className="absolute -right-1/2 top-[40%]  w-1/3 border-b-8 border-b-white"></span>
        </h1>
        <form className="relative">
          <input
            id="username"
            type="text"
            required
            placeholder=""
            className="mb-4"
          />
          <label htmlFor="username">username</label>

          <PasswordFormField />
          <button className="my-4 h-16 w-full rounded-full bg-supernova text-center font-handwriting text-xl uppercase">
            Submit
          </button>
          <p className="text-center underline underline-offset-4 ">
            Need an Account?
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default LoginPage
