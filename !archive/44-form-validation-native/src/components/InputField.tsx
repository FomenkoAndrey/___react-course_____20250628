import { type ChangeEvent, type FocusEvent } from 'react'

type InputFieldProps = {
  id: string
  name: string
  label: string
  type: string
  value: string
  error?: string
  isTouched?: boolean
  placeholder?: string
  autoComplete?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
}

const InputField = ({
  id,
  name,
  label,
  type,
  value,
  error,
  isTouched,
  placeholder,
  autoComplete = 'off',
  onChange,
  onBlur
}: InputFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isTouched && error && <div className="error">{error}</div>}
    </div>
  )
}

export default InputField
