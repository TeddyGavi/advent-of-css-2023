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
      <nav className="top-nav text-6xl uppercase">
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Our Event</a>
          </li>
          <li>
            <a href="#">My Wish List</a>
          </li>
        </ul>
      </nav>
      <nav className="bottom-nav">
        <div className="mb-2 font-condensed text-5xl uppercase text-spanishGreen">
          Past Events
        </div>
        <ul>
          <li>
            <a href="#">
              <div className="text-2xl font-bold">Charlie Brown Christmas</div>
              <div>December 23, 2023</div>
            </a>
          </li>{' '}
        </ul>
      </nav>
      <div className="absolute left-6 top-8">
        <HamMenu toggleNav={toggleNav} isClicked={isClicked}></HamMenu>
      </div>
    </div>
  )
}

export default Navigation
