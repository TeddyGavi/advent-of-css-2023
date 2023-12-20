import { useState } from 'react'
import FormField from '../FormField/FormField'
import WishListLineItem from '../WishListLineItem/WishListLineItem'

const WishList = () => {
  const handleItemToWishList = (item) => {
    setWishListItems((prev) => [item, ...prev])
  }
  const handleRemoveFromWishList = (indexOfItemToRemove: number) => {
    console.log(indexOfItemToRemove)
    const updatedWishList = wishListItems.filter(
      (_, i) => indexOfItemToRemove !== i
    )
    setWishListItems(updatedWishList)
  }
  const [wishListItems, setWishListItems] = useState([
    <WishListLineItem
      index={0}
      removeFromWishList={handleRemoveFromWishList}
      items={[]}
      addToWishList={handleItemToWishList}
    />,
  ])
  return (
    <div className="flex flex-col gap-6">
      {wishListItems.map((_, i) => (
        <WishListLineItem
          removeFromWishList={handleRemoveFromWishList}
          items={wishListItems}
          index={i}
          key={i}
          addToWishList={handleItemToWishList}
        />
      ))}

      <button className="my-4 h-16 w-full rounded-full bg-supernova text-center font-handwriting text-xl uppercase">
        Submit
      </button>
    </div>
  )
}

export default WishList
