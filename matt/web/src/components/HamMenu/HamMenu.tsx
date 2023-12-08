import { useState } from 'react'

const HamMenu = () => {
  const [click, setClicked] = useState(false)

  const handleClick = () => {
    setClicked((prev) => !prev)
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center gap-3 bg-supernova px-[10px] py-[15px]"
    >
      <span
        className={`block h-[2px] w-[49px] bg-black transition-all duration-300 ease-out ${
          click ? 'origin-top-left translate-y-1/2 rotate-45 transform' : ''
        }`}
      ></span>
      <span
        className={`h-[2px] w-[49px] bg-black transition-all duration-300 ease-out ${
          click ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`h-[2px] w-[49px] bg-black transition-all duration-300 ease-out ${
          click
            ? 'origin-bottom-left -translate-y-1/2  -rotate-45 transform'
            : ''
        }`}
      ></span>
    </button>
  )
}

export default HamMenu
