import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

export interface RadioOption {
  key: string
  value: string
}

export interface RadioButtonProps {
  label: string
  name: string
  options: RadioOption[]
  [key: string]: unknown
}

const RadioButton = ({ label, name, options, ...rest }: RadioButtonProps) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div role="group" aria-labelledby={`${name}-group`}>
        {options.map((option: RadioOption) => {
          const id = `${name}-${option.value}`
          return (
            <label key={option.key} htmlFor={id} className="radio-item">
              <Field
                id={id}
                type="radio"
                name={name}
                value={option.value}
                {...rest}
              />
              <span>{option.key}</span>
            </label>
          )
        })}
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default RadioButton
