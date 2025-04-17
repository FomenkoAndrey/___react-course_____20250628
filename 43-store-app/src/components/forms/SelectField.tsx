import { ChangeEvent } from 'react'
import { DEFAULT_OPTION_TEXT } from '../../data/mockData'

interface SelectFieldProps {
  id: string
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  required?: boolean
}

const SelectField = ({
  id,
  label,
  value,
  onChange,
  options,
  required = true
}: SelectFieldProps) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <select
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="" disabled>
          {DEFAULT_OPTION_TEXT}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
