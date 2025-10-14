import { Formik, Form } from 'formik'
import { object, string } from 'yup'
import FormField from './FormField'

const validationSchema = object({
  login: string()
    .required('Login is required')
    .min(3, 'Login must be at least 3 characters')
    .max(20, 'Login must be less than 20 characters'),
  password: string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(25, 'Password must be less than 25 characters')
})

const initialValues = {
  login: '',
  password: ''
}

const handleSubmit = (values: typeof initialValues) => {
  console.log(values)
}

const randomSuffix = () => Math.random().toString(36).substring(2, 15)

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validateOnMount={true}
    >
      {({ isValid, errors }) => (
        <Form>
          <FormField
            id={`login-${randomSuffix()}`}
            label="Login"
            name="login"
            placeholder="Enter your login"
            successMessage="Login is valid"
            error={errors.login}
            autoComplete="new-password"
          />
          <FormField
            id={`password-${randomSuffix()}`}
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            successMessage="Password is valid"
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
