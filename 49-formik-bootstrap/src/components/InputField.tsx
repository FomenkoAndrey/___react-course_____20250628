import { ErrorMessage } from 'formik'

import { Field } from 'formik'
import { FormikFieldState } from '../types/formikFieldState'
import SuccessMessage from './SuccessMessage'

interface InputFieldProps {
  name: string
  type: string
  placeholder: string
  label: string
  touched: FormikFieldState
  errors: FormikFieldState
  disabled?: boolean
  readOnly?: boolean
  autoComplete?: string
}

const InputField = ({
  name,
  type,
  placeholder,
  label,
  touched,
  errors,
  disabled,
  readOnly,
  autoComplete = 'off'
}: InputFieldProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        type={type}
        className={`form-control${
          touched[name] && errors[name]
            ? ' is-invalid'
            : touched[name] && !errors[name]
              ? ' is-valid'
              : ''
        }`}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
      />
      {touched[name] && errors[name] ? (
        <ErrorMessage
          name={name}
          component="div"
          className={`invalid-feedback`}
        />
      ) : (
        <SuccessMessage name={name} touched={touched} errors={errors} />
      )}
    </div>
  )
}

export default InputField
