import { useState } from 'react'

const HamMenu = () => {
  const [click, setClicked] = useState(false)

  const handleClick = () => {
    setClicked((prev) => !prev)
  }

  return (
    <button
      onClick={handleClick}
      className="relative h-[58px] w-[69px] bg-supernova "
    >
      <div
        className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform   px-[10px] py-[15px] ${
          click ? ' flex' : 'flex  flex-col items-center justify-between'
        }`}
      >
        <span
          className={` h-[2px] w-[49px] bg-black transition-all duration-300 ease-out ${
            click ? 'absolute top-1/2 rotate-45  ' : 'block '
          }`}
        ></span>
        <span
          className={`h-[2px]  w-[49px] bg-black transition-all duration-300 ease-out ${
            click ? 'hidden opacity-0' : 'block opacity-100'
          }`}
        ></span>
        <span
          className={`h-[2px] w-[49px]  bg-black transition-all duration-300 ease-out ${
            click ? 'absolute top-1/2 -rotate-45' : ' block'
          }`}
        ></span>
      </div>
    </button>
  )
}

export default HamMenu
