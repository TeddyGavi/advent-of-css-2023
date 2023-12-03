import Icon from '../icons/Icon'
import AvatarIndicator from '../AvatarIndicator/AvatarIndicator'

const AvatarImgIndicator = ({ image, indicator }) => {
  return (
    <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border border-spanishGreen bg-white  font-sans text-4xl font-bold text-white">
      <img
        alt="avatar of user"
        src={`/images/AVATAR-PLACEHOLDERS/${image}`}
        className="flex h-[90%] w-[90%] items-center justify-center rounded-full "
      />
      <div className="absolute bottom-0 right-0">
        <AvatarIndicator status={indicator} />
      </div>
    </div>
  )
}

export default AvatarImgIndicator
