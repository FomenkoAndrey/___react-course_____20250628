import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

export interface SelectOption {
  key: string
  value: string
}

export interface SelectProps {
  label: string
  name: string
  options: SelectOption[]
  [key: string]: unknown
}

const Select = ({ label, name, options, ...rest }: SelectProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field id={name} as="select" name={name} {...rest}>
        {options.map((option: SelectOption) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
