import { useId } from 'react'

type InputFieldProps = {
  label: string
  description: string
  type?: string
}

const InputField = ({ label, description, type = 'text' }: InputFieldProps) => {
  const id = useId()
  const descriptionId = useId()

  return (
    <div className="input-field">
      <input
        id={id}
        type={type}
        aria-describedby={descriptionId}
        placeholder=" "
      />
      <label htmlFor={id}>{label}</label>
      <p id={descriptionId} className="description">
        {description}
      </p>
    </div>
  )
}

export default InputField
