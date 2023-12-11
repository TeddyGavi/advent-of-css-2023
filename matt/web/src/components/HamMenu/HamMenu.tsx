const HamMenu = ({ isClicked, toggleNav }) => {
  return (
    <button
      className="flex h-[58px] w-[68px] flex-col items-center justify-center bg-supernova"
      onClick={() => toggleNav()}
    >
      <div
        className={`absolute h-[3px] w-12  bg-black transition-transform ${
          isClicked ? '-translate-y-3' : 'rotate-45'
        }`}
      />
      <div className={`h-[3px] w-12 bg-black ${isClicked ? '' : 'hidden'}`} />
      <div
        className={`absolute h-[3px] w-12 bg-black transition-transform ${
          isClicked ? 'translate-y-3' : '-rotate-45'
        }`}
      />
    </button>
  )
}

export default HamMenu
