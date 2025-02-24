import { ChangeEvent } from 'react'

interface SelectFieldProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; text: string }[]
  required?: boolean
}

const SelectField = ({id, value, onChange, options, required = true}: SelectFieldProps) => {
  const DEFAULT_OPTION_TEXT = `Please select a ${id}...`

  return (
      <div className="form-group">
        <label className="form-label" htmlFor={id}>
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </label>
        <select className="form-control" id={id} value={value} onChange={onChange} required={required}>
          <option value="">{DEFAULT_OPTION_TEXT}</option>
          {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
          ))}
        </select>
      </div>
  )
}

export default SelectField
