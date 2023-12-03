const AvatarImgSanta = ({ image }) => {
  return (
    <div className=" relative h-[68px] w-[68px]">
      <img
        alt="avatar of user"
        src={`/images/AVATAR-PLACEHOLDERS/${image}`}
        className="h-[68px] w-[68px] rounded-full ring-[1px] ring-spanishGreen ring-offset-4"
      />
      <img
        alt="santa hat"
        src={`/images/santa-hat.png`}
        className="absolute right-[-24px] top-[-24px]"
      />
    </div>
  )
}

export default AvatarImgSanta
