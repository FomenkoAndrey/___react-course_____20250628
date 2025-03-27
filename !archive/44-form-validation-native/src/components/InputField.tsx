import { ChangeEvent, FocusEvent } from 'react'

type InputFieldProps = {
  id: string
  name: string
  label: string
  type: string
  value: string
  error?: string
  isTouched?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
  autoComplete?: string
  placeholder?: string
}

const InputField = ({
  id,
  name,
  label,
  type,
  value,
  error,
  isTouched,
  onChange,
  onBlur,
  autoComplete = 'off',
  placeholder
}: InputFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
      {isTouched && error && <p className="error">{error}</p>}
    </div>
  )
}

export default InputField
