import Icon, { colors } from '../icons/Icon'
const AvatarIconOnly = ({
  iconId,
  size = 24,
  bgColor = 'bg-spanishGreen',
  totalSize = 68,
  ringColor = `ring-padua`,
  iconColor = colors.white,
}: {
  iconId: string
  size?: number
  bgColor?: string
  totalSize?: number
  ringColor?: string
  iconColor?: colors
}) => {
  const avatarSize = `h-[${totalSize}px] w-[${totalSize}px]`
  return (
    <div
      className={`flex ${
        avatarSize ? `h-[${totalSize}px] w-[${totalSize}px]` : ''
      } items-center justify-center rounded-full ${bgColor} ${ringColor} ring-4`}
    >
      <Icon id={iconId} size={size} color={iconColor}></Icon>
    </div>
  )
}

export default AvatarIconOnly
