import { useState } from 'react'
import HamMenu from '../HamMenu/HamMenu'

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(true)

  const toggleNav = () => {
    setIsClicked((prev) => !prev)
  }
  return (
    <div
      className={`flex  ${
        isClicked ? '-translate-x-[120%]' : 'translate-x-0'
      }h-screen w-[460px] flex-col justify-between bg-supernova px-12 pb-12 pt-[160px] font-condensed transition-transform duration-500`}
    >
      <nav className="text-6xl uppercase">
        <ul>
          <li>Dashboard</li>
          <li>Our Event</li>
          <li>My Wish List</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li className="text-spanishGreen">Past Events</li>
          <li>
            <p className="text-xl lowercase">Balthis Christmas</p>
            <p className="font-sans text-sm">December 23, 2023</p>
          </li>
        </ul>
      </nav>
      <div className="absolute left-6 top-8">
        <HamMenu toggleNav={toggleNav} isClicked={isClicked}></HamMenu>
      </div>
    </div>
  )
}

export default Navigation
