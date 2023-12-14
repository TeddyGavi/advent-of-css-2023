import { useState } from 'react'
import Icon from '../icons/Icon'

const PasswordFormField = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        required
        placeholder=""
      />
      <label>Password</label>
      <div
        onClick={togglePassword}
        className="absolute right-2 top-8 cursor-pointer"
      >
        <Icon id={showPassword ? 'eyeOpened' : 'eyeClosed'}></Icon>
      </div>
    </div>
  )
}

export default PasswordFormField
