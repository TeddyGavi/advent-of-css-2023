const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="fixed bottom-0 z-0 w-full py-20 bg-acadia dark:bg-blackPearl text-center">
      <img
        src="/images/logo__secret-santa--small.svg"
        alt="footer"
        className="relative mx-auto mb-16
"
      />
      <div className=" font-sans font-medium text-scotchMist">
        <p className="">
          Copyright &copy;2023.{year}. <a
          href="https://ahhacreative.com"
          target="_target"
          rel="noreferrer"
          className="underline hover:no-underline"
        >Ah Ha Creative, LLC</a>. All Rights Reserved.
        </p>
        <p>Terms &amp; Conditions . Privacy Policy . Disclaimers</p>
      </div>
    </footer>
  )
}

export default Footer
