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
        <a className="-z-10" href="#">
          {' '}
          <img
            className="fixed top-20  scale-[80%] "
            src="/images/logo__secret-santa.svg"
            alt="Secret Sanata"
          />
        </a>
        {children}
        <AccountDropDown />
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout
