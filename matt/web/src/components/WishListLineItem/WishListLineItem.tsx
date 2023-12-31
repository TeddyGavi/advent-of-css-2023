import RoundButton from '../RoundButton/RoundButton'

const WishListLineItem = ({
  addToWishList,
  removeFromWishList,
  items,
  index,
}) => {
  return (
    <div className="field relative mx-auto flex gap-4">
      <div className="absolute left-2 top-1/4 font-handwriting text-xl">
        {index + 1}
      </div>
      <div className="flex flex-col gap-2">
        <input
          id="item"
          className="px-2"
          type="text"
          placeholder="Wish List Item"
        ></input>
        <div className="flex h-[50px] justify-end">
          <div className="px-4">
            <svg
              width="26"
              height="29"
              viewBox="0 0 26 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H4V25H25.5V29H0V0Z"
                fill="#008A52"
              />
            </svg>
          </div>
          <input
            id="url"
            style={{ height: '50px' }}
            className=""
            type="text"
          ></input>
          <label
            style={{
              position: 'absolute',
              left: '60px',
              top: '75%',
              fontSize: 'inherit',
            }}
            htmlFor="url"
          >
            URL
          </label>
        </div>
      </div>
      {items && items.length - 1 === index ? (
        <RoundButton
          clickHandler={addToWishList}
          type="submit"
          id="plus"
          status="success"
        ></RoundButton>
      ) : (
        <RoundButton
          clickHandler={() => removeFromWishList(index)}
          type="submit"
          id="close"
          status="error"
        />
      )}
    </div>
  )
}

export default WishListLineItem
