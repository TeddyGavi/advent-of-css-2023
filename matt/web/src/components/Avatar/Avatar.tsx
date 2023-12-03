const Avatar = ({ userName }) => {
  return (
    <div className="flex h-[68px] w-[68px] items-center justify-center  rounded-full border border-spanishGreen bg-white font-sans text-4xl font-bold text-white">
      <div className="flex h-[90%] w-[90%] items-center justify-center rounded-full bg-spanishGreen">
        {userName[0].toUpperCase()}
      </div>
    </div>
  )
}

export default Avatar
