import { FC, ChangeEvent } from 'react'
import '../style.css'

interface Props {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  placeholder: string
  error: boolean
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  name: string
}

const InputText: FC<Props> = ({
  type,
  label,
  value,
  placeholder,
  error,
  disabled,
  name,
  onChange
}) => {
  return (
    <div className="Input">
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {error && <p className="Error">Input filed can't be empty!</p>}
    </div>
  )
}

export default InputText;