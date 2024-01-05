const WishListCard = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>1 iPhone 15</div>
        <div>details button</div>
      </div>
      <div className="flex justify-evenly border border-padua ">
        <div className="p-4">
          <div>Url to purchase</div>
          <div>title</div>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
        <img
          src="images/image-iphone.png"
          alt="detail photo of wish list item"
        />
      </div>
    </div>
  )
}

export default WishListCard
