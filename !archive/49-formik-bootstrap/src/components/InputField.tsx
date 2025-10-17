import { useState, type ChangeEvent, type FocusEvent } from 'react'
import { ErrorMessage, Field, type FieldProps } from 'formik'
import SuccessMessage from './SuccessMessage'
import { Form } from 'react-bootstrap'
import { getValidationState } from '../helpers/getValidationState'
import { fieldChange } from '../helpers/fieldChange'
import { fieldBlur } from '../helpers/fieldBlur'

export interface InputFieldProps {
  name: string
  type: string
  placeholder: string
  label: string
  disabled?: boolean
  readonly?: boolean
}

const InputField = ({
  name,
  label,
  type,
  placeholder,
  disabled,
  readonly
}: InputFieldProps) => {
  const autoComplete =
    type === 'password' ? 'new-password' : type === 'email' ? 'email' : 'off'

  const [interacted, setInteracted] = useState(false)

  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Field name={name}>
        {({ field, form }: FieldProps) => {
          const validationState = getValidationState(
            form.errors,
            form.values,
            name,
            interacted
          )

          const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            fieldChange(event, field, form, name, interacted, setInteracted)
          }

          const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
            fieldBlur(event, field, interacted, setInteracted)
          }

          return (
            <>
              <Form.Control
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readonly}
                isInvalid={validationState.shouldShowError}
                isValid={validationState.shouldShowSuccess}
                autoComplete={autoComplete}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {validationState.shouldShowError && (
                <ErrorMessage
                  name={name}
                  component="div"
                  className="invalid-feedback"
                />
              )}
              {validationState.shouldShowSuccess && <SuccessMessage />}
            </>
          )
        }}
      </Field>
    </Form.Group>
  )
}

export default InputField
