import Icon, { colors } from '../icons/Icon'
const AvatarIconOnly = ({ iconId }: { iconId: string }) => {
  return (
    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-spanishGreen ring-4 ring-padua">
      <Icon id={iconId} size={24} color={colors.white}></Icon>
    </div>
  )
}

export default AvatarIconOnly
