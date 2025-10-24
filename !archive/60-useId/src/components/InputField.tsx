import { useId } from 'react'

type InputFieldProps = {
  label: string
  description: string
  type?: string
}

const InputField = ({ label, description, type = 'text' }: InputFieldProps) => {
  const baseId = useId().replace(/_/g, '')
  const id = `input-${baseId}`
  const descriptionId = `description-${baseId}`

  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        aria-describedby={descriptionId}
        autoComplete="new-password"
      />
      <span id={descriptionId} className="description">
        {description}
      </span>
    </div>
  )
}

export default InputField
