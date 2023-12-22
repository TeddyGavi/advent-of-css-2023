import InteriorLayout from 'src/layouts/InteriorLayout/InteriorLayout'

const IndividualWishListSlideOut = () => {
  return (
    <aside className="flex h-screen flex-col bg-spanishGreen p-10 font-condensed text-white">
      <div className="flex items-center justify-between">
        <h1 className=" text-7xl  uppercase">Wish List</h1>
        <button className="text-md my-4 h-8 w-28 rounded-full bg-supernova text-center uppercase text-black">
          Edit
        </button>
      </div>
    </aside>
  )
}

export default IndividualWishListSlideOut
