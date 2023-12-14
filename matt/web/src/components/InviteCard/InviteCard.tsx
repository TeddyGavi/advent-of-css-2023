import AvatarImgIndicator, {
  IAvatarImgIndicator,
  indicatorStatus,
} from '../AvatarImgIndicator/AvatarImgIndicator'
import Icon, { colors } from '../icons/Icon'

interface IInviteCard extends IAvatarImgIndicator {
  name?: string
  email?: string
}

const InviteCard = ({
  image = 'avatar-09.png',
  indicator = indicatorStatus.question,
  name = 'Wade Warren',
  email = 'wade.warren@example.com',
}: IInviteCard) => {
  return (
    <div className={`relative flex  h-28 w-[416px] bg-white`}>
      <div className="absolute  -left-3 flex h-full flex-col items-center justify-center">
        <AvatarImgIndicator image={image} indicator={indicator} />
      </div>
      <button onClick={() => null} className="absolute right-0 ">
        <Icon id="close" color={colors.bombay} />
      </button>
      <div className="flex h-full w-full flex-col items-start justify-center  pl-20 font-sans text-2xl font-bold">
        {name}
        <p className="font-sans text-sm font-normal">{email}</p>
      </div>
    </div>
  )
}

export default InviteCard
