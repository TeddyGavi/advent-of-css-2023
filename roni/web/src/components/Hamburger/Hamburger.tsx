import React, { useState } from 'react'
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center bg-supernova py-[15px] px-[10px] gap-3.5"
    >
      <span
        className={`block h-[3px] w-12 rounded-sm bg-black
                    transition-all duration-300 ease-out ${
                      isOpen ? 'translate-y-5 rotate-45' : '-translate-y-0.5'
                    }`}
      ></span>
      <span
        className={`my-0.5 block h-[3px] w-12 rounded-sm
                    bg-black transition-all duration-300 ease-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
      ></span>
      <span
        className={`block h-[3px] w-12 rounded-sm bg-black
                    transition-all duration-300 ease-out ${
                      isOpen ? '-translate-y-5 -rotate-45' : 'translate-y-0.5'
                    }`}
      ></span>
    </button>
  )
}

export default Hamburger
