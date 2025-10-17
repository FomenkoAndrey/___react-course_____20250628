import { Formik, Form } from 'formik'
import { initialValues } from '../config/initialValues'
import { validationSchema } from '../config/validationScheme'
import { formFields } from '../config/formFields'
import { submitForm } from '../helpers/submitForm'
import InputField from './InputField'
import SubmitButton from './SubmitButton'

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
      validateOnChange={true}
      validateOnMount={true}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          {formFields.map((field) => (
            <InputField key={field.name} {...field} />
          ))}

          <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
