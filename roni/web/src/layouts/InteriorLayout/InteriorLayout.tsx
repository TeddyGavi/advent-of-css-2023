import Footer from 'src/components/Footer/Footer'
import MyAccount from 'src/components/MyAccount/MyAccount'
import Nav from 'src/components/Nav/Nav'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <>
      <main className="bg-silverTree dark:bg-nileBlue grid grid-cols-12 gap-x-5 ">
        <div className='col-span-4 pb-10'>
          <div className="fixed z-50">
            <Nav />
          </div>
          <img src="/images/bg__interior.svg" alt="Holiday Illustration" />
          <a href="#">
            <img
              src="/images/logo__secret-santa.svg"
              alt="Secret Santa"
              className="absolute top-[7vw] z-30 w-[25vw]"
            />
          </a>
        </div>
        <div className='col-span-8 pt-7 pr-12'>
          <div className="flex justify-end ">
            <MyAccount />
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout
