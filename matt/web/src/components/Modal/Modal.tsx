import { ReactNode, useEffect, useRef, useState } from 'react'
import Overlay from '../Overlay/Overlay'
import Icon from '../icons/Icon'
interface Props {
  children: ReactNode
  status: 'success' | 'warning' | 'error'
}

const statusMap = {
  success: 'bg-spanishGreen text-white',
  error: 'bg-orangeRed text-black',
  warning: 'bg-supernova text-white',
}

const Modal = ({ children, status }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)
  const fullStatus = statusMap[status]

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false)
    }
  }
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'escape') {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  return (
    <div className="center fixed inset-0  h-screen w-screen">
      <Overlay />
      <div
        ref={modalRef}
        className={`${
          //this needs to be negated, ! but status must be sent from parent component
          isModalOpen ? 'hidden' : 'relative'
        } bottom-[100%] mx-auto w-full max-w-[735px] translate-y-1/2 transform border-[6px] border-white px-20  py-12 ${fullStatus}}`}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute right-6 top-6"
        >
          <Icon id="close" size={32} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
