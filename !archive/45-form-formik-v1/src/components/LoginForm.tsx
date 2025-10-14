import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'

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

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <Field
            type="text"
            id="login"
            name="login"
            placeholder="Enter your login"
            autoComplete="username"
          />
          <ErrorMessage name="login" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  )
}

export default LoginForm
