import { useState } from 'react'
import { Label, PasswordField, TextField } from '@redwoodjs/forms'
import Icon from '../Icon/Icon'

const PasswordShowHide = ({label, name, ...rest}) => {
const [isPasswordVisible, setIsPasswordVisible] = useState(false)

const handleClick = () => {
  setIsPasswordVisible(prevValue => !prevValue)
}
  return (
    <div className="field relative">
      <Label name={name}>{label}</Label>
      {isPasswordVisible ?
        (<TextField name={name} placeholder="" {...rest} />)
        :
        (<PasswordField name={name} placeholder="" {...rest} />)
      }
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={handleClick}
      >
      {isPasswordVisible ? <Icon id="eyeOpened" size={32} /> : <Icon id="eyeClosed" size={32} />}

</button>
    </div>
  )
}

export default PasswordShowHide;
