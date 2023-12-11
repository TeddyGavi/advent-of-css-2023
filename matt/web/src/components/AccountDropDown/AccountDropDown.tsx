import { useState } from 'react'
import AvatarImgOnly from '../AvatarImgOnly/AvatarImgOnly'
import Icon, { colors } from '../icons/Icon'

const AccountDropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const toggleDropDown = () => {
    setIsDropDownOpen((prev) => !prev)
  }

  return (
    <>
      <div className="z-10 flex w-60 items-center justify-around gap-3 font-sans ">
        <button
          onClick={toggleDropDown}
          className={`transition-transform duration-300 ${
            isDropDownOpen ? '' : '-rotate-90 '
          }`}
        >
          <Icon id="chevron" color={colors.black} />
        </button>
        <AvatarImgOnly image="avatar-05.png" />
        <div className="flex flex-col items-center justify-center ">
          <div>Logged in as</div>
          <div className="text-lg font-bold">Cody Fisher</div>
        </div>
      </div>
      <div
        className={`absolute left-12 top-28 -z-10 h-40 w-48 translate-y-0 transform transition-all duration-500 ${
          isDropDownOpen
            ? 'translate-y-0 opacity-100'
            : ' -translate-y-1/3 opacity-0'
        }`}
      >
        <div className="absolute  -top-3 left-8 -z-20 h-6 w-6 rotate-45"></div>
        <div className="my-auto flex h-full flex-col items-start justify-between px-4 py-6 font-condensed text-3xl uppercase">
          <ul className="dropdown-list">
            <li>
              <Icon id="user" color={colors.pastelMagenta} size={30} />
              <a href="#">My Account</a>
            </li>
            <li>
              <Icon id="calendar" color={colors.pastelMagenta} size={30} />
              <a href="#">My Event</a>
            </li>
            <li>
              <Icon id="logout" color={colors.pastelMagenta} size={30} />
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AccountDropDown
