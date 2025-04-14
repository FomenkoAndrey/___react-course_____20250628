import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import { BaseFormControlProps } from '../../types/baseFormControlProps'

const Textarea = ({ label, name, id, ...props }: BaseFormControlProps) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <label htmlFor={id} className="font-semibold text-gray-800 text-lg">
        {label}
      </label>
      <Field
        as="textarea"
        id={id}
        name={name}
        className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent box-border transition-colors"
        {...props}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
