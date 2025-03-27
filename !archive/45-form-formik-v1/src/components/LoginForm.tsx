import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

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
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" component="div" className="error" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  )
}

export default LoginForm
