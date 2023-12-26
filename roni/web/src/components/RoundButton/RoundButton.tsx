import Icon from '../Icon/Icon'

interface RoundButtonProps {
  status: 'success' | 'warning' | 'error'
}

const RoundButton = ({ status }: RoundButtonProps) => {
  return (
    <button className={`center h-16 w-16 rounded-full border-2 border-white status-${status}`}>
      <Icon id="plus" />
    </button>
  )
}

export default RoundButton
