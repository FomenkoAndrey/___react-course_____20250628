import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { BaseFormControlProps } from '../../types/baseFormControlProps'
import { useField } from 'formik'
import { uk } from 'date-fns/locale'
const DatePicker = ({ label, name, id, placeholder }: BaseFormControlProps) => {
  const [field, , helpers] = useField(name)

  return (
    <div className="flex flex-col gap-4 mb-4">
      <label htmlFor={id} className="font-semibold text-gray-800 text-lg">
        {label}
      </label>
      <div className="relative">
        <ReactDatePicker
          id={id}
          portalId="root-portal"
          {...field}
          autoComplete="off"
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent box-border transition-colors"
          dateFormat="dd.MM.yyyy"
          locale={uk}
          name={name}
          onChange={(date) => {
            void helpers.setValue(date)
          }}
          placeholderText={placeholder}
          selected={field.value || null}
          wrapperClassName="w-full"
        />
      </div>
    </div>
  )
}

export default DatePicker
