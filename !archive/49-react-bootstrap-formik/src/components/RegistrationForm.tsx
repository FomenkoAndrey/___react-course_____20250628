import { Button, Spinner } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import { handleFormSubmit } from '../helpers/handleFormSubmit'
import { validationSchema } from '../config/validationScheme'
import { initialValues } from '../config/initialValues'
import InputField from './InputField'

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnMount={true}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <InputField name="username" label="Username" type="text" placeholder="Enter username" />
          <InputField name="password" label="Password" type="password" placeholder="Enter password" />
          <InputField name="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm password" />
          <InputField name="email" label="Email" type="email" placeholder="Enter email" />
          <Button type="submit" variant="primary" disabled={!isValid || isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                <span>Submitting...</span>
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm
