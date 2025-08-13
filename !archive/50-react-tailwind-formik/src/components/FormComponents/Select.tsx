import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import type { BaseFormControlProps } from '../../types/baseFormControlProps'
import type { Option } from '../../types/option.interface'

interface SelectProps extends BaseFormControlProps {
  options: Option[]
}

const Select = ({ label, id, name, options, className, ...rest }: SelectProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label htmlFor={id || name} className="font-bold text-sm text-gray-600">
        {label}
      </label>
      <Field
        as="select"
        id={id || name}
        name={name}
        className={`border px-4 py-2 rounded ${className || ''}`}
        {...rest}
      >
        {options.map((option: Option) => (
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
