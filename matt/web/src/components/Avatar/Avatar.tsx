const Avatar = ({ userName }) => {
  return (
    <div className="flex h-[68px] w-[68px] items-center justify-center  rounded-full bg-spanishGreen font-sans text-4xl font-bold text-white ring-[1px] ring-spanishGreen ring-offset-4">
      {userName[0].toUpperCase()}
    </div>
  )
}

export default Avatar
