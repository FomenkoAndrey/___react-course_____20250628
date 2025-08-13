import { useId } from 'react'

type InputFieldProps = {
  label: string
  type: string
  description: string
}

const InputField = ({ label, type = 'text', description }: InputFieldProps) => {
  const baseId = useId().replace(/[«»]/g, '')
  const id = `input-${baseId}`
  const descriptionId = `${id}-description`

  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} aria-describedby={descriptionId} />
      <p id={descriptionId} className="description">
        {description}
      </p>
    </div>
  )
}

export default InputField
