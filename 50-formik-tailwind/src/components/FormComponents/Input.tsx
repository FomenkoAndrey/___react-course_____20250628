/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

interface InputProps {
  label: string
  name: string

  [key: string]: any
}

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError as any} />
    </div>
  )
}

export default Input
