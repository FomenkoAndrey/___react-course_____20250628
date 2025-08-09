import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

interface InputProps {
  label: string
  name: string
  [key: string]: unknown
}

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field id={name} type="text" name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
