import { FormikHelpers } from 'formik'
import { RegistrationFormValues } from '../types/registrationFormValues.interface'

export const handleSubmit = (
  values: RegistrationFormValues,
  { setSubmitting }: FormikHelpers<RegistrationFormValues>
) => {
  setTimeout(() => {
    console.log(values)
    setSubmitting(false)
  }, 1000)
}
