import { FormEvent } from 'react'
import AvatarIconOnly from '../AvatarIconOnly/AvatarIconOnly'
import { colors } from '../icons/Icon'
import InviteCard from '../InviteCard/InviteCard'
import { indicatorStatus } from '../AvatarImgIndicator/AvatarImgIndicator'

const GroupInviteForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit the form')
  }
  return (
    <>
      <div className=" font-handwriting text-xl uppercase text-white">
        Invite a friend or family member
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" mt-1 flex h-28 w-full items-center justify-between bg-spanishGreen p-4 "
      >
        <div className="relative">
          <input type="text" id="name"></input>
          <label className="text-spanishGreen" htmlFor="name">
            Name
          </label>
        </div>
        <div className="relative">
          <input type="email" id="email"></input>
          <label className="text-spanishGreen" htmlFor="email">
            email
          </label>
        </div>
        <button>
          <AvatarIconOnly
            iconId="plus"
            bgColor="bg-supernova"
            ringColor="ring-spanishGreen"
            iconColor={colors.black}
          />
        </button>
      </form>
      <div className=" my-12 grid w-full grid-cols-2 place-items-center gap-y-8">
        {Array.from({ length: 8 }, () => (
          <InviteCard
            image="avatar-09.png"
            indicator={indicatorStatus.pending}
          />
        ))}
        <InviteCard image="avatar-09.png" indicator={indicatorStatus.pending} />
      </div>
    </>
  )
}

export default GroupInviteForm
