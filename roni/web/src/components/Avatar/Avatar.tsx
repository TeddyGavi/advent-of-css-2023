import Icon from '../Icon/Icon'
import Indicator from '../Indicator/Indicator'

interface AvatarProps {
  avatar?: string
  alt?: string
  letter?: string
  icon?: string
  isHatShowing?: boolean
  indicator?: 'success' | 'warning' | 'error'
}

const Avatar = ({ avatar, alt, letter, icon, isHatShowing, indicator }: AvatarProps) => {
  return (
    <div className='relative inline-block'>
     {avatar && <img
        src={avatar}
        alt={alt}
        className="h-18 w-18 rounded-full border-avatar border-white object-cover"
      />}

      {letter && !avatar  && (
      <div className="center border-white same">
        {letter}
      </div>
      )}

      {icon && !avatar && !letter && (
       <div className="center border-vistaBlue same">
        <Icon id={icon} size={32} />
      </div>
      )}

      {isHatShowing && (

        <img
          src="/images/santa-hat.png"
          alt="santa hat"
          className="absolute -right-[15px] -top-[19px]"
        />

      )}

      {indicator && (
         <div className='absolute bottom-0 right-0'>
          <Indicator status={indicator}/>
          </div>
      )}
    </div>
  )
}

export default Avatar
