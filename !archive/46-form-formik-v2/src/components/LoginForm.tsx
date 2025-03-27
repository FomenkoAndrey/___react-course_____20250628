import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import FormField from './FormField'

const validationSchema = object({
  login: string()
    .required('Login is required')
    .min(3, 'Login must be at least 3 characters long')
    .max(15, 'Login must be less than 15 characters long'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must be less than 20 characters long')
})

const initialValues = {
  login: '',
  password: ''
}

const handleSubmit = (values: { login: string; password: string }) => {
  console.log(values)
}

// Генеруємо випадковий суфікс для ускладнення запам'ятовування полів
const randomSuffix = Math.random().toString(36).substring(2, 10)

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount={true}
    >
      {({ errors, touched, isValid }) => (
        <Form autoComplete="new-password">
          <FormField
            id={`login-${randomSuffix}`}
            name="login"
            type="text"
            label="Login"
            placeholder="Enter your login"
            successMessage="Login is valid"
            touched={touched.login}
            error={errors.login}
            autoComplete="new-password"
          />

          <FormField
            id={`password-${randomSuffix}`}
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            successMessage="Password is valid"
            touched={touched.password}
            error={errors.password}
            autoComplete="new-password"
          />

          <button type="submit" disabled={!isValid}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
