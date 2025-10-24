/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

interface TextareaProps {
  label: string
  name: string

  [key: string]: any
}

const Textarea = ({ label, name, ...rest }: TextareaProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError as any} />
    </div>
  )
}

export default Textarea
