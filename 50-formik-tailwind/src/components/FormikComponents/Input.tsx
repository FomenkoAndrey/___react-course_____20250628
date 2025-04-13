import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

interface InputProps {
  label: string
  name: string
  id: string
  [key: string]: any
}

const Input = ({ label, name, id, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <label htmlFor={id} className="font-semibold text-gray-800 text-lg">
        {label}
      </label>
      <Field
        id={id}
        name={name}
        type="text"
        className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
