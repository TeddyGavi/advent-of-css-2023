const AvatarImgOnly = ({ image }: { image: string }) => {
  return (
    <img
      alt="avatar of user"
      src={`/images/AVATAR-PLACEHOLDERS/${image}`}
      className="h-[68px] w-[68px] rounded-full ring-[1px] ring-spanishGreen ring-offset-4"
    />
  )
}

export default AvatarImgOnly
