import { Link } from '@redwoodjs/router'
import { useEffect, useState } from 'react'

type FooterLayoutProps = {
  children?: React.ReactNode
}

const FooterLayout = () => {
  const [footerVisible, setFooterVisible] = useState(false)
  useEffect(() => {
    const revealHeight = Math.floor(window.innerHeight * 0.33)
    const revealFooter = () => {
      setFooterVisible(window.scrollY > revealHeight)
    }
    window.addEventListener('scroll', revealFooter)
    return () => {
      window.removeEventListener('scroll', revealFooter)
    }
  }, [])
  return (
    <footer
      id="footer"
      className={`min-[1440px] fixed bottom-0 left-0 -z-10 flex min-h-fit w-full flex-col items-center justify-center bg-acadia py-6 dark:bg-blackPearl`}
    >
      <img
        className="h-28 w-28 fill-scotchMist"
        style={{ fill: '#efe9cb' }}
        src="/images/logo__secret-santa.svg"
        alt="Secret Santa"
      />
      <div className="flex flex-col items-center space-y-1 font-sans text-xs font-bold tracking-wide text-scotchMist">
        <p>
          Copyright &copy; <span>{new Date().getFullYear()}</span>{' '}
          <span className="underline underline-offset-4">
            This Year Belong to Us, LLC.
          </span>
          All Rights Revserved
        </p>
        <div className="underline underline-offset-4">
          <Link href="#" to="/">
            {' '}
            Terms &amp; Conditions
          </Link>
          <span className="mx-2 inline-flex items-center justify-center no-underline">
            .
          </span>
          <Link href="#" to="/">
            {' '}
            Privacy Policy
          </Link>
          <span className="mx-2 inline-flex items-center justify-center no-underline">
            .
          </span>
          <Link href="#" to="/">
            {' '}
            Disclaimers
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterLayout
