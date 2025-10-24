/* eslint-disable @typescript-eslint/no-explicit-any */

import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

export interface SelectOptionsInterface {
  key: string
  value: string
}

export interface SelectProps {
  label: string
  name: string
  options: SelectOptionsInterface[]

  [key: string]: any
}

const Select = ({ label, name, options, ...rest }: SelectProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option: SelectOptionsInterface) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError as any} />
    </div>
  )
}

export default Select
