import type { ChangeEvent } from 'react'
import type { FieldInputProps, FormikProps } from 'formik'

export const handleInputChange = <T extends Record<string, unknown>>(
  event: ChangeEvent<HTMLInputElement>,
  field: FieldInputProps<T>,
  form: FormikProps<T>,
  name: string,
  interacted: boolean,
  setInteracted: (value: boolean) => void
) => {
  if (!interacted) setInteracted(true)
  if (!form.touched[name]) {
    form.setFieldTouched(name, true, false)
  }
  field.onChange(event)
}
