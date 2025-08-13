import { ErrorMessage, Field, type FieldProps } from 'formik'
import TextError from './TextError'
import type { BaseFormControlProps } from '../../types/baseFormControlProps'
import type { Option } from '../../types/option.interface'

interface RadioButtonProps extends BaseFormControlProps {
  options: Option[]
}

const RadioButton = ({ label, id, name, options, className, ...rest }: RadioButtonProps) => {
  return (
    <fieldset className={`flex flex-col space-y-2 mb-4 ${className || ''}`}>
      <legend className="font-bold text-sm text-gray-600">{label}</legend>
      <div className="flex space-x-6">
        <Field name={name}>
          {({ field }: FieldProps) => {
            return options.map((option: Option) => (
              <div className="flex items-center" key={option.key}>
                <input
                  id={`${id || name}-${option.value}`}
                  {...field}
                  type="radio"
                  checked={field.value !== undefined && field.value === option.value}
                  value={option.value}
                  {...rest}
                  className="mr-1.5"
                />
                <label htmlFor={`${id || name}-${option.value}`} className="text-sm text-gray-600">
                  {option.value}
                </label>
              </div>
            ))
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </fieldset>
  )
}

export default RadioButton
