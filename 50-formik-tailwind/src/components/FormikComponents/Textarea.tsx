import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

interface TextareaProps {
  label: string
  name: string
  id: string
  [key: string]: any
}

const Textarea = ({ label, name, id, ...props }: TextareaProps) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <label htmlFor={id} className="font-semibold text-gray-800 text-lg">
        {label}
      </label>
      <Field
        as="textarea"
        id={id}
        name={name}
        className="border-2 border-gray-300 rounded-lg px-4 py-2 min-h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
