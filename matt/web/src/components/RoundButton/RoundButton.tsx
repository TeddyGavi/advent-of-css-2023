import Icon, { IconId } from '../icons/Icon'

interface Props {
  status: 'success' | 'warning' | 'error'
  id: IconId['id']
}

const statusMap = {
  success: 'bg-spanishGreen text-white',
  error: 'bg-orangeRed text-white',
  warning: 'bg-supernova text-white',
}
const RoundButton = ({ status, id }: Props) => {
  const fullStatus = statusMap[status]
  return (
    <button
      className={`center h-16 w-16 items-center rounded-full border-2 border-white ${fullStatus}`}
    >
      <Icon id={id} />
    </button>
  )
}

export default RoundButton
