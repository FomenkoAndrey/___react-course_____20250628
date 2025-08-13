import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import type { BaseInputProps } from '../../types/baseInputProps'

const Textarea = ({ label, id, name, className, ...rest }: BaseInputProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label htmlFor={id || name} className="font-bold text-sm text-gray-600">
        {label}
      </label>
      <Field
        as="textarea"
        id={id || name}
        name={name}
        className={`border px-4 py-2 rounded ${className || ''}`}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
