import { Field, ErrorMessage } from 'formik'
import SuccessMessage from './SuccessMessage'

type FormFieldProps = {
  id: string
  label: string
  name: string
  successMessage: string
  type?: string
  autoComplete?: string
  error?: string
  placeholder?: string
}

const FormField = ({
  id,
  label,
  name,
  successMessage,
  type = 'text',
  placeholder = 'Enter your value',
  autoComplete = 'off',
  error = ''
}: FormFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <ErrorMessage name={name} component="div" className="error" />
      <SuccessMessage message={successMessage} error={error} />
    </div>
  )
}

export default FormField
