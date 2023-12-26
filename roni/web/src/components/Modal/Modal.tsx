
import Overlay from '../Overlay/Overlay'
import Icon from '../Icon/Icon'

const Modal = ({ children, status }) => {
  return (
    <div className="w-sceen center fixed inset-0 h-screen">
      <Overlay />
      <div className={`relative w-full max-w-[735px] border-[6px] border-white px-20 py-12  status-${status}`}>
        <button className='absolute right-4 top-6'>
        <Icon id="close" size={32}/>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
