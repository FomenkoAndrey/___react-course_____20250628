/* eslint-disable @typescript-eslint/no-explicit-any */

import { Field } from 'formik'

export interface CheckboxOptionsInterface {
  key: string
  value: string
}

export interface CheckboxProps {
  label: string
  name: string
  options: CheckboxOptionsInterface[]
  [key: string]: any
}

const Checkbox = ({ label, name, options, ...rest }: CheckboxProps) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div>
        <Field name={name} {...rest}>
          {() => {
            return options.map((option: CheckboxOptionsInterface) => (
              <div key={option.key}>
                <input
                  type="checkbox"
                  name={name}
                  value={option.value}
                  {...rest}
                />
                <label htmlFor={option.key}>{option.value}</label>
              </div>
            ))
          }}
        </Field>
      </div>
    </fieldset>
  )
}

export default Checkbox
