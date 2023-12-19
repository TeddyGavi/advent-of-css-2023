import AccountDropDown from 'src/components/AccountDropDown/AccountDropDown'
import Footer from 'src/components/Footer/Footer'
import Navigation from 'src/components/Navigation/Navigation'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <>
      <main className="min-w-screen  min-h-screen bg-silverTree bg-interior bg-[top_left] bg-no-repeat">
        <Navigation />
        <aside>
          <a className="-z-10" href="#">
            {' '}
            <img
              className=" absolute top-20 -z-10 scale-[80%] "
              src="/images/logo__secret-santa.svg"
              alt="Secret Sanata"
            />
          </a>
        </aside>
        <div>{children}</div>
        <AccountDropDown />
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout
