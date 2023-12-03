import Icon from '../icons/Icon'

const AvatarImgIndicator = ({ image, indicator }) => {
  return (
    <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border border-spanishGreen bg-white  font-sans text-4xl font-bold text-white">
      <img
        alt="avatar of user"
        src={`/images/AVATAR-PLACEHOLDERS/${image}`}
        className="flex h-[90%] w-[90%] items-center justify-center rounded-full "
      />
      <div className="absolute z-10 h-[16px] w-[16px] bg-black"></div>
      <Icon id={indicator} />
    </div>
  )
}

export default AvatarImgIndicator
