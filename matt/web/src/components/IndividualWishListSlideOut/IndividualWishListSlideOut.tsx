import { useState } from 'react'
import InteriorLayout from 'src/layouts/InteriorLayout/InteriorLayout'

const IndividualWishListSlideOut = () => {
  const [showWishList, setShowWishList] = useState(true)
  return (
    <aside
      className={`flex h-screen flex-col bg-spanishGreen p-10 font-condensed text-white transition-transform duration-500 ${
        !showWishList ? 'translate-x-[120%]' : 'translate-x-0'
      }`}
    >
      <button
        onClick={() => setShowWishList((prev) => !prev)}
        className="flex h-[58px] w-[68px] flex-col items-center justify-center self-end"
      >
        <div
          className={`absolute h-[3px] w-12 rotate-45  rounded-full bg-black transition-transform `}
        />
        <div
          className={`absolute h-[3px] w-12 -rotate-45 rounded-full bg-black transition-transform `}
        />
      </button>
      <div className="flex items-center justify-between">
        <h1 className=" text-7xl uppercase">Wish List</h1>
        <button className="my-4 h-8 w-28 rounded-full bg-supernova text-center font-sans text-sm uppercase text-black">
          Edit
        </button>
      </div>
    </aside>
  )
}

export default IndividualWishListSlideOut
