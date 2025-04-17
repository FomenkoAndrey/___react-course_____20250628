import { ChangeEvent, Ref } from 'react'

interface InputFieldProps {
  id: string
  type?: string
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeTextarea?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
  required?: boolean
  textarea?: boolean
  value?: string | number
  label?: string
  ref?: Ref<HTMLInputElement>
}

const InputField = ({
  id,
  type = 'text',
  onChangeInput,
  onChangeTextarea,
  placeholder,
  required = true,
  textarea = false,
  value,
  label
}: InputFieldProps) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      {textarea ? (
        <textarea
          className="form-control"
          id={id}
          onChange={onChangeTextarea}
          placeholder={placeholder}
          required={required}
          value={value}
        />
      ) : (
        <input
          className="form-control"
          id={id}
          type={type}
          onChange={onChangeInput}
          placeholder={placeholder}
          required={required}
          value={value}
        />
      )}
    </div>
  )
}

export default InputField
