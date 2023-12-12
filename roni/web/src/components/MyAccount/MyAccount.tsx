import { useState } from 'react'

// import { AnimatePresence, motion } from 'framer-motion'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'
const MyAccount = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownShowing((prevValue) => !prevValue)
  }
  return (
    <div >
      <button
        className="flex items-center gap-2 text-black dark:text-white"
        onClick={toggleDropdown}
      >
          <Icon id="chevron" />
        <Avatar avatar="/images/avatar-01.png" alt="Avatar" />
        <div className="text-left">
          <div className="text-sm">Logged in as</div>
          <div className="text-lg font-bold">Cody Fisher</div>
        </div>
      </button>


        {isDropdownShowing && (

            <div className="flex flex-col mt-4 ml-6 bg-white w-[200px] p-2">
              <div className='bg-white h-4 w-4 relative -top-4 left-4 rotate-45 over' />
              <div className='relative'>
              <div className='flex font-bold mb-4'>
                <div className="text-pastelMagenta -mt-1 mr-2">
                  <Icon id="user" size={32} />
                </div>
                My Account
              </div>
              <div className='flex font-bold mb-4'>
                <div className="text-pastelMagenta -mt-1 mr-2">
                  <Icon id="calendar" size={32} />
                </div>
                My Event
              </div>
              <div className='flex font-bold mb-4'>
                <div className="text-pastelMagenta -mt-1 mr-2">
                  <Icon id="logout" size={32} />
                </div>
                Logout
              </div>
            </div>
</div>
        )}

    </div>
  )
}

export default MyAccount
