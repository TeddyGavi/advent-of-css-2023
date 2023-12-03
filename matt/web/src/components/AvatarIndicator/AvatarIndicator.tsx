import Icon, { colors } from '../icons/Icon'

type AvatarIndicator = {
  status: string
}

const statusMap = {
  check: 'spanishGreen',
  question: 'supernova',
  minus: 'orangeRed',
}

const colorVariants = {
  supernova: 'bg-supernova ring-supernova',
  spanishGreen: 'bg-spanishGreen ring-spanishGreen',
  orangeRed: 'bg-orangeRed ring-orangeRed',
}

const AvatarIndicator = ({ status }: AvatarIndicator) => {
  let iconColor: string = statusMap[status] === 'supernova' ? 'black' : 'white'
  return (
    <div
      className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ring-[.25px] ring-offset-2 ${
        colorVariants[statusMap[status]]
      }`}
    >
      <Icon id={status} size={16} color={colors[iconColor]} />
    </div>
  )
}

export default AvatarIndicator
