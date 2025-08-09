import { useState } from 'react'
import type { ChangeEvent, FocusEvent } from 'react'
import { Field, type FieldProps, ErrorMessage } from 'formik'
import SuccessMessage from './SuccessMessage'
import { Form } from 'react-bootstrap'
import { getFormControlClass } from '../helpers/getFormControlClass'
import { handleInputChange } from '../helpers/handleInputChange'
import { handleInputBlur } from '../helpers/handleInputBlur'

interface InputFieldProps {
  name: string
  type: string
  placeholder: string
  label: string
  disabled?: boolean
  readonly?: boolean
}

const InputField = ({ name, label, type, placeholder, disabled, readonly }: InputFieldProps) => {
  const autoComplete = type === 'password' ? 'new-password' : type === 'email' ? 'email' : 'off'

  const [interacted, setInteracted] = useState(false)

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name}>{label}</Form.Label>

      <Field name={name}>
        {({ field, form }: FieldProps) => {
          const formControlClass = getFormControlClass(form.errors, form.values, name)
          const hasValue = Boolean(form.values[name]?.toString().trim())
          const shouldShowError = interacted && Boolean(form.errors[name])
          const shouldShowSuccess = interacted && hasValue && !form.errors[name]

          const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            handleInputChange(event, field, form, name, interacted, setInteracted)
          }

          const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
            handleInputBlur(event, field, interacted, setInteracted)
          }

          return (
            <>
              <Form.Control
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={formControlClass}
                disabled={disabled}
                readOnly={readonly}
                isInvalid={shouldShowError}
                isValid={shouldShowSuccess}
                autoComplete={autoComplete}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {shouldShowError && <ErrorMessage name={name} component="div" className="invalid-feedback d-block" />}
              {shouldShowSuccess && <SuccessMessage />}
            </>
          )
        }}
      </Field>
    </Form.Group>
  )
}

export default InputField
