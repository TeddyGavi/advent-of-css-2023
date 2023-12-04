import { useRef, useState } from 'react'

type FormField = {
  label?: string
  type: string
  id: string
  placeholder?: string
}

const FormField = ({ label, type, id, placeholder = '' }: FormField) => {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!inputRef.current.value) {
      setIsFocused(false)
    }
  }

  return (
    <div className="relative flex h-[100px] w-full items-center border  text-2xl font-bold uppercase">
      <label
        className={`absolute h-fit w-fit p-5 font-handwriting transition-all duration-300 ${
          isFocused || (inputRef.current && inputRef.current.value)
            ? ' scale-80 -translate-y-8 transform text-sm'
            : 'translate-y-0 scale-100 transform'
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        className=" h-full w-full p-8 font-normal   "
        placeholder={placeholder}
        id={id}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      ></input>
    </div>
  )
}

export default FormField
