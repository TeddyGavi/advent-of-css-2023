import AvatarImgOnly from '../AvatarImgOnly/AvatarImgOnly'
import Icon, { colors } from '../icons/Icon'

const AccountDropDown = () => {
  return (
    <>
      <div className="flex w-60 items-center justify-around gap-3 font-sans">
        <Icon id="chevron" color={colors.black} />
        <AvatarImgOnly image="avatar-05.png" />
        <div className="flex flex-col items-center justify-center ">
          <div>Logged in as</div>
          <div className="text-lg font-bold">Cody Fisher</div>
        </div>
      </div>
      <div className="absolute  left-12 top-28 h-40 w-48 border bg-supernova">
        <div className="absolute  -top-3 left-8 -z-10 h-6 w-6 rotate-45 border border-red-900"></div>
        <div className="my-auto flex h-full flex-col items-start justify-between px-4 py-6 font-condensed text-2xl uppercase">
          <div className="dropdown-list">
            <Icon id="user" color={colors.pastelMagenta} size={20} />
            My Account
          </div>
          <div className="dropdown-list">
            <Icon id="calendar" color={colors.pastelMagenta} size={20} />
            My Event
          </div>
          <div className="dropdown-list">
            <Icon id="logout" color={colors.pastelMagenta} size={20} />
            Logout
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountDropDown
