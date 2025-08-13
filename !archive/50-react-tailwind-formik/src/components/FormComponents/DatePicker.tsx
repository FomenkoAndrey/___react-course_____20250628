import { ErrorMessage, useField } from 'formik'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { uk, enUS } from 'date-fns/locale'
import TextError from './TextError'
import type { BaseInputProps } from '../../types/baseInputProps'

// Register locales once so `locale` string works
registerLocale('uk', uk)
registerLocale('en-US', enUS)

const DatePicker = ({ label, id, name, className, placeholder, ...rest }: BaseInputProps) => {
  const [field, , helpers] = useField(name)
  return (
    <div className={`flex flex-col space-y-2 mb-4 ${className || ''}`}>
      <label htmlFor={id || name} className="font-bold text-sm text-gray-600">
        {label}
      </label>
      <ReactDatePicker
        portalId="root-portal"
        id={name}
        {...field}
        {...rest}
        selected={field.value || null}
        onChange={(val) => helpers.setValue(val)}
        locale="uk"
        dateFormat="dd.MM.yyyy"
        className={`border px-4 py-2 rounded min-w-[200px] ${className || ''}`}
        placeholderText={placeholder}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default DatePicker
