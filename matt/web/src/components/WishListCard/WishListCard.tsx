const WishListCard = () => {
  return (
    <div className="flex bg-spanishGreen text-white">
      <span className="mr-4  h-full  font-handwriting text-3xl">1</span>
      <div>
        <div className="flex items-center justify-between font-sans text-lg font-bold ">
          <div className="py-5 text-3xl">iPhone 15</div>
          <button className="h-8 w-28 rounded-full bg-cruseo text-center  text-sm font-bold uppercase ">
            Details
          </button>
        </div>
        <div className=" flex justify-evenly border border-padua ">
          <div className="flex flex-col justify-evenly gap-4 p-4">
            <div>APPLE.COM</div>
            <div className="text-2xl font-bold">
              iPhone 15 and iPhone 15 Plus
            </div>
            <p>
              iPhone 15 and iPhone 15 Plus. Dynamic Island. 48MP Main camera
              with 2x Telephoto. All-day battery life. USB-C. 6.1” and 6.7”
              sizes.
            </p>
          </div>
          <img
            src="images/image-iphone.png"
            alt="detail photo of wish list item"
          />
        </div>
      </div>
      <hr className="my-8 " />
    </div>
  )
}

export default WishListCard
