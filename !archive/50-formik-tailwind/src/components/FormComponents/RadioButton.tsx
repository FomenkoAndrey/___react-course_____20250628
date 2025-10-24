/* eslint-disable @typescript-eslint/no-explicit-any */

import { Field } from 'formik'

export interface RadioButtonOptionsInterface {
  key: string
  value: string
}

export interface RadioButtonProps {
  label: string
  name: string
  options: RadioButtonOptionsInterface[]
  [key: string]: any
}

const RadioButton = ({ label, name, options, ...rest }: RadioButtonProps) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div>
        {options.map((option: RadioButtonOptionsInterface) => (
          <div key={option.key}>
            <label>
              <Field type="radio" name={name} value={option.value} {...rest} />
              {option.value}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  )
}

export default RadioButton
