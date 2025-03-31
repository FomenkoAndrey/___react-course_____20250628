import { Button } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import { validationSchema } from '../config/validationSchema'
import { initialValues } from '../config/initialValues'
import { handleSubmit } from '../helpers/handleSubmit'
import InputField from './InputField'

const RegistrationForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <InputField
              name="username"
              type="text"
              placeholder="Введіть логін"
              label="Логін"
              touched={touched}
              errors={errors}
            />
            <InputField
              name="password"
              type="password"
              placeholder="Введіть пароль"
              label="Пароль"
              touched={touched}
              errors={errors}
            />
            <InputField
              name="confirmPassword"
              type="password"
              placeholder="Підтвердіть пароль"
              label="Підтвердіть пароль"
              touched={touched}
              errors={errors}
            />
            <InputField
              name="email"
              type="email"
              placeholder="Введіть email"
              label="Email"
              touched={touched}
              errors={errors}
            />
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Зареєструватися
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegistrationForm
