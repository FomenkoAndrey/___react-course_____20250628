import type { FormikHelpers } from 'formik'
import type { RegistrationFormValues } from '../types/registrationFormValues.interface'

export const submitForm = (
  values: RegistrationFormValues,
  { setSubmitting }: FormikHelpers<RegistrationFormValues>
) => {
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 1000)
}
