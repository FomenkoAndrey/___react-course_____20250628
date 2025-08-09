import type { RegistrationFormValues } from '../types/RegistationFormValues.interface'
import type { FormikHelpers } from 'formik'

export const handleFormSubmit = (
  values: RegistrationFormValues,
  { setSubmitting }: FormikHelpers<RegistrationFormValues>
) => {
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 500)
}
