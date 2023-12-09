import { useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'

const Nav = () => {
  const [isHamburger, setIsHamburger] = useState(true)

  const toggleNav = () => {
    setIsHamburger((prevValue) => !prevValue)
  }

  return (
    <>
      <div
        className={`flex h-screen w-[460px] flex-col justify-between bg-supernova px-12 pb-12 pt-[120px] transition-transform duration-500 ${
          isHamburger ? '-translate-x-[120%]' : 'translate-x-0'
        }`}
      >
        <nav className="top-nav ">
          <ul>
            <li className="mb-4">
              <a href="/about">About</a>
            </li>
            <li className="mb-4">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="mb-4">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <nav className="top-nav ">
          <div className="mb-2 font-condensed text-2xl uppercase text-spanishGreen">
            Past Events
          </div>
          <ul>
            <li>
              <a href="#">
                <div className="text-5xl font-bold">Smith Christmas</div>
                <div className="text-xl font-bold">December 23, 2023</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="absolute left-8 top-6">
        <Hamburger isHamburger={isHamburger} toggleNav={toggleNav} />
      </div>
    </>
  )
}

export default Nav
