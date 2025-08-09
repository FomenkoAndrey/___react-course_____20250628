import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

interface TextareaProps {
  label: string
  name: string
  [key: string]: unknown
}

const Textarea = ({ label, name, ...rest }: TextareaProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field id={name} as="textarea" name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
