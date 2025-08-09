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
  isTouched,
  placeholder,
  autoComplete = 'off',
  error,
  onChange,
  onBlur
}: InputFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
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
