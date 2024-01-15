import RoundButton from '../RoundButton/RoundButton'
import {RoundButtonProps} from '../RoundButton/RoundButton'

interface WishlistFieldProps {
  name: string
  number: number
  roundButton: RoundButtonProps
}

const WishlistField = ({name, number, roundButton}: WishlistFieldProps) => {
  return (
    <div className="grid grid-cols-2 items-center gap-x-5 gap-y-2">
      <div className="flex items-center bg-white">
        <div>
          <label htmlFor={name} className="pl-8 pr-5 text-3xl">
            {number}
          </label>
        </div>
        <input
          type="text"
          name={name}
          id={name}
          className="font-bold outline-none"
        />
      </div>
      <RoundButton {...roundButton} />
      <div className="relative flex items-start gap-2 pl-8">
        <img src="/images/l-bracket.svg" alt="bracket" />
        <div className='flex items-center flex-1 bg-white'>
        <div className='px-6'>
        <label htmlFor={`${name}-url`}>url</label>
        </div>
        <input type="url" name={`${name}-url`} id="url"  className='short flex-1'/>
      </div>
      </div>
    </div>
  )
}

export default WishlistField
