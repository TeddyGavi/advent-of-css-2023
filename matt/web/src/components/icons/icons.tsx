export default function Icon({ id, size = 24 }) {
  return (
    <svg width={size} height={size}>
      <use href={`/sprite-icon/sprite-svg#${id}`}></use>
    </svg>
  )
}
