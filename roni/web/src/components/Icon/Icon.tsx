const Icon = ({ id,  size = 24 }) => {
  return (
    <svg width={size} height={size} fill="white">
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
