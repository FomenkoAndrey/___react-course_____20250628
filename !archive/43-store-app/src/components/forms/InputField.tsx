import { ChangeEvent, Ref } from 'react'

interface InputFieldProps {
  id: string
  type?: string
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeTextarea?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
  required?: boolean
  textarea?: boolean
  value?: string
  ref?: Ref<HTMLInputElement>
}

const InputField = ({
  id,
  type = 'text',
  value,
  onChangeInput,
  onChangeTextarea,
  placeholder,
  required = true,
  textarea = false,
  ref
}: InputFieldProps) => {
  return (
      <div className="form-group">
        <label className="form-label" htmlFor={id}>
          {id.charAt(0).toUpperCase() + id.slice(1)}
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
                ref={ref}
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
