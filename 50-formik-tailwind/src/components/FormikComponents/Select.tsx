import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { OptionInterface } from '../../types/option.interface'
import { OptionsControlProps } from '../../types/optionsControlProps'

const Select = ({
  label,
  name,
  id,
  options,
  ...props
}: OptionsControlProps) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <label htmlFor={id} className="font-semibold text-gray-800 text-lg">
        {label}
      </label>
      <Field
        as="select"
        id={id}
        name={name}
        className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-lg appearance-none cursor-pointer box-border transition-colors"
        {...props}
      >
        {options.map((option: OptionInterface) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
