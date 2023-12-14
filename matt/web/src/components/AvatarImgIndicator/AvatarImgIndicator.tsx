import Icon from '../icons/Icon'
import AvatarIndicator from '../AvatarIndicator/AvatarIndicator'
import { DoNotDisturb } from './AvatarImgIndicator.stories'

export enum indicatorStatus {
  check = 'check',
  pending = 'minus',
  question = 'question',
}

export interface IAvatarImgIndicator {
  image: string
  indicator: indicatorStatus
}

const AvatarImgIndicator = ({ image, indicator }: IAvatarImgIndicator) => {
  return (
    <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border border-spanishGreen bg-white  font-sans text-4xl font-bold text-white">
      <img
        alt="avatar of user"
        src={`/images/AVATAR-PLACEHOLDERS/${image}`}
        className="flex h-[90%] w-[90%] items-center justify-center rounded-full "
      />
      <div className="absolute bottom-0 right-0">
        <AvatarIndicator status={indicator} />
      </div>
    </div>
  )
}

export default AvatarImgIndicator
