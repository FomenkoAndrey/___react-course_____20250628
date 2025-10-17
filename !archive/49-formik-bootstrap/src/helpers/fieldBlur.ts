import type { FocusEvent } from 'react'
import type { FieldInputProps } from 'formik'

export const fieldBlur = <T extends Record<string, unknown>>(
  event: FocusEvent<HTMLInputElement>,
  field: FieldInputProps<T>,
  interacted: boolean,
  setInteracted: (value: boolean) => void
) => {
  if (!interacted) setInteracted(true)
  field.onBlur(event)
}
